import { Callout } from "@/components/guide/callout";
import { GuideTrans } from "@/components/guide/guide-chrome";
import { GuideText } from "@/components/guide/guide-text";
import { GAMES } from "@/lib/data";

export default function Anno1800BeginnerGuide() {
  const game = GAMES.find((g) => g.slug === "anno-1800")!;

  return (
    <div className="space-y-10">
      <img src={game.headerImage} alt="Anno 1800" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          <GuideText en="Anno 1800 drops you onto an island with a warehouse, 10 farmers, and zero instructions. The campaign teaches some basics, but it skips the most important concepts. This guide covers your first 5 hours — what to build, what to avoid, and the 7 mistakes every new player makes."
            zh="《纪元1800》把你丢到一座岛上：一个仓库、10个农民、零教程。战役模式教了点基础，但漏掉了最重要的概念。这篇攻略覆盖你前5个小时的游戏——该造什么、别踩什么坑、以及每个新手都会犯的7个错误。" />
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🛖 <GuideTrans en="Population Tiers: The Foundation" /></h2>
        <p className="mt-3 text-sm text-[var(--fg)]/80">
          Anno&apos;s progression is gated by population tiers. Each tier unlocks new buildings and production chains.
          <b>You can&apos;t skip tiers.</b> Every tier must be satisfied before the next one appears.
        </p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Tier</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Unlock at</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Basic Needs</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Key Unlock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)]">🌾 Farmers</td><td className="px-3 py-2">Start</td><td className="px-3 py-2 text-[var(--muted)]">Fish, Work Clothes</td><td className="px-3 py-2">Warehouse, Marketplace</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">🔧 Workers</td><td className="px-3 py-2">100 farmers</td><td className="px-3 py-2 text-[var(--muted)]">Sausage, Soap, Bread</td><td className="px-3 py-2">Shipyard, Steel</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">🎨 Artisans</td><td className="px-3 py-2">1 worker house</td><td className="px-3 py-2 text-[var(--muted)]">Canned Food, Fur Coats</td><td className="px-3 py-2">New World, Rum</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">⚙️ Engineers</td><td className="px-3 py-2">1 artisan house</td><td className="px-3 py-2 text-[var(--muted)]">Spectacles, Coffee</td><td className="px-3 py-2">Electricity, Steam Ships</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)]">💎 Investors</td><td className="px-3 py-2">1 engineer house</td><td className="px-3 py-2 text-[var(--muted)]">Chocolate, Champagne, Cigars</td><td className="px-3 py-2">World&apos;s Fair, Banks</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="The 1-House Trick">
          You only need <b>1 house of each tier</b> to unlock the next tier. Build one worker house → unlock Artisans immediately → then upgrade the rest of your farmers later. This accelerates progression dramatically.
        </Callout>
      </section>

      <section id="section-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🛑 <GuideTrans en="The 7 Deadly Beginner Mistakes" /></h2>
        <div className="mt-3 space-y-2">
          {[
            { n: 1, title: "Building too many farmers", desc: "300 farmers generate the same tax as 300 investors? No. Farmer tax = 3 coins/house. Investor tax = 750 coins/house. <b>Upgrade, don't sprawl.</b>" },
            { n: 2, title: "Ignoring the production screen (Ctrl+Q)", desc: "The most important keybind in the game. Shows every good&apos;s supply vs demand in real time. <b>Red bar = you have a problem.</b> Check every 15 minutes." },
            { n: 3, title: "No warehouse coverage planning", desc: "Place a warehouse FIRST, then build around it. 17-tile maximum road distance. If delivery carts take too long, build a second warehouse — they&apos;re cheap." },
            { n: 4, title: "Skipping the New World expedition", desc: "When Isabel Sarmento sends you to the New World — GO IMMEDIATELY. Rum, cotton, coffee, and gold all come from there. Delay = your artisans starve." },
            { n: 5, title: "Not stockpiling before tier-ups", desc: "When you upgrade 50 farmers to workers, ALL 50 workers immediately demand sausage, soap, and bread. Build the production chain FIRST, then upgrade houses." },
            { n: 6, title: "Roads are free infrastructure", desc: "Stone roads double cart speed. Place them between every warehouse and its production cluster. The stone cost is negligible compared to the efficiency gain." },
            { n: 7, title: "Selling excess instead of stockpiling", desc: "Your trading post auto-selling excess is a trap. Keep a buffer of every good — minimum 20-30 tons. A single fire or riot can wipe out a production chain." },
          ].map((item) => (
            <div key={item.n} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">{item.n}</span>
              <div><b className="text-sm">{item.title}</b><p className="mt-1 text-xs leading-relaxed text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: item.desc }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="section-2">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">⛵ <GuideTrans en="The New World: Your First Expedition" /></h2>
        <p className="mt-3 text-sm text-[var(--fg)]/80">
          The New World (Manola) is not optional. <b>Artisans and above require goods that ONLY grow in the New World.</b>
          Your first expedition ship arrives around the 2-hour mark.
        </p>

        <div className="mt-3 space-y-2">
          {[
            { item: "🌴 Manola (Isabel's island)", action: "Build 4 timber camps + 2 planks → 2 shipyards. Then plant 6 sugar cane + 2 rum distilleries. Send rum back to Old World on a clipper." },
            { item: "☕ Coffee for Engineers", action: "8 coffee plantations on Manola. Coffee grows on the western half. Don&apos;t waste irrigation on eastern slopes — the fertility is lower." },
            { item: "📦 Cotton for Fur Coats", action: "Replace your Old World sheep farms with cotton plantations in the New World. 1 cotton = 1 wool in the fur coat recipe, but cotton grows 2× faster." },
          ].map((item) => (
            <div key={item.item} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <div className="text-xl">{item.item.split(" ")[0]}</div>
              <div><b className="text-sm">{item.item}</b><p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{item.action}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]"><GuideTrans en="FAQ" /></h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "How many farmers do I need before upgrading?", a: "~200 farmers total. 1 fishery, 1 work clothes chain, 1 schnapps chain. That&apos;s enough to support your first 50 workers comfortably." },
            { q: "When should I go to the New World?", a: "The moment the expedition unlocks (~2 hours in). Delaying costs you rum and cotton — artisans will stall." },
            { q: "What's the single best early-game tip?", a: "Ctrl+Q. Learn it. Love it. Every 15 minutes, open the production stats screen and look for red bars. Red = shortage = angry residents = riots." },
          ].map((item, i) => (
            <details key={i} className="group rounded-xl border border-[var(--border)] bg-[var(--card)]/30">
              <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[var(--fg)]/90 list-none marker:hidden flex items-center justify-between">
                {item.q}<span className="ml-2 text-[var(--muted)] group-open:rotate-45 transition-transform text-xs">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
