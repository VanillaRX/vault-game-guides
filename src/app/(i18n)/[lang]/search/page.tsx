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

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { lang } = useLang();
  const isZh = lang === "zh";

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [results, setResults] = useState<GameEntry[]>([]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(GAMES.filter((g) =>
      g.title.toLowerCase().includes(q) ||
      (g.zhTitle || "").includes(q) ||
      g.tags.some((t) => t.includes(q))
    ));
  }, [query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <h1 className="font-display text-2xl font-bold tracking-tight">{isZh ? "搜索游戏" : "Search Games"}</h1>
      <form onSubmit={(e) => { e.preventDefault(); if (query.trim()) router.push(`/${lang}/search?q=${encodeURIComponent(query.trim())}`); }} className="mt-6">
        <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 transition-colors focus-within:border-[var(--accent)]">
          <Search size={18} className="text-[var(--muted)] shrink-0" />
          <input name="q" type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder={isZh ? "搜游戏名、标签..." : "Search by name, tag..."}
            className="flex-1 bg-transparent text-sm text-[var(--fg)] outline-none placeholder:text-[var(--muted)]/50" autoFocus />
        </div>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.values(TAGS).slice(0, 8).map((tag) => (
          <button key={tag.slug} onClick={() => setQuery(tag.slug.replace(/-/g, " "))}
            className="rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-2.5 py-1 text-[10px] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]">
            {isZh ? tag.titleZh : tag.titleEn}
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-3">
        {query.trim() ? (
          results.length > 0 ? (
            <>
              <p className="text-xs text-[var(--muted)]">{results.length} {isZh ? "个结果" : "results"}</p>
              {results.map((g) => <GameCardCompact key={g.slug} game={g} lang={lang} />)}
            </>
          ) : (
            <p className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-10 text-center text-sm text-[var(--muted)]">
              {isZh ? `没找到与"${query}"相关的游戏` : `No games found for "${query}"`}
            </p>
          )
        ) : (
          <p className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)]/30 p-10 text-center text-sm text-[var(--muted)]">
            {isZh ? "输入游戏名或标签开始搜索" : "Type a game name or tag to search"}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-[var(--muted)]">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
