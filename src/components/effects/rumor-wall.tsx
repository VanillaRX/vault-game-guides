"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLang } from "@/components/layout/lang-context";

const SECRETS: { en: string; zh: string }[] = [
  { en: "Anno 1800: a single Investor supply chain spans 3 maps and 12+ intermediate products — more complex than a real Victorian factory.", zh: "纪元1800里一条投资人供应链跨越3个地图、12种以上中间产品——比真实的维多利亚工厂还复杂。" },
  { en: "Pirates in Anno 1800 won't chase fully loaded trade ships — nothing to loot if they sink. This AI was intentional.", zh: "纪元1800的海盗不会追满载商船——沉了捞不到东西。这个AI是开发者故意写的。" },
  { en: "Civ VI: 32% go Science victory, 26% Domination, only 7% Religious. The numbers don't lie.", zh: "文明VI：32%选科技胜利，26%征服——宗教胜利只有7%。数据不说谎。" },
  { en: "Civ VI has a 1-in-5000 secret map: a perfectly symmetrical hexagonal continent.", zh: "文明VI藏了一个1/5000概率的彩蛋地图——完美对称的六边形大陆。" },
  { en: "RimWorld: Thrumbo leather armor out-defends powered steel. Tynan did this on purpose.", zh: "边缘世界：Thrumbo皮做的衣服防御比动力甲高。Tynan故意留的。" },
  { en: "RimWorld Ice Sheet: 0.3% spawn rate, -40°C. Under 1% of players survive year one.", zh: "边缘世界冰盖地图出现率0.3%，全年-40°C到-100°C。不到1%玩家活过第一年。" },
  { en: "RimWorld human leather sofa: 3× price to certain factions. Not a bug — Tynan coded it deliberately.", zh: "边缘世界人皮沙发在特定派系卖3倍。不是bug——Tynan故意写的。" },
  { en: "Foundation has no grid. Villagers walk paths into existence — exactly how medieval towns formed.", zh: "Foundation没有网格。村民一脚一脚踩出路——和真实中世纪城镇一模一样。" },
  { en: "90% of Farthest Frontier newcomers get razed before their first stone wall is done.", zh: "最远的边陲90%新手在石墙竣工前就被踏平。" },
  { en: "Going Medieval: enemies ONLY attack doors. One iron door + two archers = literally invincible.", zh: "前往中世纪：敌人只打门。一扇铁门+两个弓箭手=无敌。字面意思。" },
  { en: "Factorio players call it 'Cracktorio'. Average playtime: 200+ hours. The factory must grow.", zh: "异星工厂玩家叫它'电子海洛因'。平均游戏时间200+小时。工厂必须增长。" },
  { en: "Stardew Valley: ConcernedApe built the entire game solo over 4 years. Sold 30M+ copies.", zh: "星露谷物语：ConcernedApe一人做了4年。卖出了3000万份。" },
  { en: "Timberborn: beavers survive humanity's extinction by building dams. Irony level: 100%.", zh: "Timberborn：人类灭绝后海狸靠修水坝活下来。讽刺度100%。" },
  { en: "Top Steam review phrase for strategy games: 'one more turn' — followed by 'it's 4 AM'.", zh: "策略游戏Steam评论高频词：'再来一回合'——紧接着'靠，凌晨4点了'。" },
];

const S = 16; // grid size
const PX = 12; // pixel size
const HOLD_MS = 2000; // 2 seconds hold

const DIRT_PALETTE = ["#6B4226","#5C3A1E","#7B5232","#8B5A2B","#4A3728","#3D2B1F","#6B4F3A","#5A3D28","#8B6B4A","#7B5A3A","#9B7B5A","#6B5B3A"];
const GRASS_PALETTE = ["#5D8A3C","#6B9B37","#4A7A2B","#3D6B1F","#7BA84A","#558B2F"];

function pixelColor(row: number, col: number): string {
  if (row < 2) return GRASS_PALETTE[(col + row * 3) % GRASS_PALETTE.length];
  return DIRT_PALETTE[(col * 7 + row * 13) % DIRT_PALETTE.length];
}

export function RumorWall() {
  const { lang } = useLang();
  const [dead, setDead] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef(0);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(Math.floor(Math.random() * SECRETS.length));
  }, []);

  const pixels = Array.from({ length: S * S }, (_, i) => {
    const row = Math.floor(i / S);
    const col = i % S;
    return { col, row, color: pixelColor(row, col) };
  });

  const startHold = useCallback(() => {
    if (dead) return;
    setProgress(0);
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(100, (elapsed / HOLD_MS) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timerRef.current!);
        setDead(true);
        setProgress(0);
      }
    }, 50);
  }, [dead]);

  const cancelHold = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setProgress(0);
  }, []);

  const secret = SECRETS[idx];

  return (
    <div className="select-none">
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60"
           style={{ width: S * PX + 8, height: S * PX + 34, margin: "0 auto" }}>
        {/* Secret text */}
        {dead && (
          <div className="absolute inset-0 flex items-center justify-center p-3 z-0">
            <p className="text-xs leading-relaxed text-center text-[var(--fg)]/90">
              <span className="font-bold text-[var(--neon)]">{lang === "zh" ? "趣闻：" : "Fun Fact: "}</span>
              {lang === "zh" ? secret.zh : secret.en}
            </p>
          </div>
        )}

        {/* Pixel block */}
        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-500 ${dead ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <button
            onMouseDown={startHold}
            onMouseUp={cancelHold}
            onMouseLeave={cancelHold}
            onTouchStart={startHold}
            onTouchEnd={cancelHold}
            className="relative cursor-pointer select-none"
            style={{ width: S * PX, height: S * PX }}>
            {/* 3D edge effect */}
            <div className="absolute -right-2 top-0 bottom-0 w-2 bg-[#3D2B1F]/40 rounded-r-sm" />
            <div className="absolute -bottom-2 left-0 right-2 h-2 bg-[#3D2B1F]/40 rounded-b-sm" />
            {pixels.map((p, i) => (
              <span key={i} className="absolute inline-block"
                style={{
                  left: p.col * PX, top: p.row * PX,
                  width: PX, height: PX,
                  backgroundColor: p.color,
                }} />
            ))}
            {/* Progress overlay while holding */}
            {progress > 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-sm">
                <div className="text-xs font-bold text-white" style={{ opacity: progress / 100 }}>
                  {Math.ceil(progress)}%
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-[10px] tracking-wider text-[var(--muted)]">
        {dead
          ? (lang === "zh" ? "碎啦 💥" : "Gone! 💥")
          : progress > 0
            ? (lang === "zh" ? "按住别松..." : "Hold on...")
            : (lang === "zh" ? "按住 2 秒凿开" : "Hold 2s to break")
        }
      </p>
    </div>
  );
}
