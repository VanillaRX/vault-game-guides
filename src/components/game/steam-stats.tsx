"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface SteamStatsProps {
  appId: number;
}

export function SteamStats({ appId }: SteamStatsProps) {
  const [players, setPlayers] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data?.response?.player_count !== undefined) {
          setPlayers(data.response.player_count);
        } else if (!cancelled) {
          setError(true);
        }
      })
      .catch(() => { if (!cancelled) setError(true); });
    return () => { cancelled = true; };
  }, [appId]);

  if (error || players === null) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]/50">
        <Users size={12} />
        <span>—</span>
      </div>
    );
  }

  const formatted = players.toLocaleString();

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--neon)]/30 bg-[var(--neon)]/5 px-3 py-1 text-xs text-[var(--neon)]">
      <Users size={12} />
      <span>{formatted} playing now</span>
    </div>
  );
}
