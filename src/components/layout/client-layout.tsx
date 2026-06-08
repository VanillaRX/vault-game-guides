"use client";

import type { Lang } from "@/lib/i18n";
import { LangProvider } from "@/components/layout/lang-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function ClientLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang?: Lang;
}) {
  return (
    <LangProvider initialLang={lang}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LangProvider>
  );
}
