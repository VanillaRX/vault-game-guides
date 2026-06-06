// Guide content translations — key sentences/headings used across guides.
// Each guide component imports useGuideT() to get translated content.

const zhContent: Record<string, string> = {
  // Anno 1800 Production
  "Anno 1800's production chains span": "《纪元1800》的生产链横跨",

  // Civ 6 District
  "District placement is the most important skill in Civilization VI": "区域规划是《文明6》最重要的技能",
  "Every district generates yields based on": "每个区域根据相邻的地形、地貌和其他区域产生加成",

  // RimWorld
  "On the rim, your colony lives or dies by its defenses": "在边缘世界，殖民地的生死取决于防御工事",
  "Mood management is the hidden difficulty slider of RimWorld": "心情管理是《边缘世界》隐藏的难度调节器",

  // Farthest Frontier
  "Food is the #1 cause of colony collapse": "粮食短缺是殖民地崩溃的第一大原因",
  "Raiders in Farthest Frontier scale with your population": "《最远的边陲》的掠夺者强度随人口增长而增强",

  // Going Medieval
  "Your castle is your colony's last line of defense": "城堡是殖民地最后一道防线",
  "Going Medieval's production system spans": "《前往中世纪》的生产体系横跨",

  // Foundation
  "Foundation is a gridless, organic city-builder": "《Foundation》是一款无网格的有机城市建造游戏",
  "Foundation's economy runs on a tax-and-trade system": "《Foundation》的经济建立在税收与贸易体系之上",

  // Section Headings
  "Complete Production Chain Reference": "完整产业链参考",
  "Production Ratio Cheat Sheet": "生产效率速查表",
  "Warehouse Placement: The Complete Reference": "仓库摆放完全指南",
  "The 17-Tile Rule": "17格法则",
  "Trade Union Optimization": "工会优化",
  "Cross-Region Supply Chains": "跨区域供应链",
  "Complete District Adjacency Reference": "全区域加成参考",
  "The IZ-Aqueduct-Dam Triangle": "工业区-水渠-水坝三角",
  "Wonder Placement Optimization": "奇观摆放优化",
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
  "The Mood System: Complete Reference": "心情系统完全参考",
  "Room Optimization: Beauty & Impressiveness": "房间优化：美观度与豪华度",
  "Work Priority: The 1-2-3-4 System": "工作优先级：1-2-3-4 体系",
  "Colony Layout for Maximum Efficiency": "殖民地布局效率最大化",
  "Storyteller-Specific Mood Strategies": "各叙事者心情策略",
  "Villager Promotion Pipeline": "居民晋升路径",
  "Trade Route Mastery": "贸易路线精通",
  "Monument ROI Optimization": "纪念碑投资回报优化",
  "Gold Management & Treasury": "金币管理与国库",
  "Wall Engineering: Palisade to Fortress": "城墙工程：从木栅到要塞",
  "Tower Placement: The Overwatch System": "箭塔布置：火力覆盖系统",
  "Troop Composition & Management": "部队编制与管理",
  "Disease Control & Sanitation": "疾病控制与卫生",
  "Settler Specialization": "居民专精",
  "Research Priority Path": "科研优先路径",
  "Underground Storage Optimization": "地下仓储优化",

  // Callout types
  "tip": "💡 技巧",
  "warning": "⚠️ 警告",
  "info": "📋 信息",
  "strategy": "⚡ 策略",
  "danger": "🛡️ 危险",

  // Common
  "FAQ": "常见问题",
  "Key drops": "关键掉落",
  "Healing Window": "治疗窗口",
  "Charm Recommendation": "护符推荐",
  "Best Builds by Weapon": "各武器最佳配装",
  "Duo Boons That Win Runs": "能通关的双神组合",
  "Core Boons by Slot": "核心祝福槽位推荐",
  "God Tier List": "神明强度排名",
  "The Chronos Fight: A Simple Strategy": "克洛诺斯战：简单策略",
  "Room Choice Priority": "房间选择优先级",
  "Weapon Choice: Start with the Staff": "武器选择：从法杖开始",
  "Understanding the Meta-Progression": "理解元进程系统",
  "Optimal Rotation": "最优轮作方案",
  "Winter Survival Stockpile": "冬季储备策略",
  "The Kill Corridor": "杀戮走廊",
  "Star Skills Matter": "星级技能很重要",
  "The 60-25-15 Rule": "60-25-15 黄金比例",
  "Gold Reserve Minimum": "最低金币储备",
  "Tax Rate Optimization": "税率优化",
  "Army Cost Management": "军队开支管理",
  "Import Substitution": "进口替代策略",
  "Plague Can Wipe a Colony": "瘟疫能灭掉整个殖民地",
};

export function guideT(enText: string, lang: string): string {
  if (lang !== "zh") return enText;
  // Exact match
  if (zhContent[enText]) return zhContent[enText];
  // Substring match — find the longest matching key
  const keys = Object.keys(zhContent).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (enText.startsWith(key)) {
      const rest = enText.slice(key.length);
      return zhContent[key] + rest;
    }
  }
  return enText;
}
