import { GameCardCompact } from "@/components/discovery/game-card-compact";
import type { GameEntry } from "@/lib/types";
import type { Lang } from "@/lib/i18n";

interface RecommendationItem {
  game: GameEntry;
  slug: string;
  similarityScore: number;
  reasonEn: string;
  reasonZh: string;
}

export function GamesLikeGrid({
  recommendations,
  lang,
  sourceGame,
}: {
  recommendations: RecommendationItem[];
  lang: Lang;
  sourceGame: string;
}) {
  if (recommendations.length === 0) return null;

  return (
    <section>
      <h2 className="mb-6 font-display text-lg font-bold tracking-tight text-[var(--neon)]">
        {lang === "zh"
          ? `如果你喜欢 ${sourceGame}，试试这些`
          : `If you like ${sourceGame}, try these`}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {recommendations.map((rec) => (
          <GameCardCompact
            key={rec.slug}
            game={rec.game}
            lang={lang}
            reason={lang === "zh" ? rec.reasonZh : rec.reasonEn}
            similarityScore={rec.similarityScore}
          />
        ))}
      </div>
    </section>
  );
}
