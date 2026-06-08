import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { ClientLayout } from "@/components/layout/client-layout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export default async function I18nLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Lang = lang === "zh" ? "zh" : "en";

  return <ClientLayout lang={validLang}>{children}</ClientLayout>;
}
