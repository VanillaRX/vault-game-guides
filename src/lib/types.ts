export interface Game {
  slug: string;
  title: string;
  zhTitle: string;
  steamAppId: number;
  shortDescription: string;
  zhShortDescription: string;
  description: string;
  zhDescription: string;
  genres: string[];
  coverImage: string;
  headerImage: string;
  releaseDate: string;
  developer: string;
  guideCount: number;
  featured: boolean;
}

export interface Guide {
  slug: string;
  gameSlug: string;
  title: string;
  zhTitle: string;
  description: string;
  zhDescription: string;
  category: "beginner" | "advanced" | "achievement" | "build" | "walkthrough" | "tips";
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  wordCount: number;
  estimatedReadTime: number;
  publishDate: string;
  content?: string;
}
