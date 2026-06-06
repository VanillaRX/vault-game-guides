"use client";

import { useLang } from "@/components/layout/lang-context";

export function GuideCategoryLabel({ category }: { category: string }) {
  const { t } = useLang();
  return <>{t(`guide.category.${category}`)}</>;
}

export function GuideDifficultyLabel({ difficulty }: { difficulty: string }) {
  const { t } = useLang();
  return <>{t(`guide.difficulty.${difficulty}`)}</>;
}

export function GuideMetaText({ text, type }: { text: string; type: "minRead" | "words" }) {
  const { t } = useLang();
  return <>{text} {t(type)}</>;
}

export function GuideTocTitle() {
  const { t } = useLang();
  return <>{t("guide.tableOfContents")}</>;
}

export function GuideRelatedTitle() {
  const { t } = useLang();
  return <>{t("guide.related")}</>;
}

export function GuideFaqTitle() {
  const { t } = useLang();
  return <>{t("faq")}</>;
}

export function GuideComingSoon() {
  const { t } = useLang();
  return <>{t("guide.comingSoon")}</>;
}

export function GuideAdPlaceholder() {
  const { t } = useLang();
  return <>{t("guide.adPlaceholder")}</>;
}

export function UseT({ k }: { k: string }) {
  const { t } = useLang();
  return <>{t(k)}</>;
}
