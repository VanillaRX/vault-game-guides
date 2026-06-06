import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vault Guides privacy policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
        <p><strong className="text-[var(--fg)]">Last updated: June 2026</strong></p>
        <p>Vault Guides does not collect, store, or process any personal data from visitors. We do not have user accounts, comment systems, or email subscriptions.</p>
        <h2 className="font-display text-lg font-bold text-[var(--fg)]">Third-Party Services</h2>
        <p>We use Google AdSense to display advertisements. Google may use cookies to serve relevant ads. You can learn more about how Google uses data at <a href="https://policies.google.com/technologies/ads" className="text-[var(--accent)] hover:underline">Google&apos;s Advertising Policies</a>.</p>
        <p>We use Vercel Analytics for anonymous usage statistics (page views, referrers). This data is aggregated and does not identify individual users.</p>
        <h2 className="font-display text-lg font-bold text-[var(--fg)]">Contact</h2>
        <p>Questions about this policy? Reach out via our <a href="/contact" className="text-[var(--accent)] hover:underline">contact page</a>.</p>
      </div>
    </div>
  );
}
