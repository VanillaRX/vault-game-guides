import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <p className="font-mono text-6xl font-black text-[var(--border)]">404</p>
      <h1 className="mt-4 font-display text-xl font-bold">Page Not Found</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        This page doesn&apos;t exist. Maybe the guide hasn&apos;t been written yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
      >
        Back to Vault
      </Link>
    </div>
  );
}
