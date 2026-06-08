import { GAMES } from "@/lib/data";
import { LegacyRedirect } from "@/components/layout/legacy-redirect";

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export default function LegacyGamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <LegacyRedirect to={`/en/games/${params}`} />;
}
