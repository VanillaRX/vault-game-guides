import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Brand */}
          <div>
            <span className="font-display text-sm font-bold tracking-wider text-[var(--accent)]">
              VAULT
            </span>
            <span className="font-display text-sm font-bold tracking-wider text-[var(--neon)]">
              GUIDES
            </span>
            <p className="mt-1 text-xs text-[var(--muted)]">
              Deep guides for indie games worth mastering. No fluff, just the
              strats.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--neon)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)]/60">
          &copy; {new Date().getFullYear()} Vault Guides. All game names and
          images are property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
