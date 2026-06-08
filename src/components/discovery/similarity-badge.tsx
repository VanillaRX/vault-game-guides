export function SimilarityBadge({ score }: { score: number }) {
  const color =
    score >= 90 ? "bg-green-500/20 text-green-400" :
    score >= 75 ? "bg-[var(--accent)]/20 text-[var(--accent)]" :
    "bg-[var(--muted)]/20 text-[var(--muted)]";

  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${color}`}>
      {score}% match
    </span>
  );
}
