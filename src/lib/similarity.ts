/**
 * Dynamic Game Similarity Engine (§7)
 *
 * Computes similarity scores between games based on:
 *   tag_overlap * 0.5 + genre_match * 0.3 + popularity_factor * 0.2
 *
 * No hardcoded recommendations — purely data-driven.
 */

import type { GameEntry, GamesLikeRecommendation } from "@/lib/types";

interface SimilarityResult {
  slug: string;
  score: number;      // 0-100
  tagOverlap: number; // 0-100
  genreMatch: number; // 0-100
  popularity: number; // 0-100
}

export function computeSimilarity(source: GameEntry, target: GameEntry): SimilarityResult {
  // Tag overlap (50%)
  const sourceTags = new Set(source.tags);
  const commonTags = target.tags.filter((t) => sourceTags.has(t));
  const tagOverlap = sourceTags.size > 0
    ? (commonTags.length / Math.max(sourceTags.size, target.tags.length)) * 100
    : 0;

  // Genre match (30%)
  const sourceGenres = new Set(source.genres.map((g) => g.toLowerCase()));
  const commonGenres = target.genres.filter((g) => sourceGenres.has(g.toLowerCase()));
  const genreMatch = sourceGenres.size > 0
    ? (commonGenres.length / Math.max(sourceGenres.size, target.genres.length)) * 100
    : 0;

  // Popularity factor (20%) — normalized review count
  const maxReviews = 500000; // approximate max for indie/AA games
  const sourcePop = Math.min(source.positiveReviews / maxReviews, 1);
  const targetPop = Math.min(target.positiveReviews / maxReviews, 1);
  const popularity = (1 - Math.abs(sourcePop - targetPop)) * 100;

  // Weighted score
  const score = tagOverlap * 0.5 + genreMatch * 0.3 + popularity * 0.2;

  return { slug: target.slug, score: Math.round(score), tagOverlap: Math.round(tagOverlap), genreMatch: Math.round(genreMatch), popularity: Math.round(popularity) };
}

/** Get top N similar games for a given game */
export function getSimilarGames(
  source: GameEntry,
  allGames: GameEntry[],
  limit = 6,
  minScore = 25,
): GamesLikeRecommendation[] {
  return allGames
    .filter((g) => g.slug !== source.slug)
    .map((g) => {
      const { score } = computeSimilarity(source, g);
      return {
        slug: g.slug,
        similarityScore: score,
        reasonEn: generateReason(source, g, "en"),
        reasonZh: generateReason(source, g, "zh"),
      };
    })
    .filter((r) => r.similarityScore >= minScore)
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, limit);
}

/** Generate a human-readable reason for the recommendation */
function generateReason(source: GameEntry, target: GameEntry, lang: "en" | "zh"): string {
  const commonTags = target.tags.filter((t) => source.tags.includes(t));
  const commonGenres = target.genres.filter((g) =>
    source.genres.map((sg) => sg.toLowerCase()).includes(g.toLowerCase())
  );

  const tagName = commonTags[0] || commonGenres[0]?.toLowerCase() || "";
  const tagLabel = tagName.replace(/-/g, " ");

  if (lang === "zh") {
    const tagZh: Record<string, string> = {
      farming: "农场", cozy: "休闲", "city-builder": "城市建造", management: "管理",
      survival: "生存", crafting: "制作", automation: "自动化", "colony-sim": "殖民模拟",
      "life-sim": "生活模拟", rpg: "RPG", strategy: "策略", simulation: "模拟",
    };
    const t = tagZh[tagName] || tagLabel;
    return `相似的${t}玩法与体验`;
  }

  return `Similar ${tagLabel} gameplay and experience`;
}

/** Build a complete Games Like index for all games */
export function buildGamesLikeIndex(allGames: GameEntry[]): Record<string, {
  sourceGame: string;
  introEn: string;
  introZh: string;
  recommendations: GamesLikeRecommendation[];
}> {
  const index: Record<string, { sourceGame: string; introEn: string; introZh: string; recommendations: GamesLikeRecommendation[] }> = {};

  for (const game of allGames) {
    const recs = getSimilarGames(game, allGames);
    if (recs.length === 0) continue;

    index[game.slug] = {
      sourceGame: game.slug,
      introEn: `If you enjoy ${game.title}, you'll likely enjoy these games too. Recommendations based on gameplay tags, genre overlap, and community reception.`,
      introZh: `如果你喜欢《${game.zhTitle || game.title}》，这些游戏可能会适合你。基于玩法标签、类型重叠和社区反馈的智能推荐。`,
      recommendations: recs,
    };
  }

  return index;
}
