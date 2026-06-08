import { getAllGames, getAllTags, getAllBestCategories } from "@/lib/game-data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vault-game-guides.com";
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const games = getAllGames();

  for (const lang of ["en", "zh"] as const) {
    // Static pages
    entries.push(
      { url: `${baseUrl}/${lang}`, lastModified: now, changeFrequency: "daily", priority: 1 },
      { url: `${baseUrl}/${lang}/search`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
      { url: `${baseUrl}/${lang}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
      { url: `${baseUrl}/${lang}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
      { url: `${baseUrl}/${lang}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    );

    // Game detail pages
    for (const game of games) {
      entries.push({
        url: `${baseUrl}/${lang}/game/${game.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    // Games Like pages
    for (const game of games) {
      entries.push({
        url: `${baseUrl}/${lang}/games-like/${game.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    // Tag pages
    for (const tag of getAllTags()) {
      entries.push({
        url: `${baseUrl}/${lang}/tag/${tag.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    // Best Games pages
    for (const cat of getAllBestCategories()) {
      entries.push({
        url: `${baseUrl}/${lang}/best/${cat.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
