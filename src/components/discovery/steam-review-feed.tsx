import type { Lang } from "@/lib/i18n";

interface SteamReviewItem {
  recommendationid: string;
  review: string;
  voted_up: boolean;
  votes_up: number;
  votes_funny: number;
}

interface Props {
  reviews: SteamReviewItem[];
  lang: Lang;
}

export function SteamReviewFeed({ reviews, lang }: Props) {
  if (!reviews || reviews.length === 0) return null;
  const isZh = lang === "zh";

  return (
    <section>
      <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">
        {isZh ? "玩家怎么说" : "What Players Say"}
      </h2>
      <p className="mt-1 text-xs text-[var(--muted)]">
        {isZh ? "Steam 最有价值的玩家评价" : "Most helpful Steam reviews"}
      </p>
      <div className="mt-3 space-y-3">
        {reviews.map((r) => (
          <div key={r.recommendationid} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${r.voted_up ? "bg-[var(--neon)]/15 text-[var(--neon)]" : "bg-red-500/15 text-red-400"}`}>
                {r.voted_up ? (isZh ? "推荐" : "Recommended") : (isZh ? "不推荐" : "Not Recommended")}
              </span>
              <span className="text-[10px] text-[var(--muted)]/60">
                👍 {r.votes_up} · 😂 {r.votes_funny}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--fg)]/80 line-clamp-6">
              {r.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
