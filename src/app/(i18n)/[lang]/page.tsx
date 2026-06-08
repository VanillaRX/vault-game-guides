"use client";

import { LocalLink as Link } from "@/components/layout/local-link";
import { GameCard } from "@/components/game/game-card";
import { GAMES, GUIDES } from "@/lib/data";
import { ArrowRight, Zap, BookOpen, Target } from "lucide-react";
import { RumorWall } from "@/components/effects/rumor-wall";
import { PixelGears } from "@/components/effects/pixel-gears";
import { useLang } from "@/components/layout/lang-context";

const featuredGames = GAMES.filter((g) => g.featured);
const latestGuides = GUIDES.sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
).slice(0, 4);

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,160,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <PixelGears />
                <p className="animate-fade-in font-mono text-xs tracking-[0.2em] text-[var(--neon)]">
                  {t("hero.eyebrow")}
                </p>
              </div>
              <h1 className="mt-4 animate-fade-in font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                  style={{ animationDelay: "0.1s" }}>
                <span className="text-[var(--fg)]">{t("hero.headline")}</span>
                <br />
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--neon)] bg-clip-text text-transparent">
                  {t("hero.headlineHighlight")}
                </span>
              </h1>
              <p className="mt-6 animate-fade-in text-base leading-relaxed text-[var(--muted)] sm:text-lg"
                  style={{ animationDelay: "0.2s" }}>
                {t("hero.sub")}
              </p>
              <div className="mt-8 flex animate-fade-in flex-wrap gap-4"
                  style={{ animationDelay: "0.3s" }}>
                <Link
                  href="/games"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent)]/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                >
                  {t("hero.cta1")} <ArrowRight size={16} />
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--fg)]/80 transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {t("hero.cta2")}
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-center lg:mt-0 lg:shrink-0">
              <div className="w-full max-w-sm">
                <RumorWall />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-7xl divide-x divide-[var(--border)] sm:grid-cols-3">
          {[
            { icon: Target, title: t("values.deep"), desc: t("values.deepDesc") },
            { icon: Zap, title: t("values.zero"), desc: t("values.zeroDesc") },
            { icon: BookOpen, title: t("values.player"), desc: t("values.playerDesc") },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3 px-6 py-10 text-center">
              <Icon size={24} className="text-[var(--neon)]" />
              <h3 className="font-display text-sm font-bold tracking-wide">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
              {t("featured.eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              {t("featured.title")}
            </h2>
          </div>
          <Link
            href="/games"
            className="hidden items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)] sm:flex"
          >
            {t("featured.allGames")} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((game, i) => (
            <GameCard key={game.slug} {...game} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg)]/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
              {t("latest.eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              {t("latest.title")}
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
                        {t(`guide.category.${guide.category}`)}
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
                      <span>{guide.estimatedReadTime} {t("minRead")}</span>
                      <span>{guide.wordCount.toLocaleString()} {t("words")}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
              {t("discover.eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
              {t("discover.title")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/games-like/stardew-valley"
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
            >
              <div className="text-2xl">🎮</div>
              <h3 className="mt-3 font-semibold text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                {t("discover.like")}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                {t("discover.likeDesc")}
              </p>
            </Link>
            <Link
              href="/best/farming-games"
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
            >
              <div className="text-2xl">🏆</div>
              <h3 className="mt-3 font-semibold text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                {t("discover.best")}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                {t("discover.bestDesc")}
              </p>
            </Link>
            <Link
              href="/tag/farming"
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
            >
              <div className="text-2xl">🔍</div>
              <h3 className="mt-3 font-semibold text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                {t("discover.tag")}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                {t("discover.tagDesc")}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
