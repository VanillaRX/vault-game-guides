import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllGames, getGameBySlug } from "@/lib/game-data";
import type { Lang } from "@/lib/i18n";
import type { GameEntry } from "@/lib/types";
import { LocalLink as Link } from "@/components/layout/local-link";
import { SteamReviewFeed } from "@/components/discovery/steam-review-feed";

interface Props { params: Promise<{ lang: string; slug: string }>; }

export async function generateStaticParams() {
  return getAllGames().flatMap((g) => [{ lang: "en", slug: g.slug }, { lang: "zh", slug: g.slug }]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Not Found" };
  const title = lang === "zh" ? game.zhTitle || game.title : game.title;
  return { title, description: game.shortDescription };
}

// -- Why It's Fun: per-tag highlight descriptions --
function getHighlights(game: GameEntry, lang: Lang): string[] {
  const isZh = lang === "zh";
  const highlights: string[] = [];
  const t = game.tags;

  if (t.includes("survival")) highlights.push(isZh ? "物资紧缺、环境严酷，每一步决策都可能致命——不是你能不能赢，是你能活多久" : "Scarce resources, harsh environments, every decision can be fatal — it's not about winning, it's about how long you survive");
  if (t.includes("colony-sim")) highlights.push(isZh ? "每个角色都有独立的故事、性格和需求，看着你的殖民地从几个人发展成繁荣社区" : "Every character has their own story, personality and needs — watch your colony grow from a handful of settlers into a thriving community");
  if (t.includes("automation")) highlights.push(isZh ? "从手动操作到全自动流水线，那种'我终于把它优化到完美运行'的成就感让人上瘾" : "From manual work to fully automated production lines — the satisfaction of 'I finally optimized it to perfection' is addictive");
  if (t.includes("city-builder")) highlights.push(isZh ? "从一片荒地到繁华都市，看着道路自然形成、建筑有机生长，每座城市都是你的作品" : "From barren land to a bustling city — watch roads form naturally, buildings grow organically, each city is your creation");
  if (t.includes("farming")) highlights.push(isZh ? "春种秋收的节奏感、逐步扩大的农场版图、与村民们建立羁绊——一种让人停不下来的温柔循环" : "The rhythm of planting and harvesting, expanding your farmland, building relationships — a gentle loop you can't stop");
  if (t.includes("cozy")) highlights.push(isZh ? "没有压力、没有失败惩罚——纯粹放松的游戏体验，适合下班后治愈一天的疲惫" : "No pressure, no fail states — pure relaxation, perfect for unwinding after a long day");
  if (t.includes("crafting")) highlights.push(isZh ? "庞大的制作树——从树枝和石头开始，一步步做出复杂的机器和装备，动手的快乐" : "Massive crafting trees — start with sticks and stones, work your way up to complex machines and gear. The joy of making things yourself");
  if (t.includes("open-world")) highlights.push(isZh ? "广阔的世界任你探索——没有固定的路线，处处藏着惊喜和危险，好奇心是最好的向导" : "A vast world to explore — no fixed path, surprises and dangers everywhere, curiosity is your best guide");
  if (t.includes("multiplayer") || t.includes("co-op")) highlights.push(isZh ? "和朋友一起玩乐趣翻倍——分工合作、互相救场，或者暗中使坏，这才是真正的快乐源泉" : "Twice the fun with friends — divide and conquer, save each other, or secretly sabotage. This is where the real joy comes from");
  if (t.includes("rpg")) highlights.push(isZh ? "深度的角色养成和装备系统——每个选择都塑造独一无二的游戏体验，你的角色由你定义" : "Deep character progression and gear systems — every choice shapes a unique experience, your character is defined by you");

  if (highlights.length === 0)
    highlights.push(isZh ? "玩法深度出人意料——看起来简单，实际上藏着大量的策略和细节等待发现" : "Surprisingly deep gameplay — looks simple but hides layers of strategy and detail waiting to be discovered");

  return highlights.slice(0, 4);
}

// -- Bottom floating Steam bar --
function SteamFloatBar({ game, lang }: { game: GameEntry; lang: Lang }) {
  if (!game.steamAppId) return null;
  const isZh = lang === "zh";
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {game.coverImage && <img src={game.coverImage} alt="" className="h-8 w-auto rounded object-cover" />}
          <div>
            <div className="text-xs font-semibold text-[var(--fg)]">{lang === "zh" ? game.zhTitle || game.title : game.title}</div>
            {game.positiveReviews > 0 && (
              <div className="text-[10px] text-[var(--neon)]">{Math.round(game.positiveReviews / (game.positiveReviews + game.negativeReviews || 1) * 100)}% {isZh ? "好评" : "positive"}</div>
            )}
          </div>
        </div>
        <a href={`https://store.steampowered.com/app/${game.steamAppId}`} target="_blank" rel="noopener noreferrer"
          className="rounded-lg bg-gradient-to-r from-[#1a3a5c] to-[#2a5a8c] px-5 py-2 text-xs font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
          {isZh ? "在 Steam 查看" : "View on Steam"} →
        </a>
      </div>
    </div>
  );
}

export default async function GameDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const langKey: Lang = lang === "zh" ? "zh" : "en";
  const isZh = langKey === "zh";
  const title = isZh ? (game.zhTitle || game.title) : game.title;
  const desc = isZh ? (game.zhDescription || game.description) : game.description;
  const highlights = getHighlights(game, langKey);
  const screenshots = game.screenshots || [];
  const totalReviews = game.positiveReviews + game.negativeReviews;
  const reviewPct = totalReviews > 0 ? Math.round((game.positiveReviews / totalReviews) * 100) : 0;
  const genreZh: Record<string, string> = { Simulation: "模拟", Strategy: "策略", Indie: "独立", RPG: "角色扮演", Action: "动作", Adventure: "冒险", Casual: "休闲", "Early Access": "抢先体验", "Free To Play": "免费", "Massively Multiplayer": "大型多人在线", Racing: "竞速", Sports: "体育" };
  const tagZh: Record<string, string> = { farming: "农场", cozy: "休闲治愈", "city-builder": "城市建造", management: "管理经营", "colony-sim": "殖民模拟", survival: "生存挑战", crafting: "制作合成", automation: "自动化", "life-sim": "生活模拟", rpg: "角色扮演", strategy: "策略", simulation: "模拟", "open-world": "开放世界", multiplayer: "多人联机", "co-op": "合作", "single-player": "单人", sandbox: "沙盒", creative: "创意建造", roguelike: "Roguelite", "4x": "4X策略", "turn-based": "回合制", mmo: "大型多人在线" };
  const genreLabel = game.genres.slice(0, 3).map(g => isZh ? (genreZh[g] || g) : g).join(" · ");
  const tagsLabel = game.tags.slice(0, 4).map(t => isZh ? (tagZh[t] || t) : t.replace(/-/g, " ")).join(" · ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--neon)]">Home</Link>
        <span>/</span>
        <span className="text-[var(--fg)]/80">{title}</span>
      </nav>

      {/* Hero */}
      <header className="mb-8">
        {game.headerImage && (
          <img src={game.headerImage} alt={title} className="mb-6 w-full rounded-2xl object-cover shadow-lg" />
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {isZh ? (game.zhShortDescription || game.shortDescription) : game.shortDescription}
        </p>
      </header>

      {/* 1. Quick Overview cards */}
      <section>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-[var(--accent)]/10 p-4">
            <div className="text-[10px] uppercase tracking-wide text-[var(--accent)]">{isZh ? "类型" : "Genre"}</div>
            <div className="mt-1 text-sm font-medium text-[var(--fg)]">{genreLabel || (isZh ? "模拟经营" : "Simulation")}</div>
          </div>
          <div className="rounded-xl bg-[var(--accent)]/10 p-4">
            <div className="text-[10px] uppercase tracking-wide text-[var(--accent)]">{isZh ? "玩法" : "Gameplay"}</div>
            <div className="mt-1 text-sm font-medium text-[var(--fg)]">{tagsLabel || (isZh ? "策略模拟" : "Strategy Sim")}</div>
          </div>
          <div className="rounded-xl bg-[var(--accent)]/10 p-4">
            <div className="text-[10px] uppercase tracking-wide text-[var(--accent)]">{isZh ? "节奏" : "Pacing"}</div>
            <div className="mt-1 text-sm font-medium text-[var(--fg)]">
              {game.tags.includes("cozy") ? (isZh ? "轻松休闲" : "Relaxed") :
               game.tags.includes("survival") ? (isZh ? "紧张高压" : "Intense") :
               game.tags.includes("strategy") || game.tags.includes("4x") ? (isZh ? "深度慢节奏" : "Deep & Slow") :
               (isZh ? "中度节奏" : "Moderate")}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Game Description */}
      {desc && (
        <section className="mt-8">
          <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">
            {isZh ? "游戏简介" : "About"}
          </h2>
          <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-5">
            <p className="text-sm leading-relaxed text-[var(--fg)]/80">{desc}</p>
          </div>
        </section>
      )}

      {/* 3. Why It's Fun */}
      <section className="mt-8">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">
          {isZh ? "好玩在哪里" : "Why It's Fun"}
        </h2>
        <div className="mt-3 space-y-3">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <span className="mt-0.5 shrink-0 text-sm">
                {["🎯","🔥","⚡","💡"][i]}
              </span>
              <p className="text-sm leading-relaxed text-[var(--fg)]/80">{h}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Screenshots */}
      {screenshots.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-bold tracking-tight text-[var(--neon)]">
            {isZh ? "游戏截图" : "Screenshots"}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {screenshots.slice(0, 4).map((url, i) => (
              <img key={i} src={url} alt={`${title} ${i + 1}`} className="rounded-xl border border-[var(--border)] object-cover w-full" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {/* 5. Steam Reviews — always show if we have data */}
      {totalReviews > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 font-display text-lg font-bold tracking-tight text-[var(--neon)]">
            {isZh ? "Steam 评价" : "Steam Reviews"}
          </h2>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-5">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--neon)]">{reviewPct}%</div>
                <div className="text-[10px] text-[var(--muted)]">{isZh ? "好评率" : "Positive"}</div>
              </div>
              <div className="flex-1">
                <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--bg)]">
                  <div className="h-full rounded-full bg-[var(--neon)]" style={{ width: `${reviewPct}%` }} />
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-[var(--muted)]">
                  <span>{game.positiveReviews.toLocaleString()} {isZh ? "好评" : "positive"}</span>
                  <span>{totalReviews.toLocaleString()} {isZh ? "总计" : "total"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Game Info + Similar */}
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-5">
          <h3 className="font-display text-xs font-bold tracking-wide text-[var(--muted)]">{isZh ? "游戏信息" : "GAME INFO"}</h3>
          <dl className="mt-3 space-y-2">
            {game.developer && (
              <div className="flex justify-between text-xs"><dt className="text-[var(--muted)]/60">{isZh ? "开发商" : "Developer"}</dt><dd className="text-[var(--fg)]">{game.developer}</dd></div>
            )}
            {game.publisher && game.publisher !== game.developer && (
              <div className="flex justify-between text-xs"><dt className="text-[var(--muted)]/60">{isZh ? "发行商" : "Publisher"}</dt><dd className="text-[var(--fg)]">{game.publisher}</dd></div>
            )}
            {game.releaseDate && (
              <div className="flex justify-between text-xs"><dt className="text-[var(--muted)]/60">{isZh ? "发售" : "Released"}</dt><dd className="text-[var(--fg)]">{game.releaseDate}</dd></div>
            )}
            <div className="flex justify-between text-xs"><dt className="text-[var(--muted)]/60">{isZh ? "中文" : "Chinese"}</dt><dd className={game.supportsChinese ? "text-[var(--neon)]" : "text-[var(--muted)]"}>{game.supportsChinese ? "✓" : "—"}</dd></div>
            <div className="flex justify-between text-xs"><dt className="text-[var(--muted)]/60">{isZh ? "联机" : "Multiplayer"}</dt><dd className={game.supportsMultiplayer || game.supportsCoop ? "text-[var(--neon)]" : "text-[var(--muted)]"}>{game.supportsMultiplayer || game.supportsCoop ? "✓" : "—"}</dd></div>
          </dl>
          {game.genres.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">{game.genres.map(g => <span key={g} className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] text-[var(--muted)]">{g}</span>)}</div>
          )}
        </div>
        <div className="lg:col-span-2">
          {game.similarGames.length > 0 && (
            <section>
              <h2 className="mb-3 font-display text-lg font-bold tracking-tight text-[var(--neon)]">{isZh ? "类似游戏" : "Similar Games"}</h2>
              <div className="flex flex-wrap gap-2">
                {game.similarGames.slice(0, 8).map(s => (
                  <Link key={s} href={`/game/${s}`} className="rounded-lg border border-[var(--border)] bg-[var(--card)]/50 px-3 py-1.5 text-xs text-[var(--fg)]/70 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    {s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                ))}
              </div>
              <Link href={`/games-like/${slug}`} className="mt-3 inline-block text-xs font-medium text-[var(--accent)] hover:underline">
                {isZh ? "更多类似游戏 →" : "More like this →"}
              </Link>
            </section>
          )}
        </div>
      </div>

      {/* 7. Real Steam Reviews */}
      {game.topReviews && game.topReviews.length > 0 && (
        <div className="mt-8">
          <SteamReviewFeed reviews={game.topReviews} lang={langKey} />
        </div>
      )}

      {/* Floating Steam bar */}
      <SteamFloatBar game={game} lang={langKey} />
      {/* Spacer for floating bar */}
      <div className="h-16" />
    </div>
  );
}
