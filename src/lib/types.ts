/** Game type for discovery platform, backed by Steam API data. */
export interface GameEntry {
  slug: string;
  steamAppId: number;
  title: string;
  zhTitle: string;
  shortDescription: string;
  zhShortDescription: string;
  description: string;
  zhDescription: string;
  genres: string[];
  tags: string[];
  steamTags: string[];
  coverImage: string;
  headerImage: string;
  backgroundImage?: string;
  screenshots: string[];
  developer: string;
  publisher: string;
  releaseDate: string;
  supportsChinese: boolean;
  supportsMultiplayer: boolean;
  supportsCoop: boolean;
  supportsController: boolean;
  steamDeckVerified: boolean;
  positiveReviews: number;
  negativeReviews: number;
  reviewScore?: number;
  reviewDesc?: string;
  topReviews?: Array<{
    recommendationid: string;
    review: string;
    zh_review?: string;
    voted_up: boolean;
    votes_up: number;
    votes_funny: number;
  }>;
  metacriticScore?: number;
  featured: boolean;
  guideCount: number;
  metaDescriptionEn: string;
  metaDescriptionZh: string;
  similarGames: string[];
}

/** "Games Like" entry for one game */
export interface GamesLikeEntry {
  sourceGame: string;
  /** AI-generated intro paragraph */
  introEn: string;
  introZh: string;
  recommendations: GamesLikeRecommendation[];
}

export interface GamesLikeRecommendation {
  slug: string;
  similarityScore: number; // 0-100
  reasonEn: string;
  reasonZh: string;
}

/** Best Games category entry */
export interface BestGamesCategory {
  slug: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  games: BestGamesEntry[];
}

export interface BestGamesEntry {
  slug: string;
  rank: number;
  reasonEn: string;
  reasonZh: string;
}

/** Tag taxonomy entry */
export interface TagEntry {
  slug: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  gameCount: number;
  section: "genre" | "feature" | "status";
  relatedTags: string[];
}
