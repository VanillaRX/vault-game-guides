import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vault Guides.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-bold tracking-tight">Contact</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
        <p>
          Found wrong numbers in a guide? Want a game covered? Just want to say thanks? I read
          everything.
        </p>
        <p>
          Email:{" "}
          <span className="text-[var(--accent)] font-mono text-xs">
            vanillarx@gmail.com
          </span>
        </p>
        <p>
          Also on{" "}
          <a href="https://github.com/VanillaRX/vault-game-guides" className="text-[var(--accent)] hover:underline">
            GitHub
          </a>{" "}
          — issues and PRs welcome.
        </p>
        <p className="text-xs">I usually reply within 24 hours.</p>
      </div>
    </div>
  );
}
