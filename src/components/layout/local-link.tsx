"use client";

import Link from "next/link";
import { useLang } from "@/components/layout/lang-context";
import type { ComponentProps } from "react";

/**
 * Drop-in replacement for next/link that auto-prefixes with the current lang.
 *
 * Usage: <LocalLink href="/games">Games</LocalLink>
 *   → renders <Link href="/en/games">Games</Link> (when lang=en)
 */
export function LocalLink({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  const { lang } = useLang();
  const hrefStr = typeof href === "string" ? href : href.toString();
  const prefixed = `/${lang}${hrefStr.startsWith("/") ? hrefStr : `/${hrefStr}`}`;
  return (
    <Link href={prefixed} {...rest}>
      {children}
    </Link>
  );
}
