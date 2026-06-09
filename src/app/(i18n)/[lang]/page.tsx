import { LocalLink as Link } from "@/components/layout/local-link";
import { getAllGames, getAllBestCategories } from "@/lib/game-data";
import { GameCardCompact } from "@/components/discovery/game-card-compact";
import { GameConstellation } from "@/components/discovery/game-constellation";
import type { Lang } from "@/lib/i18n";
import type { GameEntry } from "@/lib/types";
import { Search } from "lucide-react";

interface Props { params: Promise<{ lang: string }>; }

const MOODS = [
  { icon: "🌿", en: "Relax and Unwind", zh: "放松治愈", tags: ["cozy", "casual"], descEn: "Low stress, high charm", descZh: "低压高魅力，下班后的治愈时间" },
  { icon: "🏠", en: "Build Something Amazing", zh: "建造你的世界", tags: ["city-builder", "creative"], descEn: "From villages to metropolises", descZh: "从村庄到大都市，亲手建造" },
  { icon: "🚜", en: "Live the Farming Life", zh: "田园生活", tags: ["farming", "life-sim"], descEn: "Crops, animals, and small-town charm", descZh: "种田、养动物、小镇社交" },
  { icon: "🧠", en: "Plan and Optimize", zh: "策略与优化", tags: ["management", "automation", "strategy", "4x"], descEn: "Deep systems, satisfying efficiency", descZh: "深度策略，优化到完美的快感" },
  { icon: "🔥", en: "Survive and Conquer", zh: "生存挑战", tags: ["survival", "crafting", "colony-sim"], descEn: "Harsh worlds, tough choices", descZh: "残酷世界里的生存之道" },
  { icon: "👫", en: "Play Together", zh: "一起玩更开心", tags: ["multiplayer", "co-op"], descEn: "Better with friends", descZh: "和朋友一起，乐趣翻倍" },
];

function moodGames(allGames: GameEntry[], tags: string[]): GameEntry[] {
  return allGames
    .filter(g => tags.some(t => g.tags.includes(t)))
    .sort((a, b) => b.positiveReviews - a.positiveReviews)
    .slice(0, 4);
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const langKey: Lang = lang === "zh" ? "zh" : "en";
  const isZh = langKey === "zh";
  const allGames = getAllGames();

  // Editor's Picks — games with 95%+ reviews and decent volume
  const vaultPicks = allGames
    .filter(g => {
      const total = g.positiveReviews + g.negativeReviews;
      return total > 5000 && (g.positiveReviews / total) > 0.95;
    })
    .sort((a, b) => b.positiveReviews - a.positiveReviews)
    .slice(0, 6);

  // Trending — just use high-rated games as proxy
  const trending = allGames
    .filter(g => (g.positiveReviews + g.negativeReviews) > 1000)
    .sort((a, b) => (b.positiveReviews + b.negativeReviews) - (a.positiveReviews + a.negativeReviews))
    .slice(0, 6);

  const bestCategories = getAllBestCategories();

  return (
    <>
      {/* Hero — Game Constellation Network */}
      <GameConstellation />

      {/* Search bar — compact, below constellation */}
      <section className="relative border-b border-[var(--border)] bg-[var(--bg)]/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
          <form action={`/${lang}/search`} className="mx-auto max-w-lg">
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 transition-all focus-within:border-[var(--accent)] focus-within:shadow-[0_0_20px_rgba(168,85,247,0.10)]">
              <Search size={18} className="text-[var(--muted)] shrink-0" />
              <input
                name="q" type="text"
                placeholder={isZh ? "搜游戏名、标签、关键词… 比如「轻松的游戏」" : "Search games, tags, keywords… e.g. 「cozy building」"}
                className="flex-1 bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--muted)]/50"
              />
            </div>
          </form>
          <p className="mt-2 text-center text-[10px] text-[var(--muted)]/40">
            {isZh ? "试试：星露谷物语 · RimWorld · 珊瑚岛 · 波西亚时光" : "Try: Stardew Valley · RimWorld · Coral Island · Palworld"}
          </p>
        </div>
      </section>

      {/* Emotional Moods */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 text-center">
          <h2 className="font-display text-xl font-bold tracking-tight">
            {isZh ? "你现在想要什么样的体验？" : "What kind of experience are you looking for?"}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOODS.map((mood) => {
            const games = moodGames(allGames, mood.tags);
            return (
              <Link
                key={mood.en}
                href={`/tag/${mood.tags[0]}`}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-5 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="text-2xl">{mood.icon}</div>
                <h3 className="mt-3 font-semibold text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                  {isZh ? mood.zh : mood.en}
                </h3>
                <p className="mt-1 text-xs text-[var(--muted)]">{isZh ? mood.descZh : mood.descEn}</p>
                {games.length > 0 && (
                  <div className="mt-3 flex -space-x-2">
                    {games.slice(0, 3).map(g => (
                      <img key={g.slug} src={g.coverImage} alt={g.title}
                        className="h-8 w-auto rounded border border-[var(--border)] object-cover shadow-sm" />
                    ))}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[10px] text-[var(--muted)]">
                      +{games.length}
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Vault Picks */}
      {vaultPicks.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--bg)]/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
                {isZh ? "编辑精选" : "VAULT PICKS"}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold tracking-tight">
                {isZh ? "社区公认的好游戏" : "Games the Community Loves"}
              </h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {isZh ? "Steam 好评率 95% 以上，口碑经得起考验" : "95%+ positive reviews on Steam. Community approved."}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vaultPicks.map(g => <GameCardCompact key={g.slug} game={g} lang={langKey} />)}
            </div>
          </div>
        </section>
      )}

      {/* Trending */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8">
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
              {isZh ? "热门发现" : "TRENDING DISCOVERIES"}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight">
              {isZh ? "大家都在玩什么" : "What Players Are Discovering"}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trending.map(g => <GameCardCompact key={g.slug} game={g} lang={langKey} />)}
          </div>
        </div>
      </section>

      {/* Best Games Hub */}
      {bestCategories.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--bg)]/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mb-8 text-center">
              <h2 className="font-display text-xl font-bold tracking-tight">
                {isZh ? "榜单中心" : "Best Games"}
              </h2>
              <p className="mt-1 text-xs text-[var(--muted)]">
                {isZh ? "像游戏杂志一样的精选榜单" : "Curated lists, magazine-style."}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bestCategories.map(cat => (
                <Link key={cat.slug} href={`/best/${cat.slug}`}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-4 transition-all hover:border-[var(--accent)]/50 hover:-translate-y-0.5">
                  <div className="text-lg">🏆</div>
                  <h3 className="mt-2 font-semibold text-sm text-[var(--fg)] group-hover:text-[var(--neon)] transition-colors">
                    {isZh ? cat.titleZh : cat.titleEn}
                  </h3>
                  <p className="mt-1 text-[10px] text-[var(--muted)]">{cat.games.length} {isZh ? "款入选" : "games"}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
