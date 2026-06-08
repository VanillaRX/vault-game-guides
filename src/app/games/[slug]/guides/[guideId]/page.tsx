import { GUIDES } from "@/lib/data";
import { LegacyRedirect } from "@/components/layout/legacy-redirect";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.gameSlug, guideId: g.slug }));
}

export default async function LegacyGuidePage({
  params,
}: {
  params: Promise<{ slug: string; guideId: string }>;
}) {
  const { slug, guideId } = await params;
  return <LegacyRedirect to={`/en/games/${slug}/guides/${guideId}`} />;
}
