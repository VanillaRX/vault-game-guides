/**
 * Steam Data Collector
 *
 * Fetches game data from Steam Store API for all games in seed-games.json.
 * Stores raw response to src/data/raw/{appId}.json
 * Stores normalized data to src/data/games/{slug}.json
 *
 * Features: rate limiting, resume support, incremental updates.
 *
 * Usage: npx tsx scripts/fetch-steam.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";

const STEAM_API = "https://store.steampowered.com/api/appdetails";
const RAW_DIR = path.resolve(__dirname, "..", "src", "data", "raw");
const GAMES_DIR = path.resolve(__dirname, "..", "src", "data", "games");
const GAMES_INDEX = path.resolve(GAMES_DIR, "index.json");
const SEED_FILE = path.resolve(__dirname, "seed-games.json");
const PROGRESS_FILE = path.resolve(__dirname, "..", "src", "data", ".fetch-progress.json");

// Rate limit: Steam Store API recommends ~200 requests per 5 minutes
// We use 1 request per 2 seconds to be safe
const RATE_LIMIT_MS = 2000;
const MAX_RETRIES = 3;

interface SeedGame {
  steamAppId: number;
  slug: string;
}

interface FetchProgress {
  completed: number[];
  failed: Record<number, string>;
  lastUpdated: string;
}

function loadProgress(): FetchProgress {
  try {
    const data = fs.readFileSync(PROGRESS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return { completed: [], failed: {}, lastUpdated: "" };
  }
}

function saveProgress(progress: FetchProgress) {
  fs.mkdirSync(path.dirname(PROGRESS_FILE), { recursive: true });
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchAppDetails(appId: number, retries = MAX_RETRIES): Promise<Record<string, unknown> | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const url = `${STEAM_API}?appids=${appId}`;
      const response = await fetch(url, {
        headers: { "Accept": "application/json" },
      });

      if (!response.ok) {
        if (response.status === 429) {
          console.log(`  Rate limited, waiting 30s...`);
          await sleep(30000);
          continue;
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json() as Record<string, unknown>;
      const appData = data[String(appId)] as Record<string, unknown> | undefined;

      if (!appData?.success) {
        return null;
      }

      return appData.data as Record<string, unknown>;
    } catch (err) {
      if (attempt < retries - 1) {
        console.log(`  Retry ${attempt + 1}/${retries}...`);
        await sleep(5000);
      } else {
        throw err;
      }
    }
  }
  return null;
}

function normalizeGame(raw: Record<string, unknown>, seed: SeedGame): Record<string, unknown> {
  const genres = (raw.genres as Array<{ description: string }> | undefined)
    ?.map((g) => g.description) ?? [];
  const categories = (raw.categories as Array<{ id: number; description: string }> | undefined) ?? [];
  const languages = (raw.supported_languages as string) ?? "";

  // Extract screenshots
  const screenshots = (raw.screenshots as Array<{ path_full: string }> | undefined)
    ?.map((s) => s.path_full) ?? [];

  // Feature detection from categories
  const hasCategory = (id: number) => categories.some((c) => c.id === id);
  const supportsMultiplayer = hasCategory(1);
  const supportsCoop = hasCategory(9);
  const supportsController = hasCategory(18) || hasCategory(28);

  // Language detection
  const hasChinese = languages.includes("Simplified Chinese") || languages.includes("Traditional Chinese");

  // Review data
  const recommendations = raw.recommendations as { total: number } | undefined;

  // Release date
  const releaseDate = raw.release_date as { coming_soon: boolean; date: string } | undefined;

  // Price
  const priceOverview = raw.price_overview as Record<string, unknown> | undefined;

  return {
    slug: seed.slug,
    steamAppId: seed.steamAppId,
    title: raw.name ?? seed.slug,
    zhTitle: "",
    shortDescription: raw.short_description ?? "",
    zhShortDescription: "",
    description: raw.about_the_game ?? raw.detailed_description ?? "",
    zhDescription: "",
    genres,
    tags: [],
    steamTags: genres,
    coverImage: raw.header_image ?? "",
    headerImage: raw.header_image ?? "",
    backgroundImage: (raw.background_raw as string) ?? "",
    screenshots,
    developer: (raw.developers as string[])?.[0] ?? "",
    publisher: (raw.publishers as string[])?.[0] ?? "",
    releaseDate: releaseDate?.date ?? "",
    supportsChinese: hasChinese,
    supportsMultiplayer,
    supportsCoop,
    supportsController,
    steamDeckVerified: false,
    positiveReviews: recommendations?.total ?? 0,
    negativeReviews: 0,
    metacriticScore: (raw.metacritic as { score: number })?.score,
    featured: false,
    guideCount: 0,
    metaDescriptionEn: raw.short_description ?? "",
    metaDescriptionZh: "",
    similarGames: [],
    source: "steam_api",
    fetchedAt: new Date().toISOString(),
  };
}

async function main() {
  console.log("=== Steam Data Collector ===\n");

  // Load seed list
  const seeds: SeedGame[] = JSON.parse(fs.readFileSync(SEED_FILE, "utf-8"));
  console.log(`Total games in seed list: ${seeds.length}`);

  // Load progress
  const progress = loadProgress();
  const pending = seeds.filter((s) => !progress.completed.includes(s.steamAppId) && !progress.failed[s.steamAppId]);
  console.log(`Already fetched: ${progress.completed.length}, Failed: ${Object.keys(progress.failed).length}`);
  console.log(`Remaining: ${pending.length}\n`);

  // Ensure directories exist
  fs.mkdirSync(RAW_DIR, { recursive: true });
  fs.mkdirSync(GAMES_DIR, { recursive: true });

  let count = 0;
  const allGames: Record<string, unknown>[] = [];

  for (const seed of pending) {
    count++;
    console.log(`[${count}/${pending.length}] ${seed.slug} (AppID: ${seed.steamAppId})`);

    try {
      // Fetch and save raw data
      const raw = await fetchAppDetails(seed.steamAppId);
      if (!raw) {
        console.log(`  No data (delisted or invalid)`);
        progress.failed[seed.steamAppId] = "no_data";
        saveProgress(progress);
        await sleep(RATE_LIMIT_MS);
        continue;
      }

      // Save raw data
      const rawPath = path.resolve(RAW_DIR, `${seed.steamAppId}.json`);
      fs.writeFileSync(rawPath, JSON.stringify(raw, null, 2));

      // Normalize and save game data
      const game = normalizeGame(raw, seed);
      const gamePath = path.resolve(GAMES_DIR, `${seed.slug}.json`);
      fs.writeFileSync(gamePath, JSON.stringify(game, null, 2));

      allGames.push(game);

      progress.completed.push(seed.steamAppId);
      saveProgress(progress);

      const gameTitle = (game as Record<string, unknown>).title ?? seed.slug;
      const gameGenres = ((game as Record<string, unknown>).genres as string[])?.join(", ") || "no genres";
      console.log(`  ✓ ${gameTitle} | ${gameGenres}`);

      // Rate limit
      await sleep(RATE_LIMIT_MS);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.log(`  ✗ Error: ${msg}`);
      progress.failed[seed.steamAppId] = msg;
      saveProgress(progress);
      await sleep(5000);
    }
  }

  // Write index
  const indexData = {
    games: allGames,
    total: allGames.length,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(GAMES_INDEX, JSON.stringify(indexData, null, 2));

  console.log(`\n=== Done ===`);
  console.log(`Fetched: ${progress.completed.length}, Failed: ${Object.keys(progress.failed).length}`);
  console.log(`Index written to ${GAMES_INDEX}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
