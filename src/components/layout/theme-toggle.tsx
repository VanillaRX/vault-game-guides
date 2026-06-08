"use client";

import { useState, useEffect } from "react";

const KEY = "vault-theme";

export function useTheme() {
  const [cozy, setCozy] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "cozy") {
      setCozy(true);
      document.documentElement.classList.add("cozy");
    }
  }, []);

  const toggle = () => {
    const next = !cozy;
    setCozy(next);
    localStorage.setItem(KEY, next ? "cozy" : "dark");
    if (next) {
      document.documentElement.classList.add("cozy");
    } else {
      document.documentElement.classList.remove("cozy");
    }
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
