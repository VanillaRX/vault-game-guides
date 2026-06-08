import { LocalLink as Link } from "@/components/layout/local-link";
import type { GameEntry } from "@/lib/types";
import type { Lang } from "@/lib/i18n";

interface Props {
  game: GameEntry;
  lang: Lang;
  reason?: string;
  similarityScore?: number;
  rank?: number;
}

export function GameCardCompact({ game, lang, reason, similarityScore, rank }: Props) {
  const title = lang === "zh" ? game.zhTitle || game.title : game.title;

  return (
    <Link
      href={`/game/${game.slug}`}
      className="group flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
    >
      {/* Rank badge */}
      {rank && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-sm font-bold text-[var(--accent)]">
          {rank}
        </div>
      )}

      {/* Cover image */}
      {game.coverImage && (
        <img
          src={game.coverImage}
          alt={title}
          className="h-20 w-auto shrink-0 rounded-md border border-[var(--border)]/50 object-cover"
          loading="lazy"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors truncate">
            {title}
          </h3>
          {similarityScore !== undefined && similarityScore > 0 && (
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              similarityScore >= 90 ? "bg-green-500/20 text-green-400" :
              similarityScore >= 75 ? "bg-[var(--accent)]/20 text-[var(--accent)]" :
              "bg-[var(--muted)]/20 text-[var(--muted)]"
            }`}>
              {similarityScore}%
            </span>
          )}
        </div>

        {/* Genres */}
        {game.genres.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {game.genres.slice(0, 3).map((genre) => (
              <span key={genre} className="rounded bg-[var(--bg)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* Reason */}
        {reason && (
          <p className="mt-1.5 line-clamp-2 text-xs text-[var(--muted)]/70">{reason}</p>
        )}
      </div>
    </Link>
  );
}
