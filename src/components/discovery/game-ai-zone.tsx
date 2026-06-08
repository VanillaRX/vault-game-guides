import type { GameEntry } from "@/lib/types";
import type { Lang } from "@/lib/i18n";
import { LocalLink as Link } from "@/components/layout/local-link";

interface Props {
  game: GameEntry;
  lang: Lang;
}

export function GameAiZone({ game, lang }: Props) {
  const isZh = lang === "zh";

  const overview = isZh
    ? (game.zhDescription || game.description || `${game.title} 是一款${game.genres?.join("、")}游戏。`)
    : (game.description || `${game.title} is a ${game.genres?.join(", ")} game.`);

  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="rounded-xl border border-[var(--border)] border-l-[var(--accent)] border-l-2 bg-[var(--card)]/50 p-6">
        <h2 className="mb-3 font-display text-sm font-bold tracking-wide text-[var(--accent)]">
          {isZh ? "游戏概述" : "Overview"}
          <span className="ml-2 rounded bg-[var(--accent)]/15 px-1.5 py-0.5 text-[10px] font-normal text-[var(--accent)]/70">
            AI {isZh ? "生成" : "Generated"}
          </span>
        </h2>
        <p className="text-sm leading-relaxed text-[var(--fg)]/80">{overview}</p>
      </div>

      {/* Similar Games */}
      {game.similarGames.length > 0 && (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
          <h3 className="mb-3 font-display text-sm font-bold tracking-wide">
            {isZh ? "类似游戏" : "Similar Games"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {game.similarGames.slice(0, 6).map((slug) => (
              <Link
                key={slug}
                href={`/games/${slug}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-xs text-[var(--fg)]/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
