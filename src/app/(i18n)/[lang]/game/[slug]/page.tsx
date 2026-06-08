import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllGames, getGameBySlug } from "@/lib/game-data";
import type { Lang } from "@/lib/i18n";
import { GameFactZone } from "@/components/discovery/game-fact-zone";
import { GameAiZone } from "@/components/discovery/game-ai-zone";
import { GameScreenshots } from "@/components/discovery/game-screenshots";
import { LocalLink as Link } from "@/components/layout/local-link";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const games = getAllGames();
  return games.flatMap((g) => [
    { lang: "en", slug: g.slug },
    { lang: "zh", slug: g.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Not Found" };

  const title = lang === "zh" ? game.zhTitle || game.title : game.title;
  const desc = lang === "zh"
    ? (game.metaDescriptionZh || game.zhDescription || game.description)
    : (game.metaDescriptionEn || game.description);

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      images: game.coverImage ? [{ url: game.coverImage }] : undefined,
    },
  };
}

export default async function GameDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const langKey: Lang = lang === "zh" ? "zh" : "en";
  const title = langKey === "zh" ? (game.zhTitle || game.title) : game.title;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--neon)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/games" className="hover:text-[var(--neon)] transition-colors">
          {langKey === "zh" ? "游戏库" : "Games"}
        </Link>
        <span>/</span>
        <span className="text-[var(--fg)]/80 truncate">{title}</span>
      </nav>

      {/* Hero */}
      <header className="mb-10">
        {game.headerImage && (
          <img
            src={game.headerImage}
            alt={title}
            className="mb-6 w-full rounded-xl border border-[var(--border)] object-cover"
          />
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {game.shortDescription && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            {langKey === "zh" ? (game.zhShortDescription || game.shortDescription) : game.shortDescription}
          </p>
        )}
        <div className="mt-4 flex items-center gap-3">
          {game.steamAppId > 0 && (
            <a
              href={`https://store.steampowered.com/app/${game.steamAppId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1a3a5c] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2a4a6c]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              {langKey === "zh" ? "在 Steam 查看" : "View on Steam"}
            </a>
          )}
          {game.metacriticScore && (
            <span className="rounded-lg bg-green-500/15 px-3 py-1.5 text-xs font-semibold text-green-400">
              {game.metacriticScore}
            </span>
          )}
        </div>
      </header>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Main content */}
        <div className="flex-1 space-y-10">
          <GameFactZone game={game} lang={langKey} />
          <GameScreenshots screenshots={game.screenshots} title={title} />
          <GameAiZone game={game} lang={langKey} />
        </div>

        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-24 space-y-4">
            {game.guideCount > 0 && (
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
                <h3 className="font-display text-xs font-bold tracking-wide text-[var(--muted)]">
                  {langKey === "zh" ? "攻略" : "GUIDES"}
                </h3>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  {langKey === "zh"
                    ? `${game.guideCount} 篇攻略可用`
                    : `${game.guideCount} guides available`}
                </p>
                <Link
                  href={`/games/${slug}`}
                  className="mt-3 inline-block text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  {langKey === "zh" ? "查看攻略 →" : "View guides →"}
                </Link>
              </div>
            )}

            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-5 text-center">
              <p className="text-[10px] text-[var(--muted)]/40">
                {langKey === "zh" ? "广告位" : "AD PLACEMENT"}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
