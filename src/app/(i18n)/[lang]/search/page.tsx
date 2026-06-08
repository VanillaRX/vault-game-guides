"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { GAMES, GUIDES } from "@/lib/data";
import { useLang } from "@/components/layout/lang-context";

export default function SearchPage() {
  const { t } = useLang();
  const [query, setQuery] = useState("");

  const filteredGames = query
    ? GAMES.filter(
        (g) =>
          g.title.toLowerCase().includes(query.toLowerCase()) ||
          g.shortDescription.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  const filteredGuides = query
    ? GUIDES.filter(
        (g) =>
          g.title.toLowerCase().includes(query.toLowerCase()) ||
          g.description.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  const hasResults = filteredGames.length > 0 || filteredGuides.length > 0;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-bold tracking-tight">{t("nav.search")}</h1>

      <div className="mt-8">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] py-3.5 pl-12 pr-4 text-sm text-[var(--fg)] placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] focus:outline-none"
            autoFocus
          />
        </div>
      </div>

      {query && (
        <div className="mt-8">
          {hasResults ? (
            <div className="space-y-6">
              {filteredGames.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {t("nav.games")} ({filteredGames.length})
                  </h2>
                  <div className="mt-3 space-y-2">
                    {filteredGames.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/games/${g.slug}`}
                        className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--accent)]"
                      >
                        <p className="font-medium">{g.title}</p>
                        <p className="mt-1 text-xs text-[var(--muted)]">{g.shortDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {filteredGuides.length > 0 && (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {t("nav.guides")} ({filteredGuides.length})
                  </h2>
                  <div className="mt-3 space-y-2">
                    {filteredGuides.map((g) => (
                      <Link
                        key={`${g.gameSlug}-${g.slug}`}
                        href={`/games/${g.gameSlug}/guides/${g.slug}`}
                        className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--accent)]"
                      >
                        <p className="font-medium">{g.title}</p>
                        <p className="mt-1 text-xs text-[var(--muted)]">
                          {g.description.slice(0, 120)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-[var(--muted)]">
              {t("search.noResults")} &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      )}
    </div>
  );
}
