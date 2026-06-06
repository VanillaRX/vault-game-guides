import { Callout } from "@/components/guide/callout";
import { GuideTrans } from "@/components/guide/guide-chrome";
import { GuideText } from "@/components/guide/guide-text";
import { GAMES } from "@/lib/data";

const MISTAKES = [
  { n: 1, en_title: "Building too many farmers", zh_title: "农民造太多", en_desc: "300 farmers generate the same tax as 300 investors? No. Farmer tax = 3 coins/house. Investor tax = 750 coins/house. <b>Upgrade, don't sprawl.</b>", zh_desc: "300 个农民的税和 300 个投资人一样？差远了。农民税 = 3 金币/户，投资人税 = 750 金币/户。<b>升级，别铺摊子。</b>" },
  { n: 2, en_title: "Ignoring the production screen (Ctrl+Q)", zh_title: "不看生产面板 (Ctrl+Q)", en_desc: "The most important keybind in the game. Shows every good&apos;s supply vs demand in real time. <b>Red bar = you have a problem.</b> Check every 15 minutes.", zh_desc: "游戏里最重要的快捷键。实时显示每种物资的供需关系。<b>红色 = 出问题了。</b>每 15 分钟看一眼。" },
  { n: 3, en_title: "No warehouse coverage planning", zh_title: "不规划仓库覆盖", en_desc: "Place a warehouse FIRST, then build around it. 17-tile maximum road distance. If delivery carts take too long, build a second warehouse — they&apos;re cheap.", zh_desc: "先放仓库，再围着仓库建。最远 17 格道路距离。运输车跑太慢就再盖一个仓库——仓库很便宜。" },
  { n: 4, en_title: "Skipping the New World expedition", zh_title: "不去新世界", en_desc: "When Isabel Sarmento sends you to the New World — GO IMMEDIATELY. Rum, cotton, coffee, and gold all come from there. Delay = your artisans starve.", zh_desc: "伊莎贝尔让你去新世界——立刻去。朗姆酒、棉花、咖啡、黄金全在那里。拖一天，你的工匠就饿一天。" },
  { n: 5, en_title: "Not stockpiling before tier-ups", zh_title: "升级前不囤货", en_desc: "When you upgrade 50 farmers to workers, ALL 50 workers immediately demand sausage, soap, and bread. Build the production chain FIRST, then upgrade houses.", zh_desc: "50 个农民升工人那一瞬间，全部 50 个人立刻开始要香肠、肥皂、面包。<b>先把产业链建好，再点升级。</b>" },
  { n: 6, en_title: "Roads are free infrastructure", zh_title: "忽视道路", en_desc: "Stone roads double cart speed. Place them between every warehouse and its production cluster. The stone cost is negligible compared to the efficiency gain.", zh_desc: "石板路让运输车速度翻倍。每个仓库和它服务的生产区之间都要铺。石头几乎是免费的，换来的效率提升是巨大的。" },
  { n: 7, en_title: "Selling excess instead of stockpiling", zh_title: "卖光不囤", en_desc: "Your trading post auto-selling excess is a trap. Keep a buffer of every good — minimum 20-30 tons. A single fire or riot can wipe out a production chain.", zh_desc: "贸易站自动卖多余的——这是个陷阱。每种物资至少留 20-30 吨缓冲。一场火灾或暴动就能断掉一整条产业链。" },
];

const NEW_WORLD_STEPS = [
  { en_item: "🌴 Manola (Isabel's island)", zh_item: "🌴 马诺拉（伊莎贝尔的岛）", en_action: "Build 4 timber camps + 2 planks → 2 shipyards. Then plant 6 sugar cane + 2 rum distilleries. Send rum back to Old World on a clipper.", zh_action: "先建 4 个伐木场 + 2 个木板厂 → 2 个船坞。然后种 6 片甘蔗 + 2 个朗姆酒蒸馏厂。用快船 (Clipper) 把朗姆酒送回旧世界。" },
  { en_item: "☕ Coffee for Engineers", zh_item: "☕ 工程师要的咖啡", en_action: "8 coffee plantations on Manola. Coffee grows on the western half. Don&apos;t waste irrigation on eastern slopes — the fertility is lower.", zh_action: "马诺拉西半部种 8 个咖啡种植园。东边坡地肥力低——别浪费灌溉。" },
  { en_item: "📦 Cotton for Fur Coats", zh_item: "📦 皮草大衣用的棉花", en_action: "Replace your Old World sheep farms with cotton plantations in the New World. 1 cotton = 1 wool in the fur coat recipe, but cotton grows 2× faster.", zh_action: "用新世界的棉花种植园替代旧世界的牧羊场。1 棉花 = 1 羊毛（皮草大衣配方），但棉花长得快一倍。" },
];

const FAQ_ITEMS = [
  { en_q: "How many farmers do I need before upgrading?", zh_q: "升级之前需要多少农民？", en_a: "~200 farmers total. 1 fishery, 1 work clothes chain, 1 schnapps chain. That&apos;s enough to support your first 50 workers comfortably.", zh_a: "200 个农民左右。1 个渔场 + 1 条工服链 + 1 条烈酒链。这够舒舒服服地养活你第一批 50 个工人了。" },
  { en_q: "When should I go to the New World?", zh_q: "什么时候去新世界？", en_a: "The moment the expedition unlocks (~2 hours in). Delaying costs you rum and cotton — artisans will stall.", zh_a: "远征解锁的那一刻（大概 2 小时左右）。拖一天就少一天的朗姆酒和棉花——工匠的需求会卡住。" },
  { en_q: "What's the single best early-game tip?", zh_q: "新手期最有用的一条建议？", en_a: "Ctrl+Q. Learn it. Love it. Every 15 minutes, open the production stats screen and look for red bars. Red = shortage = angry residents = riots.", zh_a: "Ctrl+Q。记住它，爱上它。每 15 分钟打开生产统计面板看一眼——红色 = 短缺 = 居民不满 = 暴动。" },
];

export default function Anno1800BeginnerGuide() {
  const game = GAMES.find((g) => g.slug === "anno-1800")!;

  return (
    <div className="space-y-10">
      <img src={game.headerImage} alt="Anno 1800" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          <GuideText en="Anno 1800 drops you onto an island with a warehouse, 10 farmers, and zero instructions. The campaign teaches some basics, but it skips the most important concepts. This guide covers your first 5 hours — what to build, what to avoid, and the 7 mistakes every new player makes."
            zh="《纪元1800》把你丢到一座岛上：一个仓库、10个农民、零教程。战役模式教了点基础，但漏掉了最重要的概念。这篇攻略覆盖你前5个小时——该造什么、别踩什么坑、以及新手最容易忽视的7个要点。" />
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🛖 <GuideTrans en="Population Tiers: The Foundation" /></h2>
        <p className="mt-3 text-sm text-[var(--fg)]/80">
          <GuideText en="Anno's progression is gated by population tiers. Each tier unlocks new buildings and production chains. <b>You can't skip tiers.</b> Every tier must be satisfied before the next one appears."
            zh="纪元的人口等级 (Population Tier) 是递进的。每个等级解锁新建筑和新产业链。<b>不能跳级。</b>上一级的需求满足之后，下一级才会出现。" />
        </p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Tier" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Unlock at" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Basic Needs" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Key Unlock" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)]">🌾 Farmers (农民)</td><td className="px-3 py-2"><GuideTrans en="Start" /></td><td className="px-3 py-2 text-[var(--muted)]"><GuideTrans en="Fish, Work Clothes" /></td><td className="px-3 py-2"><GuideTrans en="Warehouse, Marketplace" /></td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">🔧 Workers (工人)</td><td className="px-3 py-2"><GuideTrans en="100 farmers" /></td><td className="px-3 py-2 text-[var(--muted)]"><GuideTrans en="Sausage, Soap, Bread" /></td><td className="px-3 py-2"><GuideTrans en="Shipyard, Steel" /></td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">🎨 Artisans (工匠)</td><td className="px-3 py-2"><GuideTrans en="1 worker house" /></td><td className="px-3 py-2 text-[var(--muted)]"><GuideTrans en="Canned Food, Fur Coats" /></td><td className="px-3 py-2"><GuideTrans en="New World, Rum" /></td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">⚙️ Engineers (工程师)</td><td className="px-3 py-2"><GuideTrans en="1 artisan house" /></td><td className="px-3 py-2 text-[var(--muted)]"><GuideTrans en="Spectacles, Coffee" /></td><td className="px-3 py-2"><GuideTrans en="Electricity, Steam Ships" /></td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)]">💎 Investors (投资人)</td><td className="px-3 py-2"><GuideTrans en="1 engineer house" /></td><td className="px-3 py-2 text-[var(--muted)]"><GuideTrans en="Chocolate, Champagne, Cigars" /></td><td className="px-3 py-2"><GuideTrans en="World's Fair, Banks" /></td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title={<GuideTrans en="The 1-House Trick" zh="一间房解锁法" />}>
          <GuideText en="You only need <b>1 house of each tier</b> to unlock the next tier. Build one worker house → unlock Artisans immediately → then upgrade the rest of your farmers later. This accelerates progression dramatically."
            zh="解锁下一级只需要 <b>1 间房</b>。盖一间工人房 → 马上解锁工匠 → 剩下的农民慢慢升。这么搞，发展速度快一大截。" />
        </Callout>
      </section>

      <section id="section-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🛑 <GuideTrans en="The 7 Deadly Beginner Mistakes" /></h2>
        <div className="mt-3 space-y-2">
          {MISTAKES.map((item) => (
            <div key={item.n} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">{item.n}</span>
              <div>
                <b className="text-sm"><GuideText en={item.en_title} zh={item.zh_title} /></b>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]"><GuideText en={item.en_desc} zh={item.zh_desc} /></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="section-2">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">⛵ <GuideTrans en="The New World: Your First Expedition" /></h2>
        <p className="mt-3 text-sm text-[var(--fg)]/80">
          <GuideText en="The New World (Manola) is not optional. <b>Artisans and above require goods that ONLY grow in the New World.</b> Your first expedition ship arrives around the 2-hour mark."
            zh="新世界（马诺拉）不是可选内容。<b>工匠及以上等级需要的物资只能在新世界种植。</b>第一次远征船大概在 2 小时左右到达。" />
        </p>

        <div className="mt-3 space-y-2">
          {NEW_WORLD_STEPS.map((item) => (
            <div key={item.en_item} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <div className="text-xl">{item.en_item.split(" ")[0]}</div>
              <div>
                <b className="text-sm"><GuideText en={item.en_item} zh={item.zh_item} /></b>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]"><GuideText en={item.en_action} zh={item.zh_action} /></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]"><GuideTrans en="FAQ" /></h2>
        <div className="mt-4 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group rounded-xl border border-[var(--border)] bg-[var(--card)]/30">
              <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[var(--fg)]/90 list-none marker:hidden flex items-center justify-between">
                <GuideText en={item.en_q} zh={item.zh_q} />
                <span className="ml-2 text-[var(--muted)] group-open:rotate-45 transition-transform text-xs">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--muted)]"><GuideText en={item.en_a} zh={item.zh_a} /></p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
