"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { t as tDict } from "@/lib/i18n";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  /** Lang from URL params, injected by [lang]/layout.tsx. When absent (legacy pages), falls back to "en". */
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? "en");

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("vault-lang", l);
      document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    }
  };

  const tFn = (key: string) => {
    return tDict[lang]?.[key] || tDict.en[key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </LangContext.Provider>
  );
}
