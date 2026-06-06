export interface Game {
  slug: string;
  title: string;
  steamAppId: number;
  shortDescription: string;
  description: string;
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
  description: string;
  category: "beginner" | "advanced" | "achievement" | "build" | "walkthrough" | "tips";
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  wordCount: number;
  estimatedReadTime: number;
  publishDate: string;
  content?: string;
}
