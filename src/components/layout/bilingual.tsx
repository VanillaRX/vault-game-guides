"use client";

import { useLang } from "@/components/layout/lang-context";

/** Shows EN or ZH text based on current language. */
export function Bilingual({ en, zh }: { en: string; zh: string }) {
  const { lang } = useLang();
  return <>{lang === "zh" ? zh : en}</>;
}
