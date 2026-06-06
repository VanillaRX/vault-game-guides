"use client";

import { useLang } from "@/components/layout/lang-context";

export function GuideCategoryLabel({ category }: { category: string }) {
  const { t } = useLang();
  return <>{t(`guide.category.${category}`)}</>;
}

export function GuideDifficultyLabel({ difficulty }: { difficulty: string }) {
  const { t } = useLang();
  return <>{t(`guide.difficulty.${difficulty}`)}</>;
}

export function GuideMetaText({ text, type }: { text: string; type: "minRead" | "words" }) {
  const { t } = useLang();
  return <>{text} {t(type)}</>;
}

export function GuideTocTitle() {
  const { t } = useLang();
  return <>{t("guide.tableOfContents")}</>;
}

export function GuideRelatedTitle() {
  const { t } = useLang();
  return <>{t("guide.related")}</>;
}

export function GuideFaqTitle() {
  const { t } = useLang();
  return <>{t("faq")}</>;
}

export function GuideComingSoon() {
  const { t } = useLang();
  return <>{t("guide.comingSoon")}</>;
}

export function GuideAdPlaceholder() {
  const { t } = useLang();
  return <>{t("guide.adPlaceholder")}</>;
}

export function UseT({ k }: { k: string }) {
  const { t } = useLang();
  return <>{t(k)}</>;
}

/** Translates guide content text (section headings, callout titles) when viewing in Chinese. */
export function GuideTrans({ en }: { en: string }) {
  const { lang } = useLang();
  if (lang !== "zh") return <>{en}</>;

  // Lazy import the translation map
  let zh = en;
  // Common section headings
  const map: Record<string, string> = {
    "Production Ratio Cheat Sheet": "生产效率速查表",
    "Warehouse Placement: The 17-Tile Rule": "仓库摆放：17格法则",
    "Warehouse Placement: The Complete Reference": "仓库摆放完全指南",
    "Trade Union Optimization": "工会优化",
    "Cross-Region Supply Chains": "跨区域供应链",
    "Trade Union: Best Items by Industry": "工会：各行业最佳物品",
    "Electricity Optimization": "电力优化",
    "Old World — Farmers": "旧世界 — 农民",
    "Old World — Workers": "旧世界 — 工人",
    "Old World — Artisans": "旧世界 — 工匠",
    "Old World — Engineers": "旧世界 — 工程师",
    "Old World — Investors": "旧世界 — 投资人",
    "New World — Complete Production Chains": "新世界 — 完整产业链",
    "Arctic — Complete Production Chains": "北极 — 完整产业链",
    "Enbesa (Land of Lions) — Key Production Chains": "安贝沙（狮子大地）— 关键产业链",
    "Water Is Enbesa's Currency": "水是安贝沙的货币",
    "Campus (Science)": "学院区（科技）",
    "Industrial Zone (Production)": "工业区（生产力）",
    "Theater Square (Culture)": "剧院广场（文化）",
    "Holy Site (Faith)": "圣地（信仰）",
    "Commercial Hub (Gold)": "商业中心（金币）",
    "Harbor (Naval / Gold)": "港口（海军/金币）",
    "Complete District Adjacency Reference": "全区域加成速查表",
    "Unique District Replacements": "文明独特区域替换",
    "Wonder Placement Optimization": "奇观摆放优化",
    "Cover Mechanics: The Math": "掩体机制：数学",
    "Killbox Designs Ranked": "杀阵设计排名",
    "Sapper-Proofing Your Base": "防工兵基地设计",
    "Turret Placement Guide": "炮塔布置指南",
    "The Mood System: Complete Reference": "心情系统完全参考",
    "Room Optimization: Beauty & Impressiveness": "房间优化：美观度与豪华度",
    "Work Priority: The 1-2-3-4 System": "工作优先级：1-2-3-4 体系",
    "Colony Layout for Maximum Efficiency": "殖民地布局效率最大化",
    "Storyteller-Specific Mood Strategies": "各叙事者心情策略",
    "Villager Promotion Pipeline": "居民晋升路径",
    "Trade Route Mastery": "贸易路线精通",
    "Monument ROI Optimization": "纪念碑投资回报优化",
    "Gold Management & Treasury": "金币管理与国库",
    "Victory Type Quick Reference": "胜利类型速查",
    "Science Victory: The Beeline": "科技胜利：速通路线",
    "Culture Victory: The Tourism Engine": "文化胜利：旅游引擎",
    "Domination: Unit Timing Windows": "征服胜利：兵种窗口期",
    "Crop Rotation: The Foundation": "轮作：根基",
    "Soil Fertility Management": "土壤肥力管理",
    "Livestock Optimization": "畜牧业优化",
    "Food Preservation & Storage": "食物保存与仓储",
    "Layered Defense Architecture": "分层防御体系",
    "Wall Material Engineering": "墙体材料工程",
    "Settler Mood & Psychology": "居民心情与心理",
    "Winter Survival Guide": "冬季生存指南",
    "Zone Planning: The Organic Approach": "区域规划：有机布局法",
    "Complete Supply Chain Reference": "完整供应链参考",
    "Monument Building Guide": "纪念碑建造指南",
    "Trade Economy & Mastery": "贸易经济与精通",
    "Settler Specialization": "居民专精",
    "Research Priority Path": "科研优先路径",
    "Underground Storage Optimization": "地下仓储优化",
    "Wall Engineering: Palisade to Fortress": "城墙工程：从木栅到要塞",
    "Tower Placement: The Overwatch System": "箭塔布置：火力覆盖系统",
    "Troop Composition & Management": "部队编制与管理",
    "Disease Control & Sanitation": "疾病控制与卫生",
    "Population Tiers: The Foundation": "人口等级：基础",
    "The 7 Deadly Beginner Mistakes": "新手最要命的7个错误",
    "The New World: Your First Expedition": "新世界：第一次远征",
    "Understanding the Meta-Progression": "理解元进程系统",
    "Room Choice Priority": "房间选择优先级",
    "Weapon Choice: Start with the Staff": "武器选择：初心者用法杖",
    "The Chronos Fight Strategy": "克洛诺斯战策略",
    "FAQ": "常见问题",
    "The Golden Rule": "黄金法则",
    "The Most Important Formation": "最重要的布局",
    "Campus Placement Priority": "学院区摆放优先级",
    "Pantheon Picks by Adjacency": "万神殿加成选择",
    "Stacking Multiplier Example": "叠加乘数示例",
    "The Mood Stack Formula": "心情叠加公式",
    "The Specialist System": "专精体系",
    "The Real ROI of the Church": "教堂的真实回报率",
    "Mood Cascade Prevention": "心情连锁崩溃预防",
    "Winter Livestock Survival": "冬季牲畜生存",
  };
  zh = map[en] || en;
  return <>{zh}</>;
}
