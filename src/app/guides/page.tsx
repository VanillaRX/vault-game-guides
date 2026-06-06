import Link from "next/link";
import type { Metadata } from "next";
import { GAMES, GUIDES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Latest Game Guides",
  description: "Our newest walkthroughs, builds, and strategies for indie games.",
};

export default function GuidesPage() {
  const sorted = [...GUIDES].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10">
        <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
          FRESH STRATS
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">
          Latest Guides
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
          Every guide we publish, newest first. Bookmark this page — we update weekly.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sorted.map((guide) => {
          const game = GAMES.find((g) => g.slug === guide.gameSlug);
          return (
            <Link
              key={`${guide.gameSlug}-${guide.slug}`}
              href={`/games/${guide.gameSlug}/guides/${guide.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[var(--accent)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)]">
                    {guide.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-[var(--muted)]">
                    {game?.title}
                  </span>
                </div>
                <h3 className="mt-2 font-semibold leading-snug group-hover:text-[var(--neon)] transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-[var(--muted)]">
                  {guide.description}
                </p>
                <div className="mt-3 flex items-center gap-4 text-[10px] text-[var(--muted)]/70">
                  <span>{guide.estimatedReadTime} min read</span>
                  <span>{guide.publishDate}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
