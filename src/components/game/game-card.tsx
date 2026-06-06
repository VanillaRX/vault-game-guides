"use client";

import Link from "next/link";
import { useLang } from "@/components/layout/lang-context";
import { Bilingual } from "@/components/layout/bilingual";

interface GameCardProps {
  slug: string;
  title: string;
  zhTitle: string;
  description: string;
  zhDescription: string;
  coverImage: string;
  genres: string[];
  guideCount: number;
  index?: number;
}

export function GameCard({
  slug,
  title,
  zhTitle,
  description,
  zhDescription,
  coverImage,
  genres,
  guideCount,
  index = 0,
}: GameCardProps) {
  const { t } = useLang();
  return (
    <Link
      href={`/games/${slug}`}
      className="group block rounded-xl border border-[var(--border)] bg-[var(--card)] p-0.5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="overflow-hidden rounded-lg">
        {/* Cover */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
          {/* Genre badges */}
          <div className="absolute left-3 top-3 flex gap-1.5">
            {genres.slice(0, 2).map((g) => (
              <span
                key={g}
                className="rounded-full bg-[var(--bg)]/80 px-2.5 py-0.5 text-[10px] font-medium text-[var(--neon)] backdrop-blur-sm"
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-sm font-bold tracking-wide text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
            <Bilingual en={title} zh={zhTitle} />
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--muted)]">
            <Bilingual en={description} zh={zhDescription} />
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-[var(--muted)]/70">
              {guideCount} {t("game.guides")}
            </span>
            <span className="text-[11px] font-medium text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
              {t("game.browse")} &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
