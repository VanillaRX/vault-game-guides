import { LegacyRedirect } from "@/components/layout/legacy-redirect";

export const metadata = { robots: { index: false } as const };

export default function LegacyAbout() {
  return <LegacyRedirect to="/en/about" />;
}
