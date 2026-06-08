import * as fs from "node:fs";
import * as path from "node:path";

const DIR = path.resolve(__dirname, "..", "src", "data", "games");

interface ReviewData { positive: number; negative: number; total: number; score: number; desc: string; }

async function fetchReviews(appId: number): Promise<ReviewData | null> {
  try {
    const url = `https://store.steampowered.com/appreviews/${appId}?json=1&num_per_page=0`;
    const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const d = await r.json() as { success: number; query_summary?: { total_positive: number; total_negative: number; total_reviews: number; review_score: number; review_score_desc: string } };
    if (d.success && d.query_summary) {
      return {
        positive: d.query_summary.total_positive || 0,
        negative: d.query_summary.total_negative || 0,
        total: d.query_summary.total_reviews || 0,
        score: d.query_summary.review_score || 0,
        desc: d.query_summary.review_score_desc || "",
      };
    }
  } catch {}
  return null;
}

async function main() {
  const files = fs.readdirSync(DIR).filter(f => f.endsWith(".json") && f !== "index.json");
  let fixed = 0;

  for (const f of files) {
    const fp = path.join(DIR, f);
    const game = JSON.parse(fs.readFileSync(fp, "utf-8"));
    if (!game.steamAppId) continue;

    const total = (game.positiveReviews || 0) + (game.negativeReviews || 0);
    if (total > 0 && game.negativeReviews > 0) {
      console.log(game.slug, "already ok");
      continue;
    }

    process.stdout.write(`${game.slug}... `);
    const rev = await fetchReviews(game.steamAppId);
    if (!rev) { console.log("no data"); await sleep(3000); continue; }

    game.positiveReviews = rev.positive;
    game.negativeReviews = rev.negative;
    game.reviewScore = rev.score;
    game.reviewDesc = rev.desc;
    fs.writeFileSync(fp, JSON.stringify(game, null, 2));
    fixed++;
    const pct = rev.total > 0 ? Math.round(rev.positive / rev.total * 100) : 0;
    console.log(`${rev.positive}/${rev.total} (${pct}%) ${rev.desc}`);
    await sleep(3000);
  }

  // Rebuild index
  const games = files.map(f => {
    try { return JSON.parse(fs.readFileSync(path.join(DIR, f), "utf-8")); } catch { return null; }
  }).filter(Boolean);
  fs.writeFileSync(path.join(DIR, "index.json"), JSON.stringify({ games, total: games.length, updatedAt: new Date().toISOString() }, null, 2));

  console.log(`\nFixed ${fixed} games. Index rebuilt.`);
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

main().catch(e => { console.error(e); process.exit(1); });
