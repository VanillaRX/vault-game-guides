"use client";

import { useLang } from "@/components/layout/lang-context";

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
            {zh ? "好游戏太多，时间太少。" : "Too many games, too little time."}
          </strong>{" "}
          {zh
            ? "Steam 上有十几万款游戏，好游戏被埋在算法和广告下面。Vault Guides 帮你发现真正值得玩的策略和模拟经营游戏——城市建造、殖民模拟、农场经营、自动化工厂，都是机制深、耐玩的好东西。"
            : "Steam has over 100,000 games. The good ones get buried under algorithms and ads. Vault Guides helps you discover strategy and simulation games actually worth your time — city builders, colony sims, farming games, automation. Deep mechanics, high replay value."}
        </p>
        <p>
          {zh
            ? "每款游戏都有真实的 Steam 玩家评论（中英双语），高清截图，玩法高光标记。不靠算法，不靠赞助，纯手工挑选。"
            : "Every game has real Steam player reviews (in English and Chinese), high-res screenshots, and gameplay highlight tags. No algorithm, no sponsorships — just hand-picked curation."}
        </p>
        <p>
          {zh
            ? "喜欢某款游戏？看看「相似推荐」。不确定喜欢什么？按标签浏览——农场、休闲治愈、城市建造、生存挑战。找好了就去 Steam 下单。"
            : "Love a game? Check out Similar Games. Not sure what you like? Browse by tag — farming, cozy, city builder, survival. Find it here, buy it on Steam."}
        </p>
        <p>
          {zh
            ? "这个站靠广告活着。没有付费墙，没有会员。觉得有用就发给也在找游戏的朋友。有问题或想推荐游戏？直接联系我。"
            : "This site runs on ads. No paywalls, no memberships. Find something good? Send it to a friend who's also looking. Got a suggestion or found an issue? Reach out."}
        </p>
      </div>
    </div>
  );
}
