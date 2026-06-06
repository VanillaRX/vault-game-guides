import Link from "next/link";
import type { Metadata } from "next";
import { GameCard } from "@/components/game/game-card";
import { GAMES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Games",
  description:
    "Browse in-depth guides and walkthroughs for indie games. Hollow Knight, Hades 2, Palworld, Stardew Valley, and more.",
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs tracking-[0.15em] text-[var(--neon)]">
          THE VAULT
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">
          All Games
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
          Every game we cover, from metroidvania classics to roguelike hits.
          Pick a game, find your guide, get back to playing.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((game, i) => (
          <GameCard key={game.slug} {...game} index={i} />
        ))}
      </div>
    </div>
  );
}
