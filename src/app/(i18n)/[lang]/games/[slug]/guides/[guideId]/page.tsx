import { LocalLink as Link } from "@/components/layout/local-link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GAMES, GUIDES } from "@/lib/data";
import { getGuideComponent } from "@/content/guides/registry";
import { Suspense } from "react";
import { Bilingual } from "@/components/layout/bilingual";
import {
  GuideCategoryLabel,
  GuideDifficultyLabel,
  GuideTocTitle,
  GuideRelatedTitle,
  GuideFaqTitle,
  GuideComingSoon,
  GuideAdPlaceholder,
  UseT,
} from "@/components/guide/guide-chrome";

interface Props {
  params: Promise<{ slug: string; guideId: string }>;
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.gameSlug,
    guideId: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, guideId } = await params;
  const guide = GUIDES.find((g) => g.gameSlug === slug && g.slug === guideId);
  if (!guide) return { title: "Guide Not Found" };
  const game = GAMES.find((g) => g.slug === slug);

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: `${guide.title} | ${game?.title} | Vault Guides`,
      description: guide.description,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug, guideId } = await params;
  const guide = GUIDES.find((g) => g.gameSlug === slug && g.slug === guideId);
  if (!guide) notFound();

  const game = GAMES.find((g) => g.slug === slug);
  const GuideContent = getGuideComponent(slug, guideId);
  const relatedGuides = GUIDES.filter(
    (g) => g.gameSlug === slug && g.slug !== guideId,
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: { "@type": "Organization", name: "Vault Guides" },
    datePublished: guide.publishDate,
    about: game
      ? { "@type": "VideoGame", name: game.title, applicationCategory: "Game" }
      : undefined,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col gap-8 lg:flex-row">
        <article className="flex-1 min-w-0">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--neon)] transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/games/${slug}`} className="hover:text-[var(--neon)] transition-colors">
              {game?.title}
            </Link>
            <span>/</span>
            <span className="text-[var(--fg)]/80 truncate">{guide.title}</span>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[var(--accent)]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[var(--accent)]">
                <Suspense><GuideCategoryLabel category={guide.category} /></Suspense>
              </span>
              <span className="rounded bg-[var(--bg)] px-2.5 py-0.5 text-[10px] uppercase text-[var(--muted)]">
                <Suspense><GuideDifficultyLabel difficulty={guide.difficulty} /></Suspense>
              </span>
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              <Bilingual en={guide.title} zh={guide.zhTitle} />
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              <Bilingual en={guide.description} zh={guide.zhDescription} />
            </p>
            <div className="mt-4 flex items-center gap-5 text-xs text-[var(--muted)]/60">
              <span>{guide.estimatedReadTime} <Suspense><UseT k="minRead" /></Suspense></span>
              <span>{guide.wordCount.toLocaleString()} <Suspense><UseT k="words" /></Suspense></span>
              <span>{guide.publishDate}</span>
            </div>
            {game && (
              <Link
                href={`/games/${slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
              >
                <Suspense><Bilingual en={`More ${game.title} guides →`} zh={`更多${game.zhTitle}攻略 →`} /></Suspense>
              </Link>
            )}
          </header>

          {GuideContent ? (
            <div className="space-y-10">
              <GuideContent gameSlug={slug} guideSlug={guideId} />
            </div>
          ) : (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-8 text-center">
              <p className="font-mono text-sm text-[var(--neon)]">⚡ <Suspense><GuideComingSoon /></Suspense> ⚡</p>
            </div>
          )}
        </article>

        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-24 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
            <h3 className="font-display text-sm font-bold tracking-wide">
              <Suspense><GuideTocTitle /></Suspense>
            </h3>
            <nav className="mt-4 space-y-1">
              {GuideContent ? (
                <>
                  {guide.title.includes("Boss") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Early Game</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Mid-Game</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Late Game</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">DLC Bosses</a>
                    </>
                  )}
                  {guide.category === "advanced" && guide.title.includes("Production") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Production Ratios</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Warehouse</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Trade Union</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Cross-Region</a>
                    </>
                  )}
                  {guide.category === "beginner" && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Getting Started</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Core Strategy</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Advanced Tips</a>
                    </>
                  )}
                  {guide.title.includes("Defense") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Killbox Designs</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Cover Mechanics</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Sapper-Proofing</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Turrets</a>
                    </>
                  )}
                  {guide.title.includes("Mood") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Mood System</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Room Optimization</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Work Priorities</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Colony Layout</a>
                    </>
                  )}
                  {guide.title.includes("Farming") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Crop Rotation</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Soil & Livestock</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Preservation</a>
                    </>
                  )}
                  {guide.title.includes("Castle") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Layered Defense</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Materials</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Settler Psychology</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Winter Survival</a>
                    </>
                  )}
                  {guide.title.includes("City Layout") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Zone Planning</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Supply Chains</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Monuments</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Trade</a>
                    </>
                  )}
                  {guide.title.includes("Economy") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Promotion Pipeline</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Trade Routes</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Monument ROI</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Gold Management</a>
                    </>
                  )}
                  {guide.title.includes("Production Chains") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Production Tree</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Specialization</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Research</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Storage</a>
                    </>
                  )}
                  {guide.title.includes("District") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Campus</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Industrial Zone</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">All Districts Ref</a>
                    </>
                  )}
                  {guide.title.includes("Victory") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Victory Types</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Science Beeline</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Culture Tourism</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Domination</a>
                    </>
                  )}
                  <a href="#faq" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">
                    <Suspense><GuideFaqTitle /></Suspense>
                  </a>
                </>
              ) : (
                <p className="text-xs text-[var(--muted)]/50">Coming soon</p>
              )}
            </nav>

            {relatedGuides.length > 0 && (
              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <h4 className="text-xs font-semibold tracking-wide text-[var(--muted)]">
                  <Suspense><GuideRelatedTitle /></Suspense>
                </h4>
                <div className="mt-3 space-y-2">
                  {relatedGuides.map((rg) => (
                    <Link
                      key={rg.slug}
                      href={`/games/${slug}/guides/${rg.slug}`}
                      className="block rounded-lg px-3 py-2 text-xs transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]"
                    >
                      {rg.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-8 text-center">
            <p className="text-[10px] text-[var(--muted)]/40">
              <Suspense><GuideAdPlaceholder /></Suspense>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
