import { LegacyRedirect } from "@/components/layout/legacy-redirect";

export const metadata = { robots: { index: false } as const };

export default function LegacySearch() {
  return <LegacyRedirect to="/en/search" />;
}
