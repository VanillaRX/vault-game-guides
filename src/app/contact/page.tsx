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
          Found a mistake in a guide? Want to suggest a game we should cover? Just want to say the
          Hollow Knight boss guide saved your sanity? We read everything.
        </p>
        <p>
          Email us at{" "}
          <span className="text-[var(--accent)] font-mono text-xs">
            hello [at] vaultguides [dot] com
          </span>
        </p>
        <p className="text-xs">We respond within 48 hours. Usually faster.</p>
      </div>
    </div>
  );
}
