"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useLang } from "@/components/layout/lang-context";
import { GameCardCompact } from "@/components/discovery/game-card-compact";
import type { GameEntry, TagEntry } from "@/lib/types";

import gamesIndex from "@/data/games/index.json";
import tagsIndex from "@/data/tags/index.json";

const GAMES: GameEntry[] = (gamesIndex as { games: GameEntry[] }).games ?? [];
const TAGS: Record<string, TagEntry> = tagsIndex as Record<string, TagEntry>;

/**
 * Split query into tokens.
 * Chinese: split into 2-char bigrams + individual chars for partial matching.
 * English: split by whitespace.
 */
function tokenize(q: string): string[] {
  const tokens: string[] = [];
  // Split by whitespace/comma
  const parts = q.split(/[\s,，、]+/).filter(Boolean);
  for (const part of parts) {
    tokens.push(part);
    // For CJK text, also add 2-character sliding windows for fuzzy matching
    if (/[一-鿿]/.test(part) && part.length >= 2) {
      for (let i = 0; i < part.length - 1; i++) {
        tokens.push(part.slice(i, i + 2));
      }
      // Also add individual characters for single-char matches
      for (const ch of part) {
        tokens.push(ch);
      }
    }
  }
  return [...new Set(tokens)];
}

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { lang } = useLang();
  const isZh = lang === "zh";

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [results, setResults] = useState<GameEntry[]>([]);
  const [matchedTagSlugs, setMatchedTagSlugs] = useState<string[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setMatchedTagSlugs([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const tokens = tokenize(q);
    const scored = new Map<string, { game: GameEntry; score: number }>();
    const tagMatches = new Set<string>();

    const addScore = (game: GameEntry, s: number) => {
      const cur = scored.get(game.slug);
      if (!cur || cur.score < s) scored.set(game.slug, { game, score: s });
    };

    for (const game of GAMES) {
      // Build search corpus for this game (both languages always searched)
      const corpus = [
        { text: game.title.toLowerCase(), weight: 30 },
        { text: (game.zhTitle || "").toLowerCase(), weight: 30 },
        { text: game.shortDescription.toLowerCase(), weight: 15 },
        { text: (game.zhShortDescription || "").toLowerCase(), weight: 15 },
        { text: game.description.toLowerCase(), weight: 10 },
        { text: (game.zhDescription || "").toLowerCase(), weight: 10 },
        { text: game.genres.join(" ").toLowerCase(), weight: 20 },
        { text: game.tags.join(" ").toLowerCase(), weight: 20 },
        { text: game.steamTags?.join(" ")?.toLowerCase() || "", weight: 10 },
        { text: game.developer?.toLowerCase() || "", weight: 5 },
      ];

      let score = 0;

      // Full query match (highest weight)
      for (const { text, weight } of corpus) {
        if (text.includes(q)) {
          score += weight;
        }
      }

      // Individual token matches
      for (const tok of tokens) {
        if (tok.length < 1) continue;
        for (const { text, weight } of corpus) {
          if (text.includes(tok)) {
            score += Math.floor(weight * 0.6);
          }
        }

        // Also match against tag titles/descriptions
        for (const [slug, tag] of Object.entries(TAGS)) {
          const tagText = [
            tag.titleEn.toLowerCase(),
            tag.titleZh.toLowerCase(),
            tag.descriptionEn.toLowerCase(),
            tag.descriptionZh.toLowerCase(),
          ].join(" ");
          if (tagText.includes(tok)) {
            tagMatches.add(slug);
            if (game.tags.includes(slug)) {
              score += 25;
            }
          }
        }
      }

      // Bonus for matching tag set
      for (const ts of tagMatches) {
        if (game.tags.includes(ts)) addScore(game, Math.max(score, 50));
      }

      if (score > 0) addScore(game, score);
    }

    setMatchedTagSlugs([...tagMatches]);

    const sorted = [...scored.values()]
      .sort((a, b) => b.score - a.score)
      .map((e) => e.game);

    setResults(sorted);
  }, [query]);

  const matchedTags = matchedTagSlugs
    .map((s) => TAGS[s])
    .filter(Boolean) as TagEntry[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <h1 className="font-display text-2xl font-bold tracking-tight">
        {isZh ? "搜索游戏" : "Search Games"}
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim())
            router.push(`/${lang}/search?q=${encodeURIComponent(query.trim())}`);
        }}
        className="mt-6"
      >
        <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 transition-colors focus-within:border-[var(--accent)]">
          <Search size={18} className="text-[var(--muted)] shrink-0" />
          <input
            name="q"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isZh
                ? '搜游戏名、标签、关键词… 比如「轻松的游戏」'
                : 'Search by name, tag, keyword… e.g. "relaxing games"'
            }
            className="flex-1 bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--muted)]/50"
            autoFocus
          />
        </div>
      </form>

      {/* Quick tag chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.values(TAGS)
          .slice(0, 8)
          .map((tag) => (
            <button
              key={tag.slug}
              onClick={() => setQuery(isZh ? tag.titleZh : tag.titleEn)}
              className="rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-2.5 py-1 text-[10px] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {isZh ? tag.titleZh : tag.titleEn}
            </button>
          ))}
      </div>

      {/* Matched tag info */}
      {matchedTags.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-2">
          <span className="text-[10px] text-[var(--muted)]">
            {isZh ? "匹配标签：" : "Matched tags:"}
          </span>
          {matchedTags.map((tag) => (
            <span
              key={tag.slug}
              className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-[var(--accent)]/15 px-2 py-0.5 text-[10px] font-medium text-[var(--accent)] hover:bg-[var(--accent)]/25 transition-colors"
              onClick={() => router.push(`/${lang}/tag/${tag.slug}`)}
            >
              {isZh ? tag.titleZh : tag.titleEn}
            </span>
          ))}
        </div>
      )}

      {/* Results */}
      <div className="mt-8 space-y-3">
        {query.trim() ? (
          results.length > 0 ? (
            <>
              <p className="text-xs text-[var(--muted)]">
                {results.length} {isZh ? "个结果" : "results"}
              </p>
              {results.map((g) => (
                <GameCardCompact key={g.slug} game={g} lang={lang} />
              ))}
            </>
          ) : (
            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-10 text-center">
              <p className="text-sm text-[var(--muted)]">
                {isZh
                  ? `没找到与"${query}"相关的游戏`
                  : `No games found for "${query}"`}
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]/60">
                {isZh
                  ? "试试搜：农场、策略、轻松、合作、城市建造、模拟经营…"
                  : "Try: farming, strategy, cozy, co-op, city builder, simulation…"}
              </p>
            </div>
          )
        ) : (
          <p className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-10 text-center text-sm text-[var(--muted)]">
            {isZh
              ? "输入游戏名、标签或关键词开始搜索"
              : "Type a game name, tag, or keyword to search"}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="p-20 text-center text-[var(--muted)]">Loading...</div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
