"use client";

import { useLang } from "@/components/layout/lang-context";
import type { Metadata } from "next";

export default function AboutPage() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="font-display text-3xl font-bold tracking-tight">
        {zh ? "关于 Vault Guides" : "About Vault Guides"}
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--muted)]">
        <p>
          <strong className="text-[var(--fg)]">
            {zh ? "烂攻略太多了。" : "There's a lot of bad guides out there."}
          </strong>{" "}
          {zh
            ? "三千字介绍\"什么是区域加成\"，正文还没开始。AI写的攻略数值全错。YouTube上号称\"一分钟学会\"的视频，关键技巧藏在第18分钟。我每个游戏都通关过，大部分不止一次。所以我自己写了。"
            : "Three thousand words explaining what a district is before giving you any actual strategy. AI-written guides with wrong numbers. \"Quick tips\" videos where the tip is somewhere around minute 18. I've beaten every game on this site, most of them more than once. So I wrote my own guides."}
        </p>
        <p>
          {zh
            ? "每篇攻略开头直接给结论。每节标了阅读时间。砍掉了\"游戏介绍\"和\"总结\"——你不需要我告诉你纪元1800是育碧出的，你需要知道工业区怎么摆。"
            : "Every guide starts with the strategy, not the backstory. Each section has an estimated read time. I cut the intro fluff — you don't need me to tell you Anno 1800 was made by Ubisoft. You need to know where to put the industrial zone."}
        </p>
        <p>
          {zh
            ? "我只写策略和经营游戏。Anno 1800、文明6、RimWorld、Foundation、最远的边陲、前往中世纪。这些游戏的机制深，社区又小，好攻略难找。"
            : "I only write about strategy and management games. Anno 1800, Civ 6, RimWorld, Foundation, Farthest Frontier, Going Medieval. Deep mechanics, small communities, hard to find good info."}
        </p>
        <p>
          {zh
            ? "这个站靠广告活着。没有付费墙，没有会员，没有\"高级攻略\"。觉得有用就发给卡在同一关的朋友。有意见或发现错误直接联系我——我回得很快。"
            : "This site runs on ads. No paywalls, no memberships, no \"premium content.\" If a guide helps you, send it to someone stuck on the same thing. Found a mistake? Email me — I actually respond."}
        </p>
      </div>
    </div>
  );
}
