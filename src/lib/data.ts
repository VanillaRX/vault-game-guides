import { Game, Guide } from "./types";

export const GAMES: Game[] = [
  {
    slug: "anno-1800",
    title: "Anno 1800",
    steamAppId: 916440,
    shortDescription:
      "Master supply chains, optimize production layouts, and build thriving industrial-era cities across multiple islands.",
    description:
      "Lead the Industrial Revolution in this award-winning city-building and supply chain management game. Colonize new islands, establish trade routes, and balance the needs of farmers, workers, and investors.",
    genres: ["City Builder", "Strategy"],
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/916440/header.jpg",
    headerImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/916440/header.jpg",
    releaseDate: "2019-04-16",
    developer: "Ubisoft Mainz",
    guideCount: 2,
    featured: true,
  },
  {
    slug: "civilization-6",
    title: "Civilization VI",
    steamAppId: 289070,
    shortDescription:
      "Optimize district adjacency, master leader-specific victory paths, and conquer the world one hex at a time.",
    description:
      "The definitive 4X strategy game. Build an empire to stand the test of time. Explore new lands, research technologies, conduct diplomacy, and lead your civilization from the Stone Age to the Information Age.",
    genres: ["4X Strategy", "Turn-Based"],
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
    headerImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
    releaseDate: "2016-10-21",
    developer: "Firaxis Games",
    guideCount: 2,
    featured: true,
  },
  {
    slug: "rimworld",
    title: "RimWorld",
    steamAppId: 294100,
    shortDescription:
      "Survive and thrive on the rim — colony management, defense layout, mood optimization, and storyteller-specific strategies.",
    description:
      "A sci-fi colony sim driven by an intelligent AI storyteller. Manage colonists' moods, needs, wounds, and illnesses. Build in forests, deserts, tundra, and more. Every game generates a new story.",
    genres: ["Colony Sim", "Management"],
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg",
    headerImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg",
    releaseDate: "2018-10-17",
    developer: "Ludeon Studios",
    guideCount: 1,
    featured: true,
  },
  {
    slug: "farthest-frontier",
    title: "Farthest Frontier",
    steamAppId: 1044720,
    shortDescription:
      "Build a medieval town from nothing — farming rotations, resource chains, wall layouts, and disease management.",
    description:
      "Protect and guide your people from a handful of settlers to a thriving medieval town. Harvest raw materials, hunt, fish and farm. Craft items, trade, and survive against the elements and outside threats.",
    genres: ["City Builder", "Survival"],
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1044720/header.jpg",
    headerImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1044720/header.jpg",
    releaseDate: "2022-08-09",
    developer: "Crate Entertainment",
    guideCount: 0,
    featured: false,
  },
  {
    slug: "going-medieval",
    title: "Going Medieval",
    steamAppId: 1029780,
    shortDescription:
      "Design impenetrable castles, manage settler psychology, and survive medieval winters in this 3D colony builder.",
    description:
      "Stake your claim in this colony-building sim set in a post-Calamity medieval world. Build multi-story fortresses, manage settlers' moods and needs, and defend against waves of raiders.",
    genres: ["Colony Sim", "Strategy"],
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1029780/header.jpg",
    headerImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1029780/header.jpg",
    releaseDate: "2021-06-01",
    developer: "Foxy Voxel",
    guideCount: 0,
    featured: false,
  },
  {
    slug: "foundation",
    title: "Foundation",
    steamAppId: 690830,
    shortDescription:
      "Grid-free organic city building — zone industries, manage supply chains, and grow a medieval city that feels alive.",
    description:
      "A gridless, organic medieval city-building simulation. Instead of placing individual buildings, paint zones for housing, farming, and industry. Watch your city grow organically as villagers build their own paths and homes.",
    genres: ["City Builder", "Management"],
    coverImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/690830/header.jpg",
    headerImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/690830/header.jpg",
    releaseDate: "2025-01-31",
    developer: "Polymorph Games",
    guideCount: 0,
    featured: false,
  },
];

export const GUIDES: Guide[] = [
  // Anno 1800 guides
  {
    slug: "production-layouts",
    gameSlug: "anno-1800",
    title: "Anno 1800: The Complete Production Layout Guide",
    description:
      "Optimize every production chain from farmers to investors. Warehouse placement, road density, and trade union radius explained with exact layouts.",
    category: "advanced",
    difficulty: "medium",
    tags: ["production", "layout", "optimization"],
    wordCount: 5200,
    estimatedReadTime: 22,
    publishDate: "2026-06-06",
  },
  {
    slug: "beginner-guide",
    gameSlug: "anno-1800",
    title: "Anno 1800 Beginner Guide: Your First 5 Hours",
    description:
      "From your first warehouse to your first investor. Population tier progression, expedition prep, and the 7 mistakes every new player makes.",
    category: "beginner",
    difficulty: "easy",
    tags: ["beginner", "tutorial", "population"],
    wordCount: 3800,
    estimatedReadTime: 16,
    publishDate: "2026-06-05",
  },
  // Civ 6 guides
  {
    slug: "district-guide",
    gameSlug: "civilization-6",
    title: "Civilization VI: District Adjacency Master Guide",
    description:
      "Maximize every district bonus. Campus, Industrial Zone, Theater Square adjacency charts. Wonder placement optimization and the IZ-aqueduct-dam triangle explained.",
    category: "advanced",
    difficulty: "medium",
    tags: ["districts", "adjacency", "optimization"],
    wordCount: 4500,
    estimatedReadTime: 19,
    publishDate: "2026-06-04",
  },
  {
    slug: "victory-paths",
    gameSlug: "civilization-6",
    title: "Civilization VI: Victory Paths for Every Leader",
    description:
      "Which victory each leader excels at, policy card priorities by era, and the exact tech/civic beeline for Science, Culture, Domination, Religion, and Diplomacy wins.",
    category: "walkthrough",
    difficulty: "medium",
    tags: ["victory", "leader", "strategy"],
    wordCount: 6100,
    estimatedReadTime: 26,
    publishDate: "2026-06-03",
  },
  // RimWorld
  {
    slug: "defense-layout",
    gameSlug: "rimworld",
    title: "RimWorld: Killbox & Defense Layout Encyclopedia",
    description:
      "Every killbox design ranked: singularity, heat trap, funnel, and the new meta for each storyteller. Turret placement, cover mechanics, sapper-proofing, and mortar pits.",
    category: "advanced",
    difficulty: "hard",
    tags: ["defense", "killbox", "combat"],
    wordCount: 5600,
    estimatedReadTime: 24,
    publishDate: "2026-06-06",
  },
];
