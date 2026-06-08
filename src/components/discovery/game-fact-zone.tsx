import type { GameEntry } from "@/lib/types";
import type { Lang } from "@/lib/i18n";

interface Props {
  game: GameEntry;
  lang: Lang;
}

export function GameFactZone({ game, lang }: Props) {
  const isZh = lang === "zh";

  const facts = [
    { label: isZh ? "开发商" : "Developer", value: game.developer },
    { label: isZh ? "发行商" : "Publisher", value: game.publisher || "—" },
    { label: isZh ? "发售日" : "Release Date", value: game.releaseDate || "—" },
    { label: isZh ? "支持中文" : "Chinese Support", value: game.supportsChinese ? (isZh ? "是" : "Yes") : (isZh ? "否" : "No") },
    { label: isZh ? "联机" : "Multiplayer", value: game.supportsMultiplayer ? (isZh ? "是" : "Yes") : (isZh ? "否" : "No") },
    { label: isZh ? "合作" : "Co-op", value: game.supportsCoop ? (isZh ? "是" : "Yes") : (isZh ? "否" : "No") },
  ];

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h2 className="mb-4 font-display text-sm font-bold tracking-wide text-[var(--neon)]">
        {isZh ? "游戏信息" : "Game Info"}
        <span className="ml-2 rounded bg-green-500/15 px-1.5 py-0.5 text-[10px] font-normal text-green-400">
          Steam {isZh ? "官方数据" : "Official Data"}
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
        {facts.map((f) => (
          <div key={f.label}>
            <div className="text-[10px] uppercase tracking-wide text-[var(--muted)]/60">{f.label}</div>
            <div className="mt-0.5 text-sm text-[var(--fg)]">{f.value}</div>
          </div>
        ))}
      </div>

      {game.genres.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {game.genres.map((g) => (
            <span key={g} className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-[10px] text-[var(--muted)]">
              {g}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
