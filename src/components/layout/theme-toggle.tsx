"use client";

import { useState, useEffect } from "react";

const KEY = "vault-theme";

const COZY_VARS: Record<string, string> = {
  "--bg": "#faf7f2",
  "--fg": "#3d2e28",
  "--accent": "#e8785a",
  "--neon": "#5ba675",
  "--amber": "#d4a853",
  "--card": "#ffffff",
  "--border": "#e8ddd0",
  "--muted": "#9b8c80",
};

const DARK_VARS: Record<string, string> = {
  "--bg": "#0a0a14",
  "--fg": "#e4e4ec",
  "--accent": "#a855f7",
  "--neon": "#22d3a0",
  "--amber": "#f59e0b",
  "--card": "#12122a",
  "--border": "#1e1e3a",
  "--muted": "#6b6b8a",
};

function applyTheme(cozy: boolean) {
  const vars = cozy ? COZY_VARS : DARK_VARS;
  const root = document.documentElement;
  for (const [k, v] of Object.entries(vars)) {
    root.style.setProperty(k, v);
  }
}

export function useTheme() {
  const [cozy, setCozy] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    const isCozy = stored === "cozy";
    setCozy(isCozy);
    applyTheme(isCozy);
  }, []);

  const toggle = () => {
    const next = !cozy;
    setCozy(next);
    localStorage.setItem(KEY, next ? "cozy" : "dark");
    applyTheme(next);
  };

  return { cozy, toggle };
}

export function ThemeToggle() {
  const { cozy, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="rounded-lg border border-[var(--border)] px-2 py-1 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      title={cozy ? "Switch to dark theme" : "Switch to cozy theme"}
    >
      {cozy ? "☀️" : "🌙"}
    </button>
  );
}
