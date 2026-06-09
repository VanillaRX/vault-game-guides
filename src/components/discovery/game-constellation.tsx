"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { getAllGames } from "@/lib/game-data";
import { findRelatedGames, pickRandomCenter } from "@/lib/game-relations";
import type { GameEntry } from "@/lib/types";
import type { RelatedGame } from "@/lib/game-relations";
import { useLang } from "@/components/layout/lang-context";
import { LocalLink as Link } from "@/components/layout/local-link";
import { Shuffle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ORBIT_COUNT = 7;
const TRANSITION_MS = 500;

const LINE_COLORS = [
  "rgba(168,85,247,0.40)",
  "rgba(34,211,160,0.40)",
  "rgba(245,158,11,0.35)",
  "rgba(59,130,246,0.35)",
  "rgba(236,72,153,0.35)",
  "rgba(139,92,246,0.35)",
  "rgba(20,184,166,0.35)",
];

const DRIFT_NAMES = ["drift-a", "drift-b", "drift-c"];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function seedFrac(seed: string, offset = 0): number {
  let h = offset;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 1000 / 1000;
}

/** Organic scattered positions — each node at a unique distance/angle. */
function webPositions(
  slugs: string[],
  containerW: number,
  containerH: number,
): { xPct: number; yPct: number }[] {
  if (containerW === 0 || containerH === 0) return [];
  const cx = 50;
  const cy = 50;

  return slugs.map((slug, i) => {
    // 3 distance bands for organic layering
    const band = i < 2 ? 0 : i < 4 ? 1 : 2;
    const rMin = [0.20, 0.30, 0.40][band];
    const rMax = [0.30, 0.40, 0.50][band];
    const rPct = (rMin + seedFrac(slug, 1) * (rMax - rMin)) * 100;

    const baseAngle = (2 * Math.PI * i) / slugs.length;
    const jitter = (seedFrac(slug, 2) - 0.5) * 1.4;
    const angle = -Math.PI / 2 + baseAngle + jitter;

    return {
      xPct: cx + Math.cos(angle) * rPct,
      yPct: cy + Math.sin(angle) * rPct,
    };
  });
}

/* ------------------------------------------------------------------ */
/*  ConstellationCard                                                   */
/* ------------------------------------------------------------------ */

function ConstellationCard({
  game,
  isCenter,
  onClick,
  disabled,
  href,
  lang,
}: {
  game: GameEntry;
  isCenter: boolean;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  lang: "en" | "zh";
}) {
  const isZh = lang === "zh";
  const title = isZh ? game.zhTitle || game.title : game.title;
  const totalReviews = game.positiveReviews + game.negativeReviews;
  const pct =
    totalReviews > 0
      ? Math.round((game.positiveReviews / totalReviews) * 100)
      : 0;

  const sizeClass = isCenter
    ? "w-[130px] sm:w-[150px] md:w-[170px]"
    : "w-[76px] sm:w-[90px] md:w-[104px]";

  const inner = (
    <div
      className={`
        relative h-full w-full overflow-hidden rounded-xl border
        transition-all duration-500
        ${isCenter
          ? "border-[var(--accent)]/50 shadow-[0_0_36px_rgba(168,85,247,0.22),0_0_72px_rgba(168,85,247,0.08)]"
          : "border-[var(--border)]/50 shadow-md group-hover:shadow-[0_0_20px_rgba(168,85,247,0.18)] group-hover:border-[var(--accent)]/35"
        }
      `}
    >
      <img
        src={game.coverImage}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-[var(--bg)]/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(10,10,20,0.30)_100%)]" />

      {/* Glow ring (center) */}
      {isCenter && (
        <div className="pointer-events-none absolute -inset-[1px] rounded-xl bg-gradient-to-b from-[var(--accent)]/20 via-transparent to-[var(--neon)]/10 opacity-40" />
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5">
        <h3
          className={`font-display font-bold tracking-tight leading-tight line-clamp-2 text-white ${
            isCenter ? "text-[10px] sm:text-[11px]" : "text-[8px] sm:text-[9px]"
          }`}
        >
          {title}
        </h3>
        {totalReviews > 0 && (
          <div className="mt-0.5 flex items-center gap-1">
            <span
              className={`font-mono font-bold text-[var(--neon)] ${
                isCenter ? "text-[9px]" : "text-[7px]"
              }`}
            >
              {pct}%
            </span>
            {isCenter && (
              <span className="text-[8px] text-[var(--muted)]/50">
                {totalReviews.toLocaleString()}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Tags (center only) */}
      {isCenter && game.tags.length > 0 && (
        <div className="absolute top-1.5 left-1.5 flex flex-wrap gap-1">
          {game.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--bg)]/70 backdrop-blur-sm px-1.5 py-0.5 text-[7px] text-[var(--muted)] border border-[var(--border)]/50"
            >
              {t.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  // Center card → link to game detail page
  if (isCenter && href) {
    return (
      <Link
        href={href}
        className={`group relative ${sizeClass} flex-shrink-0 z-20 block overflow-hidden rounded-xl transition-all duration-500`}
        style={{ aspectRatio: "3/4" }}
      >
        {inner}
      </Link>
    );
  }

  // Orbiting card → button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative ${sizeClass} flex-shrink-0 overflow-hidden rounded-xl
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${disabled ? "opacity-30 pointer-events-none" : "cursor-pointer hover:z-30"}
        ${isCenter ? "z-20" : "z-10"}
      `}
      style={{ aspectRatio: "3/4" }}
    >
      {inner}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function GameConstellation() {
  const { lang } = useLang();
  const langKey: "en" | "zh" = lang === "zh" ? "zh" : "en";
  const isZh = langKey === "zh";
  const allGames = useMemo(() => getAllGames(), []);

  // -- State --
  const [centerSlug, setCenterSlug] = useState<string>("");
  const [orbiting, setOrbiting] = useState<RelatedGame[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const orbitRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number; color: string }[]
  >([]);

  // -- Derived --
  const centerGame = useMemo(
    () => allGames.find((g) => g.slug === centerSlug) ?? null,
    [allGames, centerSlug],
  );
  const orbitingGames = useMemo(
    () =>
      orbiting
        .map((r) => allGames.find((g) => g.slug === r.slug))
        .filter(Boolean) as GameEntry[],
    [allGames, orbiting],
  );

  // -- Init --
  const initCenter = useCallback(
    (slug?: string) => {
      const next = slug ?? pickRandomCenter(allGames);
      setCenterSlug(next);
      setOrbiting(findRelatedGames(next, allGames, ORBIT_COUNT));
    },
    [allGames],
  );

  useEffect(() => {
    initCenter();
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -- Handlers --
  const handleOrbitClick = useCallback(
    (slug: string) => {
      if (isTransitioning || slug === centerSlug) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCenterSlug(slug);
        setOrbiting(findRelatedGames(slug, allGames, ORBIT_COUNT));
        setIsTransitioning(false);
      }, TRANSITION_MS);
    },
    [isTransitioning, centerSlug, allGames],
  );

  const handleShuffle = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      initCenter();
      setIsTransitioning(false);
    }, TRANSITION_MS);
  }, [isTransitioning, initCenter]);

  // -- SVG lines --
  const recalcLines = useCallback(() => {
    const container = containerRef.current;
    const centerEl = centerRef.current;
    if (!container || !centerEl) return;
    const cRect = container.getBoundingClientRect();
    const cr = centerEl.getBoundingClientRect();
    const cx = cr.left + cr.width / 2 - cRect.left;
    const cy = cr.top + cr.height / 2 - cRect.top;

    const nl = orbitingGames
      .map((g, i) => {
        const el = orbitRefs.current.get(g.slug);
        if (!el) return null;
        const or = el.getBoundingClientRect();
        return {
          x1: cx,
          y1: cy,
          x2: or.left + or.width / 2 - cRect.left,
          y2: or.top + or.height / 2 - cRect.top,
          color: LINE_COLORS[i % LINE_COLORS.length],
        };
      })
      .filter(Boolean) as typeof lines;
    setLines(nl);
  }, [orbitingGames]);

  useEffect(() => {
    if (!isMounted) return;
    const t = setTimeout(recalcLines, isTransitioning ? TRANSITION_MS + 80 : 80);
    window.addEventListener("resize", recalcLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", recalcLines);
    };
  }, [recalcLines, isTransitioning, isMounted]);

  // -- Container measurement --
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const m = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      setContainerSize({ w: r.width, h: r.height });
    };
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);

  const useWebLayout = containerSize.w >= 640;

  const slots = useMemo(
    () =>
      useWebLayout
        ? webPositions(
            orbitingGames.map((g) => g.slug),
            containerSize.w,
            containerSize.h,
          )
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [useWebLayout, orbitingGames.map((g) => g.slug).join(","), containerSize.w, containerSize.h],
  );

  // -- Loading --
  if (!isMounted || !centerGame) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,160,0.03)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(rgba(168,85,247,0.6) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 text-center sm:pt-12">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--neon)]">
          {isZh ? "游戏关联网络" : "GAME CONSTELLATION"}
        </p>
        <h2 className="mt-1.5 font-display text-lg font-bold tracking-tight sm:text-xl">
          {isZh ? "探索游戏之间的隐藏联系" : "Discover Hidden Connections Between Games"}
        </h2>
        <p className="mt-1 text-[10px] text-[var(--muted)] sm:text-xs">
          {isZh ? "点击节点展开关联网络 · 点中心卡片查看详情" : "Click nodes to expand · click center for details"}
        </p>
      </div>

      {/* Constellation */}
      <div
        ref={containerRef}
        className="relative mx-auto max-w-5xl px-2 py-6 sm:py-10 md:py-14"
        style={{ minHeight: containerSize.w >= 1024 ? 560 : containerSize.w >= 640 ? 440 : "auto" }}
      >
        {/* SVG lines */}
        <svg className="pointer-events-none absolute inset-0 z-10" width="100%" height="100%">
          <defs>
            <filter id="const-glow">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {!isTransitioning &&
            lines.map((l, i) => (
              <g key={i} filter="url(#const-glow)">
                <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                  stroke={l.color} strokeWidth={1.5} strokeDasharray="5 6" opacity={0.30} />
                <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                  stroke={l.color} strokeWidth={0.6} opacity={0.55} />
              </g>
            ))}
        </svg>

        {/* ---- Web layout (tablet+) ---- */}
        {useWebLayout ? (
          <div className="relative" style={{ height: containerSize.h || 500 }}>
            {/* Center — navigable link */}
            <div
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              ref={centerRef}
            >
              <ConstellationCard
                game={centerGame}
                isCenter
                href={`/game/${centerGame.slug}`}
                lang={langKey}
              />
            </div>

            {/* Orbiting — scattered + drifting */}
            {orbitingGames.map((game, i) => {
              const slot = slots[i];
              if (!slot) return null;
              const driftName = DRIFT_NAMES[i % DRIFT_NAMES.length];
              const dur = 3.5 + seedFrac(game.slug, 3) * 4; // 3.5–7.5s
              const delay = seedFrac(game.slug, 4) * 3;      // 0–3s
              return (
                <div
                  key={game.slug}
                  className="absolute z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    left: `${slot.xPct}%`,
                    top: `${slot.yPct}%`,
                    transform: "translate(-50%, -50%)",
                    opacity: isTransitioning ? 0 : 1,
                    animation: `${driftName} ${dur}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                  ref={(el) => {
                    if (el) orbitRefs.current.set(game.slug, el);
                    else orbitRefs.current.delete(game.slug);
                  }}
                >
                  <ConstellationCard
                    game={game}
                    isCenter={false}
                    onClick={() => handleOrbitClick(game.slug)}
                    disabled={isTransitioning}
                    lang={langKey}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* ---- Mobile ---- */
          <div className="flex flex-col items-center gap-4">
            <div ref={centerRef}>
              <ConstellationCard
                game={centerGame}
                isCenter
                href={`/game/${centerGame.slug}`}
                lang={langKey}
              />
            </div>
            <div
              className="flex gap-2 overflow-x-auto pb-2 max-w-full snap-x snap-mandatory px-1"
              style={{ scrollbarWidth: "none" }}
            >
              {orbitingGames.map((game) => (
                <div
                  key={game.slug}
                  className="snap-center flex-shrink-0 transition-all duration-500"
                  style={{ opacity: isTransitioning ? 0 : 1 }}
                  ref={(el) => {
                    if (el) orbitRefs.current.set(game.slug, el);
                    else orbitRefs.current.delete(game.slug);
                  }}
                >
                  <ConstellationCard
                    game={game}
                    isCenter={false}
                    onClick={() => handleOrbitClick(game.slug)}
                    disabled={isTransitioning}
                    lang={langKey}
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[var(--muted)]/40">
              {isZh ? "← 滑动浏览 →" : "← swipe →"}
            </p>
          </div>
        )}

        {/* Shuffle button */}
        <div className="absolute bottom-2 right-2 z-30 sm:bottom-4 sm:right-4">
          <button
            onClick={handleShuffle}
            disabled={isTransitioning}
            className="group flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm px-3 py-1.5 text-[11px] text-[var(--muted)] transition-all hover:border-[var(--accent)]/50 hover:text-[var(--fg)] hover:shadow-lg disabled:opacity-40"
          >
            <Shuffle
              size={12}
              className={`transition-transform duration-500 group-hover:rotate-180 ${isTransitioning ? "animate-spin" : ""}`}
            />
            <span className="hidden sm:inline">{isZh ? "换一批" : "Shuffle"}</span>
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
