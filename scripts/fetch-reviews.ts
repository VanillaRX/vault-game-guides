/**
 * Fetch top helpful Steam reviews and store in game JSON.
 * Server-side only — Steam API doesn't support CORS.
 */
import * as fs from "node:fs";
import * as path from "node:path";

const DIR = path.resolve(__dirname, "..", "src", "data", "games");
const REVIEWS_API = "https://store.steampowered.com/appreviews";

interface SteamReview {
  recommendationid: string;
  review: string;
  voted_up: boolean;
  votes_up: number;
  votes_funny: number;
  timestamp_created: number;
}

async function fetchReviews(appId: number): Promise<SteamReview[]> {
  try {
    const url = `${REVIEWS_API}/${appId}?json=1&filter=most_helpful&language=all&num_per_page=10&purchase_type=all`;
    const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const d = (await r.json()) as { success: number; reviews?: SteamReview[] };
    if (!d.success || !d.reviews) return [];
    // Only reviews with >10 helpful votes
    return d.reviews.filter(rev => rev.votes_up > 10).slice(0, 5);
  } catch {
    return [];
  }
}

async function main() {
  const files = fs.readdirSync(DIR).filter(f => f.endsWith(".json") && f !== "index.json");
  let ok = 0;

  for (const f of files) {
    const fp = path.join(DIR, f);
    const game = JSON.parse(fs.readFileSync(fp, "utf-8"));
    if (!game.steamAppId || game.reviewScore === undefined) continue;
    if (game.topReviews && game.topReviews.length > 0) {
      console.log(game.slug, "cached");
      continue;
    }

    process.stdout.write(`${game.slug}... `);
    const reviews = await fetchReviews(game.steamAppId);
    game.topReviews = reviews;
    if (reviews.length > 0) {
      // Truncate long reviews
      game.topReviews = reviews.map(r => ({
        ...r,
        review: r.review.length > 600 ? r.review.substring(0, 600) + "…" : r.review,
      }));
    }
    fs.writeFileSync(fp, JSON.stringify(game, null, 2));
    ok++;
    console.log(`${reviews.length} reviews`);
    await sleep(3000);
  }

  // Rebuild index
  const games = files.map(f => {
    try { return JSON.parse(fs.readFileSync(path.join(DIR, f), "utf-8")); } catch { return null; }
  }).filter(Boolean);
  fs.writeFileSync(path.join(DIR, "index.json"), JSON.stringify({ games, total: games.length, updatedAt: new Date().toISOString() }, null, 2));
  console.log(`\n${ok} games with reviews. Index rebuilt.`);
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }
main().catch(e => { console.error(e); process.exit(1); });
