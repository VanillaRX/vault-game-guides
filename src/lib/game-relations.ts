/**
 * Game relationship computation.
 *
 * Builds a similarity graph from shared tags/genres since `similarGames`
 * is not yet populated for most games. Used by the constellation homepage.
 */

import type { GameEntry } from "@/lib/types";

/** Weight per shared tag (tags are more specific than genres). */
const TAG_WEIGHT = 3;
/** Weight per shared genre. */
const GENRE_WEIGHT = 1;
/** Bonus when both games share the same primary (first) tag. */
const PRIMARY_TAG_BONUS = 2;

/**
 * Compute a similarity score (higher = more related) between two games.
 * Based on shared tags and genres.
 */
export function computeSimilarity(a: GameEntry, b: GameEntry): number {
  if (a.slug === b.slug) return 0;

  let score = 0;

  // Shared tags
  for (const tag of a.tags) {
    if (b.tags.includes(tag)) {
      score += TAG_WEIGHT;
      // Bonus if it's the primary tag for both
      if (a.tags[0] === tag && b.tags[0] === tag) score += PRIMARY_TAG_BONUS;
    }
  }

  // Shared genres
  for (const genre of a.genres) {
    if (b.genres.includes(genre)) score += GENRE_WEIGHT;
  }

  return score;
}

export interface RelatedGame {
  slug: string;
  score: number;
}

/**
 * Find the top N most related games for a given center game.
 * Falls back to highest-reviewed games if no tag overlap exists.
 */
export function findRelatedGames(
  centerSlug: string,
  allGames: GameEntry[],
  count = 5,
): RelatedGame[] {
  const center = allGames.find((g) => g.slug === centerSlug);
  if (!center) return [];

  const scored = allGames
    .filter((g) => g.slug !== centerSlug)
    .map((g) => ({ slug: g.slug, score: computeSimilarity(center, g) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  // If we have enough tag-matched results, return them
  if (scored.length >= count) return scored.slice(0, count);

  // Pad with random popular games for diversity
  const existing = new Set(scored.map((r) => r.slug));
  const fallback = allGames
    .filter((g) => g.slug !== centerSlug && !existing.has(g.slug))
    .sort((a, b) => b.positiveReviews - a.positiveReviews)
    .slice(0, count - scored.length)
    .map((g) => ({ slug: g.slug, score: 0 }));

  return [...scored, ...fallback].slice(0, count);
}

/**
 * Pick a random game weighted toward higher review counts (more interesting).
 */
export function pickRandomCenter(allGames: GameEntry[]): string {
  // Weight by log(reviewCount) to favor popular games but still allow variety
  const weights = allGames.map((g) =>
    Math.log2((g.positiveReviews + g.negativeReviews || 1) + 1),
  );
  const total = weights.reduce((s, w) => s + w, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return allGames[i].slug;
  }
  return allGames[0]?.slug ?? "";
}
