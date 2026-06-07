"use client";

import { useState, useMemo } from "react";
import { useLang } from "@/components/layout/lang-context";

// 20 gaming secrets, each with EN/CN
const SECRETS: { en: string; zh: string }[] = [
  { en: "In Anno 1800, a single Investor supply chain spans 3 maps and 12+ intermediate products — more complex than a real Victorian factory.", zh: "纪元1800里一条投资人供应链跨越3个地图、12种以上中间产品——比真实的维多利亚工厂还复杂。" },
  { en: "Pirates in Anno 1800 won't chase fully loaded trade ships — because there's nothing to loot if they sink. This AI logic was intentional.", zh: "纪元1800的海盗不会追满载的商船——沉了也捞不到东西。这个AI是开发者故意写的。" },
  { en: "Civ VI's 'one more turn' effect was internally nicknamed 'digital heroin'. In its first week, players logged 13 million hours total.", zh: "文明VI的'再来一回合'被开发者叫'电子海洛因'。首周全球玩家累计1300万小时。" },
  { en: "Civ VI has a hidden map script: ~1 in 5000 games generates a perfectly symmetrical hexagonal continent.", zh: "文明VI藏了一个地图彩蛋：约1/5000概率生成完美对称的六边形大陆。" },
  { en: "In Civ VI, 32% of players go for Science victory, 26% Domination — only 7% attempt Religious.", zh: "文明VI玩家32%选科技胜利，26%征服——宗教胜利只有7%的人会走。" },
  { en: "RimWorld: Thrumbo leather armor has higher defense than powered steel armor. Designer Tynan did this on purpose.", zh: "边缘世界里Thrumbo皮做的衣服防御比动力甲还高。设计师Tynan故意留的荒诞设定。" },
  { en: "RimWorld's 'Ice Sheet' map appears 0.3% of the time. Temperature: -40°C to -100°C year-round. Less than 1% of players survive year one.", zh: "边缘世界冰盖地图概率0.3%。全年-40°C到-100°C。不到1%的玩家活过第一年。" },
  { en: "In RimWorld, manhunting squirrels are the #3 cause of colony death among new players — after starvation and mechanoids.", zh: "边缘世界新手死因第三名：狂暴松鼠。仅次于饿死和被机械族拆家。" },
  { en: "In Farthest Frontier, a single rat plague can destroy 5 years of grain reserves in 3 months. 12th-century farmers knew this pain well.", zh: "最远的边陲里一场鼠疫3个月毁灭5年存粮。12世纪的欧洲农民深有体会。" },
  { en: "90% of Farthest Frontier new players get razed before finishing their first stone wall — it takes 40 workers an entire season.", zh: "最远的边陲90%新手在石墙竣工前就被踏平——40个工人要干一整季。" },
  { en: "In Going Medieval, enemies ONLY attack doors — never walls. One iron door + two archers = invincible defense. Literally.", zh: "前往中世纪里敌人只打门不打墙。一扇铁门+两个弓箭手=无敌。字面意思。" },
  { en: "Going Medieval: 2 levels underground = constant 10°C. Above ground = -20°C. Free refrigeration, zero fuel cost.", zh: "前往中世纪地下2层恒温10°C，地面-20°C。零成本天然冰箱。" },
  { en: "Foundation has no grid. Villagers literally walk paths into existence — exactly how real medieval towns formed.", zh: "Foundation没有网格。村民一脚一脚踩出路来——和中世纪真实城镇一模一样。" },
  { en: "Foundation's Cathedral requires 20 resource types, 40+ workers, 3 game-years to build. Then the clergy eats a chunk of your taxes.", zh: "Foundation大教堂要20种资源、40+工人、3年建造。建完神职人员会吃掉你一小半税收。" },
  { en: "In Foundation, jewelry is the highest-value export (50 gold/unit) — but fewer than 5% of players sustain a jewelry industry.", zh: "Foundation珠宝最高50金币/单位出口——但不到5%的玩家能稳定经营珠宝产业。" },
  { en: "SteamDB stats: players who own both Anno 1800 and Civ VI average 18+ hours/week — 60% more than owners of just one.", zh: "SteamDB数据：同时买纪元1800和文明VI的玩家平均每周18+小时——比只买一款的高60%。" },
  { en: "The top 3 most-used words in strategy game Steam reviews: 'time sink', 'one more turn', 'I was only going to play for 30 minutes'.", zh: "策略游戏Steam评论高频词前三：'时间黑洞'、'再来一回合'、'我本来只玩半小时'。" },
  { en: "Anno 1800's engineers collectively drink enough coffee per day to fill a swimming pool — at in-game scale, per house.", zh: "纪元1800的工程师每天喝掉的咖啡——按游戏比例换算——每栋房子能灌满一个小泳池。" },
  { en: "Civ VI's tech tree has 68 technologies from Pottery to Future Tech. The average AI game only unlocks about 42.", zh: "文明VI科技树从制陶到未来科技共68个。AI平均一局只解锁约42个。" },
  { en: "RimWorld's human leather sofas sell for 3× normal price to certain factions. Not a bug. Tynan coded it deliberately.", zh: "边缘世界人皮沙发在某些派系数能卖3倍价格。不是bug。Tynan故意写的。" },
];

const PIXEL_SIZE = 12; // px per "pixel"
const GRID = 12; // 12×12 block = 144 pixels
const MIN_CLICKS = 7;
const MAX_CLICKS_BREAK = 10;

type PixelState = {
  col: number;
  row: number;
  dead: boolean;
  layer: number; // distance from edge (0 = outermost)
};

function buildPixels(): PixelState[] {
  const pixels: PixelState[] = [];
  const center = (GRID - 1) / 2;
  for (let r = 0; r < GRID; r++) {
    for (let c = 0; c < GRID; c++) {
      const dist = Math.max(Math.abs(c - center), Math.abs(r - center));
      pixels.push({ col: c, row: r, dead: false, layer: Math.round(dist) });
    }
  }
  return pixels;
}

export function RumorWall() {
  const { lang } = useLang();
  const [secretIdx] = useState(() => Math.floor(Math.random() * SECRETS.length));
  const [breakThreshold] = useState(() => MIN_CLICKS + Math.floor(Math.random() * (MAX_CLICKS_BREAK - MIN_CLICKS + 1)));

  const [pixels, setPixels] = useState<PixelState[]>(() => buildPixels());
  const [clicks, setClicks] = useState(0);
  const [broken, setBroken] = useState(false);

  const handleClick = () => {
    if (broken) return;
    const newClicks = clicks + 1;
    setClicks(newClicks);

    // Kill pixels: each click kills ~15-20% of remaining pixels from the outermost surviving layer
    setPixels((prev) => {
      const alive = prev.filter((p) => !p.dead);
      if (alive.length === 0 || newClicks >= breakThreshold) {
        // break everything
        return prev.map((p) => ({ ...p, dead: true }));
      }

      const killCount = Math.max(3, Math.floor(alive.length * (0.1 + Math.random() * 0.15)));
      // Prefer killing outer-layer pixels first
      const sorted = [...alive].sort((a, b) => b.layer - a.layer); // outer first
      const toKill = sorted.slice(0, killCount);

      return prev.map((p) => {
        if (toKill.find((k) => k.col === p.col && k.row === p.row)) {
          return { ...p, dead: true };
        }
        return p;
      });
    });

    if (newClicks >= breakThreshold) {
      setTimeout(() => setBroken(true), 300);
    }
  };

  const secret = SECRETS[secretIdx];
  const progress = Math.min(clicks / breakThreshold, 1);

  return (
    <div className="select-none">
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60" style={{ minHeight: GRID * PIXEL_SIZE + 32 + 60 }}>
        {/* Secret text behind */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-0">
          <p className={`text-center text-xs leading-relaxed transition-all duration-700 ${
            broken ? "text-[var(--fg)]/90 opacity-100 scale-100" : "text-[var(--neon)] opacity-20 scale-90"
          }`}>
            {lang === "zh" ? secret.zh : secret.en}
          </p>
        </div>

        {/* Pixel block */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-10 ${
            broken ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button
            onClick={handleClick}
            className="relative cursor-pointer active:scale-[0.97] transition-transform"
            style={{
              width: GRID * PIXEL_SIZE,
              height: GRID * PIXEL_SIZE,
            }}
          >
            {pixels.map((p, i) => (
              <span
                key={i}
                className={`absolute inline-block transition-all duration-300 ${
                  p.dead ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
                style={{
                  left: p.col * PIXEL_SIZE,
                  top: p.row * PIXEL_SIZE,
                  width: PIXEL_SIZE,
                  height: PIXEL_SIZE,
                  backgroundColor: p.dead ? "transparent" : "var(--accent)",
                  borderRadius: 1,
                  transitionDelay: p.dead ? `${Math.random() * 200}ms` : "0ms",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-[10px] tracking-wider text-[var(--muted)]">
        {broken
          ? (lang === "zh" ? "全部碎掉了 💥" : "All gone! 💥")
          : (lang === "zh" ? `第 ${clicks} 下` : `Click ${clicks}`)}
      </p>
    </div>
  );
}
