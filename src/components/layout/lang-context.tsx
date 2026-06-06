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
        "nav.games": "游戏库",
        "nav.guides": "攻略",
        "nav.about": "关于",
        "nav.search": "搜索",
        "hero.eyebrow": "不写废话，只写解法。",
        "hero.headline": "每一款策略游戏，",
        "hero.headlineHighlight": "都有人替你研究透了。",
        "hero.sub": "生产线怎么摆、区域加成怎么算、防线怎么修、城市怎么规划 — 每一篇都是老玩家踩完坑之后写的。",
        "hero.cta1": "找游戏",
        "hero.cta2": "看最新攻略",
        "values.deep": "写得深",
        "values.deepDesc": "每个机制掰开揉碎讲。不凑字数，只说有用的。",
        "values.zero": "不废话",
        "values.zeroDesc": "全是要点。看完关掉网页，回去继续玩。",
        "values.player": "真通关",
        "values.playerDesc": "我们真的打通了。每一篇攻略背后都是几十个小时的游戏时间。",
        "featured.eyebrow": "选一款游戏",
        "featured.title": "热门攻略",
        "featured.allGames": "全部游戏",
        "latest.eyebrow": "刚出炉的",
        "latest.title": "最新攻略",
        "footer.tagline": "每一篇攻略背后，都是一个通关过的人。",
        "footer.about": "关于",
        "footer.privacy": "隐私政策",
        "footer.contact": "联系我们",
        "footer.sitemap": "网站地图",
        "footer.copyright": "所有游戏名称和图片归各自版权方所有。",
        "game.guides": "篇攻略",
        "game.browse": "去看看",
        "game.moreGuides": "更多攻略",
        "game.guidesAvailable": "篇攻略",
        "guide.tableOfContents": "本文目录",
        "guide.related": "相关攻略",
        "guide.adPlaceholder": "广告位（上线后开放）",
        "guide.comingSoon": "这篇攻略还在写，过两天来看就有了。",
        "guide.category.beginner": "新手向",
        "guide.category.advanced": "进阶",
        "guide.category.achievement": "成就",
        "guide.category.build": "配装",
        "guide.category.walkthrough": "流程",
        "guide.category.tips": "技巧",
        "guide.difficulty.easy": "简单",
        "guide.difficulty.medium": "中等",
        "guide.difficulty.hard": "困难",
        "search.placeholder": "搜游戏名或攻略关键词...",
        "search.noResults": "没找到",
        "page.games.title": "游戏库",
        "page.games.sub": "从 4X 策略到殖民模拟，挑一款你正在玩的 — 攻略已经准备好了。",
        "page.games.eyebrow": "游戏库",
        "page.guides.title": "全部攻略",
        "page.guides.sub": "所有攻略按发布时间排列。我们每周都在写新的。",
        "page.about.title": "关于 Vault Guides",
        "page.privacy.title": "隐私政策",
        "page.contact.title": "联系我们",
        "404.title": "这个页面不存在",
        "404.sub": "可能攻略还没写出来，或者在别的地方。",
        "404.cta": "回首页",
        "faq": "常见问题",
        "minRead": "分钟读完",
        "words": "字",
        "playingNow": "人正在玩",
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
