import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTag, getGamesByTags } from "@/lib/game-data";
import type { Lang } from "@/lib/i18n";
import { GameCardCompact } from "@/components/discovery/game-card-compact";
import { LocalLink as Link } from "@/components/layout/local-link";

interface Props {
  params: Promise<{ lang: string; slug: string; sub: string }>;
}

export async function generateStaticParams() {
  // Generate popular tag combos
  const combos = [
    ["farming", "co-op"],
    ["farming", "multiplayer"],
    ["cozy", "single-player"],
    ["city-builder", "management"],
    ["management", "strategy"],
    ["cozy", "farming"],
    ["colony-sim", "survival"],
  ];
  return combos.flatMap(([slug, sub]) => [
    { lang: "en", slug, sub },
    { lang: "zh", slug, sub },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug, sub } = await params;
  const mainTag = getTag(slug);
  const subTag = getTag(sub);

  const mainName = lang === "zh" ? (mainTag?.titleZh || slug) : mainTag?.titleEn || slug;
  const subName = lang === "zh" ? (subTag?.titleZh || sub) : subTag?.titleEn || sub;

  return {
    title: `${mainName} + ${subName}`,
    description: `Browse ${mainName} games that also feature ${subName}.`,
  };
}

export default async function ComboTagPage({ params }: Props) {
  const { lang, slug, sub } = await params;
  const mainTag = getTag(slug);
  const subTag = getTag(sub);
  if (!mainTag || !subTag) notFound();

  const langKey: Lang = lang === "zh" ? "zh" : "en";
  const games = getGamesByTags([slug, sub]);

  const mainName = langKey === "zh" ? mainTag.titleZh : mainTag.titleEn;
  const subName = langKey === "zh" ? subTag.titleZh : subTag.titleEn;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--neon)] transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/tag/${slug}`} className="hover:text-[var(--neon)] transition-colors">
          {mainName}
        </Link>
        <span>/</span>
        <span className="text-[var(--fg)]/80">{subName}</span>
      </nav>

      <h1 className="font-display text-3xl font-bold tracking-tight">
        {mainName} + {subName}
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {langKey === "zh"
          ? `${mainName}中同时支持${subName}的游戏。`
          : `${mainName} games that also feature ${subName}.`}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCardCompact key={game.slug} game={game} lang={langKey} />
          ))
        ) : (
          <p className="col-span-2 rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-10 text-center text-sm text-[var(--muted)]">
            {langKey === "zh" ? "暂无匹配游戏" : "No matching games yet"}
          </p>
        )}
      </div>

      <p className="mt-4 text-xs text-[var(--muted)]/60">
        {games.length} {langKey === "zh" ? "款游戏" : "games"}
      </p>
    </div>
  );
}
