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
            {zh ? "我们受够了烂攻略。" : "We got tired of bad game guides."}
          </strong>{" "}
          {zh
            ? "你懂的那种：三千字在讲\"什么是区域加成\"，正文还没开始。AI生成的垃圾把基本机制都写错。YouTube视频里那个\"快速技巧\"埋在18分钟深处。"
            : "You know the type: 3,000 words of \"what is adjacency?\" before any actual strategy. AI-generated slop that gets basic mechanics wrong. YouTube videos where the \"quick tip\" is buried 18 minutes in."}
        </p>
        <p>
          {zh
            ? "Vault Guides 不一样。每一篇攻略都是通关过的人写的——大多数不止通了一次。我们把策略写在最前面，每个章节都有时间标记，砍掉那些没人看的段落。"
            : "Vault Guides is different. Every guide is written by someone who has actually beaten the game — often multiple times. We front-load the strategy, timestamp every section, and skip the paragraphs nobody reads."}
        </p>
        <p>
          {zh
            ? "我们专注策略和经营游戏，因为这是游戏设计最有深度的地方。纪元1800、文明VI、边缘世界、Foundation——这些游戏值得配得上它们深度的攻略。"
            : "We focus on strategy and management games because that's where the most interesting design lives. Anno 1800, Civ VI, RimWorld, Foundation — these games deserve guides that match their depth."}
        </p>
        <p>
          <strong className="text-[var(--fg)]">
            {zh ? "没有账号。没有付费墙。没有\"高级\"攻略。" : "No accounts. No paywalls. No \"premium\" guides."}
          </strong>{" "}
          {zh
            ? "我们靠广告运营，为玩家而建。如果你觉得某篇攻略有用，最好的感谢就是分享给一个在同一关卡住的朋友。"
            : "We're funded by ads and built for players. If you find a guide useful, the best thanks is sharing it with a friend who's stuck on the same problem."}
        </p>
      </div>
    </div>
  );
}
