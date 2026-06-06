import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GAMES, GUIDES } from "@/lib/data";
import { ArrowRight, Clock, Users, Star, Swords } from "lucide-react";
import { SteamStats } from "@/components/game/steam-stats";
import { Suspense } from "react";
import { UseT } from "@/components/guide/guide-chrome";
import { Bilingual } from "@/components/layout/bilingual";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GAMES.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) return { title: "Game Not Found" };

  return {
    title: `${game.title} Guides & Walkthroughs`,
    description: game.shortDescription,
    openGraph: {
      title: `${game.title} Guides & Walkthroughs | Vault Guides`,
      description: game.shortDescription,
      images: [{ url: game.coverImage }],
    },
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();

  const gameGuides = GUIDES.filter((g) => g.gameSlug === slug);

  return (
    <div>
      {/* Banner */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 blur-sm"
          style={{ backgroundImage: `url(${game.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-xl">
            <div className="flex flex-wrap gap-2">
              {game.genres.map((g) => (
                <span
                  key={g}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)]/80 px-3 py-1 text-[11px] font-medium backdrop-blur-sm"
                >
                  {g}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl">
              <Bilingual en={game.title} zh={game.zhTitle} />
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              <Bilingual en={game.description} zh={game.zhDescription} />
            </p>
            <div className="mt-4">
              <SteamStats appId={game.steamAppId} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <Clock size={14} />
                <span>{game.releaseDate}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <Swords size={14} />
                <span>{game.developer}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <BookIcon size={14} />
                <span>{gameGuides.length} <Suspense><UseT k="game.guidesAvailable" /></Suspense></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-xl font-bold tracking-tight">
          Guides for {game.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {gameGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/games/${slug}/guides/${guide.slug}`}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/50"
            >
              <div className="flex items-center gap-2">
                <span className="rounded bg-[var(--accent)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)]">
                  {guide.category.toUpperCase()}
                </span>
                <span className="rounded bg-[var(--bg)] px-2 py-0.5 text-[10px] text-[var(--muted)]">
                  {guide.difficulty.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-3 font-semibold leading-snug group-hover:text-[var(--neon)] transition-colors">
                <Bilingual en={guide.title} zh={guide.zhTitle} />
              </h3>
              <p className="mt-1.5 line-clamp-2 text-xs text-[var(--muted)]">
                <Bilingual en={guide.description} zh={guide.zhDescription} />
              </p>
              <div className="mt-3 flex items-center gap-4 text-[10px] text-[var(--muted)]/60">
                <span>{guide.estimatedReadTime} min read</span>
                <span>{guide.wordCount.toLocaleString()} words</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function BookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
