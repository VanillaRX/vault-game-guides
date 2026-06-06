import { GAMES, GUIDES } from "@/lib/data";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vanillarx.github.io/vault-game-guides";

  const games = GAMES.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guides = GUIDES.map((guide) => ({
    url: `${baseUrl}/games/${guide.gameSlug}/guides/${guide.slug}`,
    lastModified: new Date(guide.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/games`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    ...games,
    ...guides,
  ];
}
