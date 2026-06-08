import { GameCardCompact } from "@/components/discovery/game-card-compact";
import type { GameEntry } from "@/lib/types";
import type { Lang } from "@/lib/i18n";

interface RankedGame {
  game: GameEntry;
  rank: number;
  reasonEn: string;
  reasonZh: string;
}

export function BestGamesList({
  games,
  lang,
}: {
  games: RankedGame[];
  lang: Lang;
}) {
  if (games.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 font-display text-lg font-bold tracking-tight text-[var(--neon)]">
        {lang === "zh" ? "排名" : "Rankings"}
      </h2>
      <div className="space-y-4">
        {games.map((item) => (
          <GameCardCompact
            key={item.game.slug}
            game={item.game}
            lang={lang}
            rank={item.rank}
            reason={lang === "zh" ? item.reasonZh : item.reasonEn}
          />
        ))}
      </div>
    </section>
  );
}
