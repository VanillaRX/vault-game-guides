import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vault Guides",
  description: "We write deep, no-fluff game guides for indie games worth mastering.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-bold tracking-tight">About Vault Guides</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
        <p>
          <strong className="text-[var(--fg)]">We got tired of bad game guides.</strong> You know the
          type: 3,000 words of &ldquo;what is a boon?&rdquo; before any actual strategy. AI-generated
          slop that gets basic mechanics wrong. YouTube videos where the &ldquo;quick tip&rdquo; is
          buried 18 minutes in.
        </p>
        <p>
          Vault Guides is different. Every guide is written by someone who has actually beaten the
          game&mdash;often multiple times. We front-load the strategy, timestamp every section, and
          skip the paragraphs nobody reads.
        </p>
        <p>
          We focus on indie games because that&apos;s where the most interesting design lives. Hollow
          Knight, Hades, Balatro, Stardew Valley&mdash;these games deserve guides that match their
          depth.
        </p>
        <p>
          <strong className="text-[var(--fg)]">No accounts. No paywalls. No &ldquo;premium&rdquo; guides.</strong>
          {" "}We&apos;re funded by ads and built for players. If you find a guide useful, the best
          thanks is sharing it with a friend who&apos;s stuck on the same boss.
        </p>
      </div>
    </div>
  );
}
