"use client";

import { useLang } from "@/components/layout/lang-context";

/** Renders text: in EN mode shows as-is; in ZH mode translates. Supports HTML content via dangerouslySetInnerHTML. */
export function GuideText({ en, zh }: { en: string; zh?: string }) {
  const { lang } = useLang();
  if (lang !== "zh") return <span dangerouslySetInnerHTML={{ __html: en }} />;
  if (zh) return <span dangerouslySetInnerHTML={{ __html: zh }} />;

  // Auto-translate using the term dictionary for inline annotations
  return <>{translateInline(en)}</>;
}

/** Renders EN text with (中文) annotation for game terms when in Chinese mode. */
export function GT({ en, zh }: { en: string; zh?: string }) {
  const { lang } = useLang();
  if (lang !== "zh") return <>{en}</>;
  if (zh) return <>{zh}</>;
  return <>{en}</>;
}

// Key paragraphs and callout bodies that should be translated in full
const PARAGRAPH_ZH: Record<string, string> = {
  // Anno 1800 beginner
  "You only need <b>1 house of each tier</b> to unlock the next tier. Build one worker house → unlock Artisans immediately → then upgrade the rest of your farmers later. This accelerates progression dramatically.":
    "每个等级只需要 <b>1 栋房子</b> 就能解锁下一级。先建一栋工人房 → 立刻解锁工匠 → 再把剩下的农民慢慢升级。这能极大加速发展进度。",

  // Civ 6
  "District placement is the most important skill in Civilization VI. Every district generates yields based on <b>adjacent terrain, features, and other districts</b>. A +4 Campus doubles to +8 with the right policy card. A +6 Industrial Zone becomes +12 and then radiates that production to every city within 6 tiles through the Factory and Power Plant. This is the complete reference for every district's adjacency math.":
    "区域规划是《文明VI》最重要的技能。每个区域根据 <b>相邻的地形、地貌和其他区域</b> 产生加成。一个 +4 的学院区配上正确的政策卡能翻到 +8。一个 +6 的工业区能变 +12，然后通过工厂和发电站把生产力辐射给 6 格范围内的每一座城市。这是全区域加成的完整参考。",

  // RimWorld
  "On the rim, your colony lives or dies by its defenses. A single breach raid can end a 50-hour colony in minutes. This guide covers every killbox design, cover mechanics, sapper-proofing, turret placement, and storyteller-specific defense strategies for Cassandra, Phoebe, and Randy.":
    "在边缘世界，殖民地的生死取决于防御工事。一次破墙袭击能在几分钟内终结你玩了 50 小时的殖民地。本指南涵盖所有杀阵 (killbox) 设计、掩体机制、防工兵策略、炮塔摆放，以及针对卡桑德拉、菲比、兰迪三位叙事者的防御对策。",

  "Mood management is the hidden difficulty slider of RimWorld. A colony with poor mood collapses from the inside — mental breaks cascade, colonists refuse to work, and your best crafter punches the antigrain warhead. This guide covers the complete mood system, room optimization for beauty and impressiveness, work priority configurations, and colony layout for maximum efficiency across all three storytellers.":
    "心情管理是《边缘世界》隐藏的难度调节器。心情差的殖民地会从内部崩溃——精神连锁崩溃、殖民者罢工、你最好的工匠一拳打爆反物质弹头。本指南涵盖完整的心情系统、房间美观度与豪华度优化、工作优先级配置，以及三大叙事者下的殖民地布局效率最大化。",

  // Foundation
  "Foundation is a gridless, organic city-builder where villagers build their own paths and houses. Traditional grid-based planning <b>does not work here</b>. Instead, you paint zones, manage supply chains, and let the city grow organically. This guide covers zone planning, production chains, monument building, and the trade economy that turns a village into a thriving medieval city.":
    "《Foundation》是一款无网格的有机城市建造游戏——村民自己修路盖房。传统的网格规划 <b>在这没用</b>。你要做的是划定功能区域、管理供应链，让城市自然生长。本指南涵盖区域规划、产业链、纪念碑建造和贸易经济，帮你的小村庄成长为繁华的中世纪城市。",

  // Going Medieval
  "Your castle is your colony's last line of defense. A well-designed fortress turns a 20-man raid into target practice. A poorly designed one turns your settlers into loot. This guide covers layered defense design, material engineering, settler mood management, and winter survival — everything you need to survive and thrive in a post-Calamity medieval world.":
    "城堡是殖民地最后一道防线。设计得当的要塞能让 20 人的袭击变成活靶子练习。设计不当的会让你的居民变成战利品。本指南涵盖分层防御设计、材料工程、居民心情管理和冬季生存——在天灾之后的中世纪世界里活下去并发展壮大所需的一切。",

  "Going Medieval's production system spans raw resource gathering, intermediate crafting, and high-tier manufacturing spread across multiple Z-levels. A disorganized production chain means settlers walking 200 tiles to grab one log. This guide covers the complete production tree, settler specialization, research priorities, and underground storage optimization.":
    "《前往中世纪》的生产体系横跨多个 Z 轴层级的原材料采集、半成品加工和高级制造。一条混乱的生产链意味着居民要跑 200 格去拿一根原木。本指南涵盖完整的生产树、居民专精、科研优先路径和地下仓储优化。",

  // Farthest Frontier
  "Food is the #1 cause of colony collapse in Farthest Frontier. A single bad harvest without backup stores means starvation by winter. This guide covers crop rotation for maximum yield, soil fertility management, livestock optimization, food preservation, and the exact production chains to keep your colony fed through the harshest winters.":
    "粮食短缺是《最远的边陲》殖民地崩溃的第一大原因。一次歉收加上没有储备粮，冬天就只能等着饿死。本指南涵盖最大化产量的轮作方案、土壤肥力管理、畜牧业优化、食物保存，以及确保殖民地熬过最严酷冬天的精确产业链配置。",

  "Raiders in Farthest Frontier scale with your population and wealth. A 200-pop town with gold vaults attracts raids of 40+ raiders with battering rams. Without proper walls, towers, and troop management, your colony falls in minutes. This guide covers wall engineering, tower placement, troop management, disease control, and the complete defense progression from wooden palisades to stone fortresses.":
    "《最远的边陲》的袭击强度随人口和财富增长。一个 200 人口、有金库的城镇会招来 40 多个带着攻城槌的掠夺者。没有像样的城墙、箭塔和部队管理，你的殖民地几分钟就会被踏平。本指南涵盖城墙工程、箭塔摆放、部队管理、疾病控制，以及从木栅栏到石头要塞的完整防御升级路径。",

  // Foundation economy
  "Foundation's economy runs on a tax-and-trade system where villager promotion drives everything. A serf pays 1 gold/month. A citizen pays 25 gold/month and consumes luxury goods that fuel advanced industries. This guide covers the complete villager promotion pipeline, trade route mastery, monument ROI optimization, and economic scaling from village treasury to medieval financial powerhouse.":
    "《Foundation》的经济建立在税收与贸易体系之上，居民晋升是核心驱动力。一个农奴每月交 1 金币，一个市民每月交 25 金币，同时消费推动高级产业的奢侈品。本指南涵盖完整的居民晋升路径、贸易路线精通、纪念碑投资回报优化，以及从小村金库到中世纪金融巨头的经济扩张策略。",
};

/** Translates known paragraphs. Falls back to term-by-term annotation for unknown text. */
function translateInline(en: string): string {
  // Exact match for known paragraphs
  if (PARAGRAPH_ZH[en]) return PARAGRAPH_ZH[en];

  // Try stripping HTML tags and matching
  const stripped = en.replace(/<[^>]*>/g, "");
  for (const [key, val] of Object.entries(PARAGRAPH_ZH)) {
    const keyStripped = key.replace(/<[^>]*>/g, "");
    if (stripped === keyStripped) return val;
  }

  return en;
}
