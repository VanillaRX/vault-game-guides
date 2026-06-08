"use client";

import { useState } from "react";

interface Props {
  screenshots: string[];
  title: string;
}

export function GameScreenshots({ screenshots, title }: Props) {
  const [expanded, setExpanded] = useState(false);

  if (screenshots.length === 0) return null;

  const visible = expanded ? screenshots : screenshots.slice(0, 3);
  const hasMore = screenshots.length > 3;

  return (
    <div className="space-y-3">
      <div className={`grid gap-3 ${visible.length >= 3 ? "grid-cols-3" : `grid-cols-${visible.length}`}`}>
        {visible.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`${title} screenshot ${i + 1}`}
            className="rounded-lg border border-[var(--border)] object-cover w-full"
            loading="lazy"
          />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[var(--accent)] hover:underline"
        >
          {expanded ? "Show less" : `Show all ${screenshots.length} screenshots`}
        </button>
      )}
    </div>
  );
}
