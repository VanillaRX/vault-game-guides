import { GAMES, GUIDES } from "@/lib/data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vault-game-guides.com";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Canonical pages (both languages)
  for (const lang of ["en", "zh"] as const) {
    entries.push(
      { url: `${baseUrl}/${lang}`, lastModified: now, changeFrequency: "daily", priority: 1 },
      { url: `${baseUrl}/${lang}/games`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
      { url: `${baseUrl}/${lang}/guides`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
      { url: `${baseUrl}/${lang}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
      { url: `${baseUrl}/${lang}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
      { url: `${baseUrl}/${lang}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
      { url: `${baseUrl}/${lang}/search`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    );

    for (const game of GAMES) {
      entries.push({
        url: `${baseUrl}/${lang}/games/${game.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const guide of GUIDES) {
      entries.push({
        url: `${baseUrl}/${lang}/games/${guide.gameSlug}/guides/${guide.slug}`,
        lastModified: new Date(guide.publishDate),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}
