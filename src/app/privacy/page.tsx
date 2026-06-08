import { LegacyRedirect } from "@/components/layout/legacy-redirect";

export const metadata = { robots: { index: false } as const };

export default function LegacyPrivacy() {
  return <LegacyRedirect to="/en/privacy" />;
}
