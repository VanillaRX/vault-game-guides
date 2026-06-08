import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllTags, getTag, getGamesByTag } from "@/lib/game-data";
import type { Lang } from "@/lib/i18n";
import { GameCardCompact } from "@/components/discovery/game-card-compact";
import { LocalLink as Link } from "@/components/layout/local-link";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.flatMap((t) => [
    { lang: "en", slug: t.slug },
    { lang: "zh", slug: t.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const tag = getTag(slug);
  if (!tag) return { title: "Not Found" };

  const title = lang === "zh" ? tag.titleZh : tag.titleEn;
  const desc = lang === "zh" ? tag.descriptionZh : tag.descriptionEn;

  return { title, description: desc };
}

export default async function TagPage({ params }: Props) {
  const { lang, slug } = await params;
  const tag = getTag(slug);
  if (!tag) notFound();

  const langKey: Lang = lang === "zh" ? "zh" : "en";
  const games = getGamesByTag(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--neon)] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[var(--fg)]/80">
          {langKey === "zh" ? tag.titleZh : tag.titleEn}
        </span>
      </nav>

      <h1 className="font-display text-3xl font-bold tracking-tight">
        {langKey === "zh" ? tag.titleZh : tag.titleEn}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
        {langKey === "zh" ? tag.descriptionZh : tag.descriptionEn}
      </p>

      {tag.relatedTags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-[var(--muted)]/60">
            {langKey === "zh" ? "相关标签:" : "Related:"}
          </span>
          {tag.relatedTags.map((rt) => (
            <Link
              key={rt}
              href={`/tag/${rt}`}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-0.5 text-[10px] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {langKey === "zh" ? (getTag(rt)?.titleZh || rt) : rt.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCardCompact key={game.slug} game={game} lang={langKey} />
          ))
        ) : (
          <p className="col-span-2 rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-10 text-center text-sm text-[var(--muted)]">
            {langKey === "zh" ? "暂无游戏数据" : "No games yet"}
          </p>
        )}
      </div>

      <p className="mt-4 text-xs text-[var(--muted)]/60">
        {games.length} {langKey === "zh" ? "款游戏" : "games"}
      </p>
    </div>
  );
}
