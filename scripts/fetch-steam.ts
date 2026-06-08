/**
 * Steam Data Collector v2
 *
 * 1. Reads game names from seed-games.json
 * 2. Searches Steam for correct App ID (cc=us to avoid region blocking)
 * 3. Fetches full details from App Details API
 * 4. Saves raw data + normalized game JSON
 */

import * as fs from "node:fs";
import * as path from "node:path";

const SEARCH_API = "https://store.steampowered.com/api/storesearch/";
const DETAIL_API = "https://store.steampowered.com/api/appdetails";
const RAW_DIR = path.resolve(__dirname, "..", "src", "data", "raw");
const GAMES_DIR = path.resolve(__dirname, "..", "src", "data", "games");
const GAMES_INDEX = path.resolve(GAMES_DIR, "index.json");
const SEED_FILE = path.resolve(__dirname, "seed-games.json");

const RATE_MS = 3000;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithRetry(url: string, retries = 3): Promise<Record<string, unknown>> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      return (await res.json()) as Record<string, unknown>;
    } catch (err) {
      if (i < retries - 1) {
        const wait = (i + 1) * 5000;
        console.log(`  Retry in ${wait / 1000}s...`);
        await sleep(wait);
      } else {
        throw err;
      }
    }
  }
  throw new Error("unreachable");
}

async function searchGame(name: string): Promise<{ id: number; name: string } | null> {
  const url = `${SEARCH_API}?term=${encodeURIComponent(name)}&cc=us&l=english`;
  const data = await fetchWithRetry(url);
  const items = data.items as Array<{ id: number; name: string }> | undefined;
  return items?.[0] ?? null;
}

async function fetchApp(appId: number): Promise<Record<string, unknown> | null> {
  const url = `${DETAIL_API}?appids=${appId}&cc=us`;
  const data = await fetchWithRetry(url);
  const app = data[String(appId)] as { success: boolean; data?: Record<string, unknown> } | undefined;
  return app?.success ? (app.data as Record<string, unknown>) : null;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[™®:]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(raw: Record<string, unknown>, slug: string, appId: number): Record<string, unknown> {
  const genres = (raw.genres as Array<{ description: string }> | undefined)?.map((g) => g.description) ?? [];
  const cats = (raw.categories as Array<{ id: number; description: string }> | undefined) ?? [];
  const hasCat = (id: number) => cats.some((c) => c.id === id);
  const languages = (raw.supported_languages as string) ?? "";

  return {
    slug,
    steamAppId: appId,
    title: raw.name ?? slug,
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
    screenshots: (raw.screenshots as Array<{ path_full: string }> | undefined)?.map((s) => s.path_full) ?? [],
    developer: (raw.developers as string[])?.[0] ?? "",
    publisher: (raw.publishers as string[])?.[0] ?? "",
    releaseDate: (raw.release_date as { date: string })?.date ?? "",
    supportsChinese: languages.includes("Simplified Chinese") || languages.includes("Traditional Chinese"),
    supportsMultiplayer: hasCat(1),
    supportsCoop: hasCat(9),
    supportsController: hasCat(18) || hasCat(28),
    steamDeckVerified: (raw.steam_deck_compat_category === 1),
    positiveReviews: (raw.recommendations as { total: number })?.total ?? 0,
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
  console.log("=== Steam Data Collector v2 ===\n");

  fs.mkdirSync(RAW_DIR, { recursive: true });
  fs.mkdirSync(GAMES_DIR, { recursive: true });

  const names: string[] = JSON.parse(fs.readFileSync(SEED_FILE, "utf-8"));
  console.log(`Games to collect: ${names.length}\n`);

  const allGames: Record<string, unknown>[] = [];
  let ok = 0, fail = 0;

  // Resume: skip already-fetched games
  const existing = new Set(
    fs.readdirSync(GAMES_DIR).filter((f) => f.endsWith(".json") && f !== "index.json").map((f) => f.replace(".json", ""))
  );

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const slug = slugify(name);

    if (existing.has(slug)) {
      console.log(`[${i + 1}/${names.length}] ${name} (cached)`);
      // Load existing into allGames
      try {
        const g = JSON.parse(fs.readFileSync(path.resolve(GAMES_DIR, `${slug}.json`), "utf-8"));
        allGames.push(g);
      } catch {}
      continue;
    }

    console.log(`[${i + 1}/${names.length}] ${name}`);

    // Step 1: Search for correct App ID
    const search = await searchGame(name);
    if (!search) {
      console.log(`  ✗ Not found on Steam`);
      fail++;
      await sleep(RATE_MS);
      continue;
    }
    console.log(`  → AppID: ${search.id} (${search.name})`);

    // Step 2: Fetch details
    await sleep(RATE_MS);
    const raw = await fetchApp(search.id);
    if (!raw) {
      console.log(`  ✗ No details`);
      fail++;
      continue;
    }

    // Save raw
    fs.writeFileSync(path.resolve(RAW_DIR, `${search.id}.json`), JSON.stringify(raw, null, 2));

    // Normalize
    const game = normalize(raw, slug, search.id);
    fs.writeFileSync(path.resolve(GAMES_DIR, `${slug}.json`), JSON.stringify(game, null, 2));
    allGames.push(game);

    console.log(`  ✓ ${game.title}`);
    ok++;
    await sleep(RATE_MS);
  }

  // Write index
  fs.writeFileSync(GAMES_INDEX, JSON.stringify({
    games: allGames,
    total: allGames.length,
    updatedAt: new Date().toISOString(),
  }, null, 2));

  console.log(`\n=== Done: ${ok} ok, ${fail} failed ===`);
}

main().catch((err) => { console.error(err); process.exit(1); });
