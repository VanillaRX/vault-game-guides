import { LocalLink as Link } from "@/components/layout/local-link";
import { getAllGames, getAllBestCategories, getAllTags } from "@/lib/game-data";
import { GameCardCompact } from "@/components/discovery/game-card-compact";
import type { Lang } from "@/lib/i18n";
import type { GameEntry, TagEntry } from "@/lib/types";
import { Search } from "lucide-react";

interface Props {
  params: Promise<{ lang: string }>;
}

const FEATURED_TAGS = ["farming", "cozy", "city-builder", "management", "colony-sim", "survival"];

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const langKey: Lang = lang === "zh" ? "zh" : "en";
  const isZh = langKey === "zh";

  const allGames = getAllGames();
  const tags = getAllTags();
  const bestCategories = getAllBestCategories();
  const featuredTagEntries = FEATURED_TAGS.map((t) => tags.find((tag) => tag.slug === t)).filter(Boolean) as TagEntry[];

  // Latest 6 games (by index order, newest last)
  const latestGames = allGames.slice(-6).reverse();

  // Top picks: featured games with high review counts
  const topPicks = allGames
    .filter((g) => g.positiveReviews > 0)
    .sort((a, b) => b.positiveReviews - a.positiveReviews)
    .slice(0, 6);

  return (
    <>
      {/* Hero Search */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,160,0.08),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="text-[var(--fg)]">
              {isZh ? "游戏荒了？" : "Game drought?"}
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--neon)] bg-clip-text text-transparent">
              {isZh ? "来这里找下一款。" : "Find your next one."}
            </span>
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)] sm:text-base">
            {isZh
              ? "专注模拟经营、策略建造、休闲农场。Steam 真实数据，不用翻评论、不用看视频——几秒钟发现你真正会玩进去的游戏。"
              : "Simulation, strategy, city builder & cozy farming games. Real Steam data. No scrolling reviews, no watching trailers — find games you'll actually play, in seconds."}
          </p>

          {/* Search bar */}
          <form action={`/${lang}/search`} className="mt-8 mx-auto max-w-lg">
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 transition-colors focus-within:border-[var(--accent)]">
              <Search size={18} className="text-[var(--muted)] shrink-0" />
              <input
                name="q"
                type="text"
                placeholder={isZh ? "搜游戏名或标签..." : "Search games or tags..."}
                className="flex-1 bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--muted)]/50"
              />
            </div>
          </form>

          {/* Tag chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {featuredTagEntries.map((tag) => (
              <Link
                key={tag.slug}
                href={`/tag/${tag.slug}`}
                className="rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-3 py-1 text-xs text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
              >
                {isZh ? tag.titleZh : tag.titleEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks */}
      {topPicks.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight">
              {isZh ? "热门推荐" : "Top Picks"}
            </h2>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {isZh ? "社区评价最高的游戏" : "Highest-rated by the community"}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topPicks.map((game) => (
              <GameCardCompact key={game.slug} game={game} lang={langKey} />
            ))}
          </div>
        </section>
      )}

      {/* Explore Tags */}
      <section className="border-t border-[var(--border)] bg-[var(--bg)]/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight">
              {isZh ? "按类型探索" : "Explore by Genre"}
            </h2>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {isZh ? "模拟经营 · 策略建造 · 休闲农场 · 殖民生存" : "Simulation · Strategy · Farming · Colony Survival"}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTagEntries.map((tag) => {
              const count = allGames.filter((g) => g.tags.includes(tag.slug)).length;
              return (
                <Link
                  key={tag.slug}
                  href={`/tag/${tag.slug}`}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
                >
                  <h3 className="font-semibold text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                    {isZh ? tag.titleZh : tag.titleEn}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs text-[var(--muted)]">
                    {isZh ? tag.descriptionZh : tag.descriptionEn}
                  </p>
                  <p className="mt-3 text-[10px] text-[var(--muted)]/60">
                    {count} {isZh ? "款游戏" : "games"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Games */}
      {bestCategories.length > 0 && (
        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mb-8">
              <h2 className="font-display text-xl font-bold tracking-tight">
                {isZh ? "最佳榜单" : "Best Games"}
              </h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {isZh ? "按类型精选的排名榜单" : "Ranked lists by category"}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bestCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/best/${cat.slug}`}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5"
                >
                  <div className="text-lg">🏆</div>
                  <h3 className="mt-2 font-semibold text-sm text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                    {isZh ? cat.titleZh : cat.titleEn}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[10px] text-[var(--muted)]">
                    {cat.games.length} {isZh ? "款入选" : "games ranked"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Added */}
      <section className="border-t border-[var(--border)] bg-[var(--bg)]/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight">
              {isZh ? "最新收录" : "Latest Added"}
            </h2>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {isZh ? "最近加入数据库的游戏" : "Recently added to the database"}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestGames.map((game) => (
              <GameCardCompact key={game.slug} game={game} lang={langKey} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/games"
              className="text-xs font-medium text-[var(--accent)] hover:underline"
            >
              {isZh ? `查看全部 ${allGames.length} 款游戏 →` : `View all ${allGames.length} games →`}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
