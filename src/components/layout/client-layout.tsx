"use client";

import { LangProvider } from "@/components/layout/lang-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LangProvider>
  );
}
