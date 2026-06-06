"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-lg font-bold tracking-wider text-[var(--accent)] group-hover:animate-glow">
            VAULT
          </span>
          <span className="font-display text-lg font-bold tracking-wider text-[var(--neon)]">
            GUIDES
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--fg)]/70 transition-colors hover:text-[var(--neon)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="rounded-lg border border-[var(--border)] p-2 text-[var(--fg)]/60 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-[var(--border)] p-2 text-[var(--fg)]/60 transition-colors hover:text-[var(--neon)] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--fg)]/70 transition-colors hover:bg-[var(--card)] hover:text-[var(--neon)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
