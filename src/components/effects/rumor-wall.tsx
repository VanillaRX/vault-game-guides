"use client";

import { useState } from "react";
import { useLang } from "@/components/layout/lang-context";

const SECRETS: { en: string; zh: string }[] = [
  { en: "In Anno 1800, a single Investor supply chain spans 3 maps and 12+ intermediate products — more complex than a real Victorian factory.", zh: "纪元1800里一条投资人供应链跨越3个地图、12种以上中间产品——比真实的维多利亚工厂还复杂。" },
  { en: "Pirates in Anno 1800 won't chase fully loaded trade ships — nothing to loot if they sink. This AI was intentional.", zh: "纪元1800的海盗不会追满载商船——沉了捞不到东西。这个AI是开发者故意写的。" },
  { en: "Civ VI's 'one more turn' was nicknamed 'digital heroin'. Week one: 13 million player-hours.", zh: "文明VI的'再来一回合'被开发者叫'电子海洛因'。首周全球累计1300万小时。" },
  { en: "Civ VI has a 1-in-5000 secret map: a perfectly symmetrical hexagonal continent.", zh: "文明VI藏了一个1/5000概率的彩蛋地图——完美对称的六边形大陆。" },
  { en: "Civ VI: 32% go Science victory, 26% Domination, only 7% Religious. The numbers don't lie.", zh: "文明VI：32%选科技胜利，26%征服——宗教胜利只有7%。数据不说谎。" },
  { en: "RimWorld: Thrumbo leather armor out-defends powered steel. Tynan did this on purpose.", zh: "边缘世界：Thrumbo皮做的衣服防御比动力甲高。Tynan故意留的。" },
  { en: "RimWorld Ice Sheet: 0.3% spawn rate, -40°C to -100°C. Under 1% of players survive year one.", zh: "边缘世界冰盖地图出现率0.3%，全年-40°C到-100°C。不到1%玩家活过第一年。" },
  { en: "RimWorld #3 new player killer: manhunting squirrels. After starvation and mechs.", zh: "边缘世界新手死因第三：狂暴松鼠。仅次于饿死和机械族。" },
  { en: "Farthest Frontier: a rat plague destroys 5 years of grain in 3 months. History repeats itself.", zh: "最远的边陲：鼠疫3个月毁掉5年存粮。历史重演。" },
  { en: "90% of Farthest Frontier newcomers get razed before their first stone wall is done. 40 workers, one full season.", zh: "最远的边陲90%新手在石墙竣工前就被踏平。40个工人要干一整季。" },
  { en: "Going Medieval: enemies ONLY attack doors. One iron door + two archers = literally invincible.", zh: "前往中世纪：敌人只打门。一扇铁门+两个弓箭手=无敌。字面意思。" },
  { en: "Going Medieval underground = 10°C year-round, surface = -20°C. Free refrigeration, two floors down.", zh: "前往中世纪地下2层恒温10°C。零成本天然冰箱。" },
  { en: "Foundation has no grid. Villagers walk paths into existence — exactly how medieval towns actually formed.", zh: "Foundation没有网格。村民一脚一脚踩出路——和真实中世纪城镇一模一样。" },
  { en: "Foundation Cathedral: 20 resources, 40+ workers, 3 game-years. Then the clergy takes your tax money.", zh: "Foundation大教堂：20种资源、40+工人、3年。建完神职人员分走税收。" },
  { en: "Foundation jewelry: 50 gold/unit export, but under 5% of players sustain the industry.", zh: "Foundation珠宝50金币/单位出口——不到5%玩家能稳定经营。" },
  { en: "SteamDB: Anno 1800 + Civ VI owners play 18+ hrs/week — 60% more than single-game owners.", zh: "SteamDB：双持纪元1800和文明VI的玩家每周18+小时——比单持的高60%。" },
  { en: "Top Steam review words for strategy games: 'time sink', 'one more turn', 'I only meant to play 30 min'.", zh: "策略游戏Steam评论高频词：'时间黑洞''再来一回合''我本来只玩半小时'。" },
  { en: "Anno 1800 engineers drink enough coffee to fill a swimming pool — per house, at game scale.", zh: "纪元1800工程师每天喝的咖啡——按游戏比例——每栋房子能灌满小泳池。" },
  { en: "Civ VI: 68 techs from Pottery to Future Tech. Average AI game unlocks only ~42.", zh: "文明VI科技树68个，AI平均一局只解锁约42个。" },
  { en: "RimWorld human leather sofa: 3× price to certain factions. Not a bug — Tynan coded it deliberately.", zh: "边缘世界人皮沙发在特定派系卖3倍。不是bug——Tynan故意写的。" },
];

// Minecraft dirt block colors
const DIRT_COLORS = [
  "#6B4226", "#5C3A1E", "#7B5232", "#8B5A2B",
  "#4A3728", "#3D2B1F", "#6B4F3A", "#5A3D28",
  "#8B6B4A", "#7B5A3A", "#9B7B5A", "#6B5B3A",
  "#5D8A3C", "#6B9B37", "#4A7A2B", "#3D6B1F",
];

const W = 24; // columns (wide)
const H = 12; // rows
const PX = 6; // pixel size

function buildPixels() {
  const pixels: { col: number; row: number; color: string; dead: boolean }[] = [];
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      const isGrass = r < 2;
      const colorIdx = isGrass
        ? 12 + (c % 4)
        : Math.floor(Math.random() * 12);
      pixels.push({ col: c, row: r, color: DIRT_COLORS[colorIdx], dead: false });
    }
  }
  return pixels;
}

// Find connected clusters of alive pixels — for natural-looking breakage
function getNeighbors(col: number, row: number): [number, number][] {
  return [
    [col - 1, row], [col + 1, row],
    [col, row - 1], [col, row + 1],
  ].filter(([c, r]) => c >= 0 && c < W && r >= 0 && r < H) as [number, number][];
}

export function RumorWall() {
  const { lang } = useLang();
  const [secretIdx] = useState(() => Math.floor(Math.random() * SECRETS.length));
  const [breakAt] = useState(() => 7 + Math.floor(Math.random() * 4)); // 7-10

  const [pixels, setPixels] = useState(() => buildPixels());
  const [clicks, setClicks] = useState(0);
  const [broken, setBroken] = useState(false);

  const handleClick = () => {
    if (broken) return;
    const newClicks = clicks + 1;
    setClicks(newClicks);

    setPixels((prev) => {
      const alive = prev.filter((p) => !p.dead);
      if (alive.length === 0 || newClicks >= breakAt) {
        return prev.map((p) => ({ ...p, dead: true }));
      }

      // Pick a random seed pixel from alive ones, flood its neighbors into a small cluster
      const seed = alive[Math.floor(Math.random() * alive.length)];
      const cluster = new Set<string>();
      const queue: [number, number][] = [[seed.col, seed.row]];
      const killTotal = Math.max(4, Math.floor(alive.length * (0.04 + Math.random() * 0.10)));

      while (queue.length > 0 && cluster.size < killTotal) {
        const [c, r] = queue.shift()!;
        const key = `${c},${r}`;
        if (cluster.has(key)) continue;
        if (c < 0 || c >= W || r < 0 || r >= H) continue;
        const p = prev[c + r * W];
        if (p.dead) continue;
        cluster.add(key);
        // Randomly add neighbors
        for (const [nc, nr] of getNeighbors(c, r)) {
          if (Math.random() < 0.6) queue.push([nc, nr]);
        }
      }

      return prev.map((p, i) => {
        if (cluster.has(`${p.col},${p.row}`)) return { ...p, dead: true };
        return p;
      });
    });

    if (newClicks >= breakAt) {
      setTimeout(() => setBroken(true), 400);
    }
  };

  const secret = SECRETS[secretIdx];
  const alive = pixels.filter((p) => !p.dead).length;
  const total = W * H;

  return (
    <div className="select-none">
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60"
           style={{ minHeight: H * PX + 32 + 56 }}>
        <div className="absolute inset-0 flex items-center justify-center p-4 z-0">
          <p className={`text-center text-xs leading-relaxed transition-all duration-700 max-w-md ${
            broken ? "text-[var(--fg)]/90 opacity-100 scale-100" : "text-[var(--neon)] opacity-15 scale-90"
          }`}>
            {lang === "zh" ? secret.zh : secret.en}
          </p>
        </div>

        {/* Dirt block */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-10 ${
            broken ? "opacity-0 pointer-events-none transition-opacity duration-500" : "opacity-100"
          }`}
        >
          <button
            onClick={handleClick}
            className="relative cursor-pointer active:scale-[0.98] transition-transform duration-100"
            style={{ width: W * PX, height: H * PX }}
          >
            {pixels.map((p, i) => (
              <span
                key={i}
                className="absolute inline-block transition-all duration-400"
                style={{
                  left: p.col * PX,
                  top: p.row * PX,
                  width: PX + 0.5,
                  height: PX + 0.5,
                  backgroundColor: p.dead ? "transparent" : p.color,
                  borderRadius: p.row < 2 ? 0.5 : 0,
                  opacity: p.dead ? 0 : 1,
                  transform: p.dead ? `translate(${(Math.random()-0.5)*8}px, ${(Math.random()-0.5)*8}px) scale(0)` : "none",
                  transitionDelay: p.dead ? `${Math.floor(Math.random() * 150)}ms` : "0ms",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-[10px] tracking-wider text-[var(--muted)]">
        {broken
          ? (lang === "zh" ? "全碎了 💥" : "All gone! 💥")
          : (lang === "zh"
            ? `还剩 ${Math.round((alive/total)*100)}% · 第 ${clicks} 下`
            : `${Math.round((alive/total)*100)}% left · click ${clicks}`)
        }
      </p>
    </div>
  );
}
