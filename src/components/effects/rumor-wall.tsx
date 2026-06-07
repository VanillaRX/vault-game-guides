"use client";

import { useState, useMemo } from "react";

const RUMORS = [
  "🏭 纪元1800里一条完整的投资人供应链需要跨越3个地图、12种以上的中间产品——比现实中维多利亚时代的真实工厂还复杂。",
  "⚓ 纪元1800的贸易船在满载时速度减半，但海盗不会追满载的船——因为沉了也捞不到东西。这个AI逻辑是开发者故意写的。",
  "📊 纪元1800里工程师每天喝掉的咖啡量，折算成现实单位，相当于每栋房子每天消耗2.5公斤咖啡豆。投资人喝香槟更夸张。",
  "🏛️ 文明VI的'再玩一回合'效应被开发者内部称为'电子海洛因'。2016年发布后第一周，全球玩家累计游戏时长超过1300万小时。",
  "🗺️ 文明VI的地图脚本里藏了一个彩蛋：极小概率下会生成一个六边形完美对称的大陆，概率大约1/5000。有人在Reddit晒过截图。",
  "🎓 文明VI的科技树从'制陶'到'未来科技'总共68个科技，但如果AI玩家是随机选择的，平均一局游戏只会解锁其中42个左右。",
  "⚠️ 文明VI玩家中，选择科技胜利的比例最高（32%），其次是征服（26%），宗教胜利只有7%的玩家会去走。",
  "🚀 边缘世界里，一只名为'Thrumbo'的生物的皮革做成的衣服，防御力比钢铁动力甲还高。这是游戏设计师Tynan刻意留下的荒诞设计。",
  "❄️ 边缘世界有0.3%的概率在新游戏开始时出现'冰盖'地图——全年-40°C到-100°C，不能种地。全球只有不到1%的玩家在上面活过第一年。",
  "🐿️ 边缘世界里被狂暴松鼠团灭的殖民地数量，官方统计排在新手死亡原因的第三位——仅次于直接饿死和被机械族拆家。",
  "💰 边缘世界的'人皮沙发'在某些派系的交易中能卖到正常沙发的3倍价格——不是bug，是Tynan故意写的经济逻辑。",
  "🌾 最远的边陲里，一场鼠疫可以在3个游戏月内毁灭一个存了5年粮食的粮仓。12世纪的欧洲农民对此深有体会——游戏忠实还原了历史。",
  "🧱 最远的边陲的石墙需要40个工人工作整整1个季度才能围住一个中型城镇。90%的新手在城墙完工前就被掠夺者踏平了。",
  "🏰 前往中世纪里，门是敌人唯一会攻击的结构——其他墙壁他们根本不打。所以一扇铁门+两排弓箭手=无敌防御。是真的无敌。",
  "🧊 前往中世纪的地下2层温度恒定10°C，地面可能是-20°C。把食物仓库建在地下2层，保鲜时间自动延长8倍——零成本天然冰箱。",
  "📐 Foundation里没有'网格'这个概念。村民自己走出来的路就是道路系统。如果两点之间需要通路，他们会一脚一脚踩出来——和真实中世纪城镇的形成完全一样。",
  "🏛️ Foundation的大教堂需要20种不同资源、40+工人、整整3个游戏年才能建完。建完之后城市信仰满分，但你的税收可能会被神职人员吃掉一小半。",
  "💎 Foundation里珠宝是单价最高的出口商品（50金币/单位），但需要市民等级工人。全球不到5%的玩家成功经营起过稳定的珠宝出口产业。",
  "🧠 据SteamDB统计，同时买了纪元1800和文明VI的玩家，平均每周游戏时间超过18小时——比买了其中一款的玩家高出60%。策略玩家一旦入坑就出不来。",
  "🎲 有人做过统计：在策略/经营类游戏的Steam评论区，出现频率最高的词是'时间黑洞'——第二名是'再来一回合'，第三名是'我本来只打算玩半小时'。",
];

const GRID_COLS = 5;
const GRID_ROWS = 3;
const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS; // 15
const MAX_CLICKS = 15;

type BlockState = {
  hits: number;      // 0-3 clicks taken
  maxHits: number;   // 1-3 max needed
  broken: boolean;
};

function getHitText(hitCount: number): string {
  if (hitCount === 1) return "咔嚓";
  if (hitCount === 2) return "碎裂";
  return "";
}

export function RumorWall() {
  const [rumorIndex] = useState(() => Math.floor(Math.random() * RUMORS.length));
  const rumor = RUMORS[rumorIndex];

  const [blocks, setBlocks] = useState<BlockState[]>(() =>
    Array.from({ length: TOTAL_BLOCKS }, () => ({
      hits: 0,
      maxHits: Math.floor(Math.random() * 3) + 1, // 1, 2, or 3
      broken: false,
    }))
  );

  const totalClicks = blocks.reduce((sum, b) => sum + b.hits, 0);
  const allBroken = blocks.every((b) => b.broken);

  const handleClick = (i: number) => {
    if (totalClicks >= MAX_CLICKS) return;
    setBlocks((prev) => {
      const b = prev[i];
      if (b.broken) return prev;
      const newHits = b.hits + 1;
      const broken = newHits >= b.maxHits;
      const next = [...prev];
      next[i] = { ...b, hits: newHits, broken };
      return next;
    });
  };

  return (
    <div className="select-none">
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60">
        {/* Rumor text behind blocks */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <p className={`text-center text-xs sm:text-sm leading-relaxed transition-opacity duration-500 ${
            allBroken ? "text-[var(--fg)]/90 opacity-100" : "text-[var(--neon)] opacity-40"
          }`}>
            {allBroken ? rumor : "👆 点击方块，破除谣言"}
          </p>
        </div>

        {/* Blocks grid */}
        <div
          className={`relative grid transition-all duration-700 ${
            allBroken ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
            minHeight: 140,
          }}
        >
          {blocks.map((block, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={totalClicks >= MAX_CLICKS}
              className={`relative flex items-center justify-center border border-black/20 text-[10px] sm:text-xs font-bold transition-all duration-200 select-none ${
                block.broken
                  ? "opacity-0 scale-50 pointer-events-none"
                  : block.hits === 0
                  ? "bg-[var(--accent)]/80 hover:bg-[var(--accent)] text-white cursor-pointer active:scale-95"
                  : block.hits === 1
                  ? "bg-[var(--amber)]/80 text-white cursor-pointer active:scale-95"
                  : "bg-red-500/60 text-white/70 cursor-pointer active:scale-95"
              }`}
              style={{
                aspectRatio: "1",
              }}
            >
              <span className={`text-center leading-tight px-0.5 ${
                block.hits >= 2 ? "text-[10px]" : ""
              }`}>
                {block.hits === 0
                  ? i < 3 ? "谣言" : i < 6 ? "破解" : i < 9 ? "点击" : i < 12 ? "查看" : "🔨"
                  : getHitText(block.hits)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Click counter */}
      <p className="mt-2 text-center font-mono text-[10px] tracking-wider text-[var(--muted)]">
        {allBroken
          ? "谣言已破 ✅"
          : `点击 ${totalClicks}/${MAX_CLICKS} · 剩余 ${MAX_CLICKS - totalClicks} 次`}
      </p>
    </div>
  );
}
