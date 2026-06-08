"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useLang } from "@/components/layout/lang-context";

/** Strip /en/ or /zh/ prefix from pathname. Returns path without lang prefix. */
function stripLangPrefix(pathname: string): string {
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  if (pathname.startsWith("/zh/")) return pathname.slice(3);
  if (pathname === "/en" || pathname === "/zh") return "";
  return pathname;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLang();
  const pathname = usePathname();

  const pathWithoutLang = stripLangPrefix(pathname);
  const zhPath = `/zh${pathWithoutLang ? `/${pathWithoutLang}` : ""}`;
  const enPath = `/en${pathWithoutLang ? `/${pathWithoutLang}` : ""}`;

  const NAV_LINKS = [
    { href: `/${lang}`, label: t("nav.home") },
    { href: `/${lang}/games`, label: t("nav.games") },
    { href: `/${lang}/guides`, label: t("nav.guides") },
    { href: `/${lang}/about`, label: t("nav.about") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <span className="font-display text-lg font-bold tracking-wider text-[var(--accent)] group-hover:animate-glow">
            VAULT
          </span>
          <span className="font-display text-lg font-bold tracking-wider text-[var(--neon)]">
            GUIDES
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
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

        <div className="flex items-center gap-2">
          {/* Language switcher — URL-based navigation */}
          <div className="flex items-center rounded-lg border border-[var(--border)] overflow-hidden">
            <Link
              href={enPath}
              className={`px-2 py-1.5 text-[11px] font-semibold transition-colors ${
                lang === "en"
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              EN
            </Link>
            <Link
              href={zhPath}
              className={`px-2 py-1.5 text-[11px] font-semibold transition-colors ${
                lang === "zh"
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--fg)]"
              }`}
            >
              中
            </Link>
          </div>

          <Link
            href={`/${lang}/search`}
            className="rounded-lg border border-[var(--border)] p-2 text-[var(--fg)]/60 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label={t("nav.search")}
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
