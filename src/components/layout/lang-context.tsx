"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LangContext);
}

const STORAGE_KEY = "vault-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "zh") {
      setLangState(stored);
      document.documentElement.lang = stored === "zh" ? "zh-CN" : "en";
    }
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  };

  const t = (key: string) => {
    const strings: Record<string, Record<string, string>> = {
      en: {
        "nav.home": "Home",
        "nav.games": "Games",
        "nav.guides": "Guides",
        "nav.about": "About",
        "nav.search": "Search",
        "hero.eyebrow": "NO FLUFF. JUST THE STRATS.",
        "hero.headline": "Strategy Games,",
        "hero.headlineHighlight": "Solved.",
        "hero.sub": "Production layouts. District adjacency. Killbox designs. City planning. Every strategy, management, and colony sim guide you need — written by players who've already put in the hours.",
        "hero.cta1": "Browse Games",
        "hero.cta2": "Latest Guides",
        "values.deep": "Deep Guides",
        "values.deepDesc": "Every mechanic explained. No filler paragraphs.",
        "values.zero": "Zero Fluff",
        "values.zeroDesc": "Bullet-point strats. Get in, get the answer, get back to playing.",
        "values.player": "Player-Written",
        "values.playerDesc": "We've beaten the game. Multiple times. The guides prove it.",
        "featured.eyebrow": "SELECT YOUR GAME",
        "featured.title": "Featured Guides",
        "featured.allGames": "All games",
        "latest.eyebrow": "FRESH STRATS",
        "latest.title": "Latest Guides",
        "footer.tagline": "Deep guides for strategy and management games worth mastering. No fluff, just the strats.",
        "footer.about": "About",
        "footer.privacy": "Privacy Policy",
        "footer.contact": "Contact",
        "footer.sitemap": "Sitemap",
        "footer.copyright": "All game names and images are property of their respective owners.",
        "game.guides": "guides",
        "game.browse": "Browse",
        "game.moreGuides": "More guides",
        "game.guidesAvailable": "guides available",
        "guide.tableOfContents": "Table of Contents",
        "guide.related": "RELATED GUIDES",
        "guide.adPlaceholder": "AD PLACEMENT (V1)",
        "guide.comingSoon": "We're writing this guide right now. Check back soon.",
        "guide.category.beginner": "BEGINNER",
        "guide.category.advanced": "ADVANCED",
        "guide.category.achievement": "ACHIEVEMENT",
        "guide.category.build": "BUILD",
        "guide.category.walkthrough": "WALKTHROUGH",
        "guide.category.tips": "TIPS",
        "guide.difficulty.easy": "EASY",
        "guide.difficulty.medium": "MEDIUM",
        "guide.difficulty.hard": "HARD",
        "search.placeholder": "Search games and guides...",
        "search.noResults": "No results for",
        "page.games.title": "All Games",
        "page.games.sub": "Every game we cover, from 4X strategy to colony sims. Pick a game, find your guide, get back to building.",
        "page.games.eyebrow": "THE VAULT",
        "page.guides.title": "Latest Guides",
        "page.guides.sub": "Every guide we publish, newest first. Bookmark this page — we update weekly.",
        "page.about.title": "About Vault Guides",
        "page.privacy.title": "Privacy Policy",
        "page.contact.title": "Contact",
        "404.title": "Page Not Found",
        "404.sub": "This page doesn't exist. Maybe the guide hasn't been written yet.",
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
        "nav.guides": "攻略",
        "nav.about": "关于",
        "nav.search": "搜索",
        "hero.eyebrow": "干货攻略，没有废话。",
        "hero.headline": "策略游戏，",
        "hero.headlineHighlight": "通关。",
        "hero.sub": "生产线布局、区域加成数学、防御工事设计、城市建造规划。你需要的每一篇策略、经营、殖民模拟攻略 — 都是通关玩家写的。",
        "hero.cta1": "浏览游戏",
        "hero.cta2": "最新攻略",
        "values.deep": "深度攻略",
        "values.deepDesc": "每个机制讲透，没有凑字数的废话。",
        "values.zero": "直击要点",
        "values.zeroDesc": "要点式策略。拿到答案，回到游戏。",
        "values.player": "通关验证",
        "values.playerDesc": "我们打通了。不止一次。攻略就是证明。",
        "featured.eyebrow": "选择游戏",
        "featured.title": "精选攻略",
        "featured.allGames": "全部游戏",
        "latest.eyebrow": "最新攻略",
        "latest.title": "最新发布",
        "footer.tagline": "策略与经营游戏的深度攻略。干货，不废话。",
        "footer.about": "关于",
        "footer.privacy": "隐私政策",
        "footer.contact": "联系",
        "footer.sitemap": "网站地图",
        "footer.copyright": "所有游戏名称和图片归各自版权方所有。",
        "game.guides": "篇攻略",
        "game.browse": "浏览",
        "game.moreGuides": "更多攻略",
        "game.guidesAvailable": "篇攻略可用",
        "guide.tableOfContents": "目录",
        "guide.related": "相关攻略",
        "guide.adPlaceholder": "广告位 (V1)",
        "guide.comingSoon": "这篇攻略正在撰写中，稍后回来。",
        "guide.category.beginner": "新手",
        "guide.category.advanced": "进阶",
        "guide.category.achievement": "成就",
        "guide.category.build": "配装",
        "guide.category.walkthrough": "流程",
        "guide.category.tips": "技巧",
        "guide.difficulty.easy": "简单",
        "guide.difficulty.medium": "中等",
        "guide.difficulty.hard": "困难",
        "search.placeholder": "搜索游戏和攻略...",
        "search.noResults": "没有找到",
        "page.games.title": "全部游戏",
        "page.games.sub": "从4X策略到殖民模拟，我们覆盖的每一款游戏。选游戏，找攻略，回去继续建造。",
        "page.games.eyebrow": "攻略库",
        "page.guides.title": "最新攻略",
        "page.guides.sub": "我们发布的每一篇攻略，最新的排最前。收藏此页 — 每周更新。",
        "page.about.title": "关于攻略库",
        "page.privacy.title": "隐私政策",
        "page.contact.title": "联系我们",
        "404.title": "页面不存在",
        "404.sub": "这个页面不存在，也许攻略还没写出来。",
        "404.cta": "返回首页",
        "faq": "常见问题",
        "minRead": "分钟阅读",
        "words": "字",
        "playingNow": "当前在线",
        "pixel.building": "建造中...",
      },
    };
    return strings[lang]?.[key] || strings.en[key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {ready ? children : <div />}
    </LangContext.Provider>
  );
}
