import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GAMES, GUIDES } from "@/lib/data";
import { getGuideComponent } from "@/content/guides/registry";

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
  const guide = GUIDES.find(
    (g) => g.gameSlug === slug && g.slug === guideId,
  );
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
  const guide = GUIDES.find(
    (g) => g.gameSlug === slug && g.slug === guideId,
  );
  if (!guide) notFound();

  const game = GAMES.find((g) => g.slug === slug);
  const GuideContent = getGuideComponent(slug, guideId);
  const relatedGuides = GUIDES.filter(
    (g) => g.gameSlug === slug && g.slug !== guideId,
  ).slice(0, 3);

  // Build JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: { "@type": "Organization", name: "Vault Guides" },
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    about: game
      ? { "@type": "VideoGame", name: game.title, applicationCategory: "Game" }
      : undefined,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Main content */}
        <article className="flex-1 min-w-0">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--neon)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/games/${slug}`} className="hover:text-[var(--neon)] transition-colors">
              {game?.title}
            </Link>
            <span>/</span>
            <span className="text-[var(--fg)]/80 truncate">{guide.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[var(--accent)]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[var(--accent)]">
                {guide.category}
              </span>
              <span className="rounded bg-[var(--bg)] px-2.5 py-0.5 text-[10px] uppercase text-[var(--muted)]">
                {guide.difficulty}
              </span>
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {guide.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {guide.description}
            </p>
            <div className="mt-4 flex items-center gap-5 text-xs text-[var(--muted)]/60">
              <span>{guide.estimatedReadTime} min read</span>
              <span>{guide.wordCount.toLocaleString()} words</span>
              <span>{guide.publishDate}</span>
            </div>
            {game && (
              <Link
                href={`/games/${slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
              >
                More {game.title} guides &rarr;
              </Link>
            )}
          </header>

          {/* Guide content */}
          {GuideContent ? (
            <div className="space-y-10">
              <GuideContent gameSlug={slug} guideSlug={guideId} />
            </div>
          ) : (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-8 text-center">
              <p className="font-mono text-sm text-[var(--neon)]">
                ⚡ FULL GUIDE CONTENT COMING SOON ⚡
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                We're writing this guide right now. Check back soon.
              </p>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-24 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
            <h3 className="font-display text-sm font-bold tracking-wide">
              Table of Contents
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
                      <a href="#section-4" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Meta: Charms &amp; Healing</a>
                    </>
                  )}
                  {guide.title.includes("Beginner") && guide.title.includes("Hollow Knight") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Hour 0-2</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Hour 2-4</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Hour 4-7</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Hour 7-10</a>
                    </>
                  )}
                  {(guide.title.includes("Boon") || guide.title.includes("Beginner Guide: Your First")) && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">{guide.title.includes("Boon") ? "God Tier List" : "Meta-Progression"}</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">{guide.title.includes("Boon") ? "Core Boons" : "Weapons"}</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">{guide.title.includes("Boon") ? "Duo Boons" : "Room Priority"}</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">{guide.title.includes("Boon") ? "Weapon Builds" : "Chronos Fight"}</a>
                    </>
                  )}
                  {guide.title.includes("Breeding") && (
                    <>
                      <a href="#section-0" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">System Explained</a>
                      <a href="#section-1" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">S-Tier Passives</a>
                      <a href="#section-2" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Chain-Breeding</a>
                      <a href="#section-3" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">Meta Pal Chains</a>
                    </>
                  )}
                  <a href="#faq" className="block rounded-lg px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--neon)]">FAQ</a>
                </>
              ) : (
                <p className="text-xs text-[var(--muted)]/50">Coming soon</p>
              )}
            </nav>

            {/* Related guides */}
            {relatedGuides.length > 0 && (
              <div className="mt-6 border-t border-[var(--border)] pt-5">
                <h4 className="text-xs font-semibold tracking-wide text-[var(--muted)]">
                  RELATED GUIDES
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

          {/* Ad slot placeholder */}
          <div className="mt-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-8 text-center">
            <p className="text-[10px] text-[var(--muted)]/40">AD PLACEMENT (V1)</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
