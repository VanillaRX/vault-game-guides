"use client";

import Link from "next/link";
import { GameCard } from "@/components/game/game-card";
import { GAMES } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/components/layout/lang-context";

export default function GamesPage() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10">
        <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
          {t("page.games.eyebrow")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">
          {t("page.games.title")}
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
          {t("page.games.sub")}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((game, i) => (
          <GameCard key={game.slug} {...game} index={i} />
        ))}
      </div>
    </div>
  );
}
