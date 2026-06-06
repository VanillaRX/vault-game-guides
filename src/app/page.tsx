import Link from "next/link";
import { GameCard } from "@/components/game/game-card";
import { GAMES, GUIDES } from "@/lib/data";
import { ArrowRight, Zap, BookOpen, Target } from "lucide-react";
import { PixelCastle } from "@/components/effects/pixel-castle";
import { PixelGears } from "@/components/effects/pixel-gears";

const featuredGames = GAMES.filter((g) => g.featured);
const latestGuides = GUIDES.sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
).slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,160,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <PixelGears />
                <p className="animate-fade-in font-mono text-xs tracking-[0.2em] text-[var(--neon)]">
                  NO FLUFF. JUST THE STRATS.
                </p>
              </div>
              <h1 className="mt-4 animate-fade-in font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                  style={{ animationDelay: "0.1s" }}>
                <span className="text-[var(--fg)]">Strategy Games,</span>
                <br />
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--neon)] bg-clip-text text-transparent">
                  Solved.
                </span>
              </h1>
              <p className="mt-6 animate-fade-in text-base leading-relaxed text-[var(--muted)] sm:text-lg"
                  style={{ animationDelay: "0.2s" }}>
                Production layouts. District adjacency. Killbox designs. City planning.
                Every strategy, management, and colony sim guide you need —
                written by players who&apos;ve already put in the hours.
              </p>
              <div className="mt-8 flex animate-fade-in flex-wrap gap-4"
                  style={{ animationDelay: "0.3s" }}>
                <Link
                  href="/games"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent)]/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                >
                  Browse Games <ArrowRight size={16} />
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--fg)]/80 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Latest Guides
                </Link>
              </div>
            </div>

            {/* Pixel castle animation — desktop only */}
            <div className="mt-12 flex justify-center lg:mt-0 lg:shrink-0">
              <div className="p-6">
                <PixelCastle />
                <p className="mt-3 text-center font-mono text-[10px] tracking-wider text-[var(--muted)] animate-pulse-pixel">
                  BUILDING...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-7xl divide-x divide-[var(--border)] sm:grid-cols-3">
          {[
            { icon: Target, title: "Deep Guides", desc: "Every mechanic explained. No filler paragraphs." },
            { icon: Zap, title: "Zero Fluff", desc: "Bullet-point strats. Timestamps. Get in, get the answer, get back to playing." },
            { icon: BookOpen, title: "Player-Written", desc: "We've beaten the game. Multiple times. The guides prove it." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3 px-6 py-10 text-center">
              <Icon size={24} className="text-[var(--neon)]" />
              <h3 className="font-display text-sm font-bold tracking-wide">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured games */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
              SELECT YOUR GAME
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Featured Guides
            </h2>
          </div>
          <Link
            href="/games"
            className="hidden items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)] sm:flex"
          >
            All games <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((game, i) => (
            <GameCard key={game.slug} {...game} index={i} />
          ))}
        </div>
      </section>

      {/* Latest guides */}
      <section className="border-t border-[var(--border)] bg-[var(--bg)]/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
              FRESH STRATS
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              Latest Guides
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {latestGuides.map((guide) => {
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
                    <h3 className="mt-2 font-semibold leading-snug text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--muted)]">
                      {guide.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-[10px] text-[var(--muted)]/70">
                      <span>{guide.estimatedReadTime} min read</span>
                      <span>{guide.wordCount.toLocaleString()} words</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
