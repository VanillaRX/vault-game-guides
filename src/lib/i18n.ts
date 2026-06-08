export type Lang = "en" | "zh";

export const LANGUAGES: { code: Lang; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "EN" },
  { code: "zh", label: "中文", nativeLabel: "中" },
];

export const t: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.games": "Games",
    "nav.best": "Best",
    "nav.like": "Similar",
    "nav.about": "About",
    "nav.search": "Search",

    "hero.eyebrow": "DISCOVER YOUR NEXT GAME",
    "hero.headline": "Strategy & Sim Games",
    "hero.headlineHighlight": "Worth Your Time",
    "hero.sub": "Curated picks from city builders to colony sims. Real Steam reviews, honest takes, no algorithm noise.",
    "hero.cta1": "Browse Games",
    "hero.cta2": "Best Games",

    "values.deep": "Curated, Not Scraped",
    "values.deepDesc": "Every game here is hand-picked, not auto-generated from a Steam API dump.",
    "values.zero": "Real Reviews",
    "values.zeroDesc": "Player reviews pulled from Steam and translated so you get the real picture.",
    "values.player": "Updated Weekly",
    "values.playerDesc": "New games, fresh reviews, updated rankings. Games evolve, so do we.",

    "featured.eyebrow": "START EXPLORING",
    "featured.title": "Featured Games",
    "featured.allGames": "All games",

    "latest.eyebrow": "TRENDING NOW",
    "latest.title": "Popular Right Now",

    "discover.eyebrow": "DISCOVER",
    "discover.title": "Find Your Next Game",
    "discover.like": "Games Like…",
    "discover.likeDesc": "Love a game? Find similar ones.",
    "discover.best": "Best Games",
    "discover.bestDesc": "Curated rankings by genre, mood, and features.",
    "discover.tag": "Browse by Tag",
    "discover.tagDesc": "Farming, cozy, city builder — find your genre.",

    "footer.tagline": "Discover your next favorite game. Honest reviews, smart picks.",
    "footer.about": "About",
    "footer.privacy": "Privacy Policy",
    "footer.contact": "Contact",
    "footer.sitemap": "Sitemap",
    "footer.copyright": "All game names and images are property of their respective owners.",

    "game.guides": "games",
    "game.browse": "Browse",
    "game.moreGuides": "More like this",
    "game.guidesAvailable": "games",

    "search.placeholder": "Search games by name, tag, or keyword…",
    "search.noResults": "No results for",

    "page.games.title": "All Games",
    "page.games.sub": "Every game in the vault. Browse, compare, discover your next obsession.",
    "page.games.eyebrow": "THE VAULT",
    "page.about.title": "About Vault Guides",
    "page.privacy.title": "Privacy Policy",
    "page.contact.title": "Contact",

    "404.title": "Page Not Found",
    "404.sub": "This page doesn't exist. Try searching for a game instead.",
    "404.cta": "Back to Vault",

    "faq": "FAQ",
    "minRead": "min read",
    "words": "words",
    "playingNow": "playing now",
    "pixel.building": "BUILDING...",
  },
  zh: {
    "nav.home": "首页",
    "nav.games": "游戏",
    "nav.best": "榜单",
    "nav.like": "相似推荐",
    "nav.about": "关于",
    "nav.search": "搜索",

    "hero.eyebrow": "发现你的下一款游戏",
    "hero.headline": "策略与模拟游戏",
    "hero.headlineHighlight": "只推值得玩的",
    "hero.sub": "从城市建造到殖民模拟，精心筛选。真实玩家评价，不瞎推。",
    "hero.cta1": "浏览游戏",
    "hero.cta2": "最佳榜单",

    "values.deep": "手工精选",
    "values.deepDesc": "每款游戏都是人工挑选的，不是 API 数据堆出来的。",
    "values.zero": "真实评价",
    "values.zeroDesc": "Steam 玩家评论 + 中文翻译，让你看到真实的玩家反馈。",
    "values.player": "每周更新",
    "values.playerDesc": "新游戏、新评论、新排名。游戏在进化，我们也是。",

    "featured.eyebrow": "开始探索",
    "featured.title": "精选游戏",
    "featured.allGames": "全部游戏",

    "latest.eyebrow": "最近热门",
    "latest.title": "大家都在看",

    "discover.eyebrow": "发现游戏",
    "discover.title": "找找你的下一款游戏",
    "discover.like": "相似推荐",
    "discover.likeDesc": "喜欢某款游戏？找到类似的。",
    "discover.best": "最佳榜单",
    "discover.bestDesc": "按类型、氛围、功能精选的排行榜。",
    "discover.tag": "按标签浏览",
    "discover.tagDesc": "农场、休闲、城市建造——找到你的类型。",

    "footer.tagline": "发现你的下一款最爱游戏。真实评价，聪明推荐。",
    "footer.about": "关于",
    "footer.privacy": "隐私政策",
    "footer.contact": "联系",
    "footer.sitemap": "网站地图",
    "footer.copyright": "所有游戏名称和图片归各自版权方所有。",

    "game.guides": "款游戏",
    "game.browse": "浏览",
    "game.moreGuides": "更多类似",
    "game.guidesAvailable": "款游戏",

    "search.placeholder": "搜游戏名、标签、关键词…",
    "search.noResults": "没有找到",

    "page.games.title": "全部游戏",
    "page.games.sub": "库里所有游戏。浏览、对比、找到你的下一款。",
    "page.games.eyebrow": "游戏库",
    "page.about.title": "关于 Vault Guides",
    "page.privacy.title": "隐私政策",
    "page.contact.title": "联系我们",

    "404.title": "页面不存在",
    "404.sub": "这页不存在，试试搜你想找的游戏吧。",
    "404.cta": "返回首页",

    "faq": "常见问题",
    "minRead": "分钟阅读",
    "words": "字",
    "playingNow": "当前在线",
    "pixel.building": "建造中...",
  },
};

export function useT(lang: Lang) {
  return (key: string): string => {
    return t[lang]?.[key] || t.en[key] || key;
  };
}

export function getT(lang: Lang) {
  return (key: string): string => {
    return t[lang]?.[key] || t.en[key] || key;
  };
}
