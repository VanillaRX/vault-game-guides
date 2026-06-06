import { GuideText } from "@/components/guide/guide-text";
import { GuideTrans } from "@/components/guide/guide-chrome";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function FoundationEconomy() {
  const game = GAMES.find((g) => g.slug === "foundation")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Foundation" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          Foundation&apos;s economy runs on a tax-and-trade system where villager promotion drives everything. A serf pays
          1 gold/month. A citizen pays 25 gold/month and consumes luxury goods that fuel advanced industries. This guide
          covers the complete villaer promotion pipeline, trade route mastery, monument ROI optimization, and
          economic scaling from village treasury to medieval financial powerhouse.
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📈 Villager Promotion Pipeline</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Tier</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Tax/Month</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Needs</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Unlocks</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Promotion Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">👤 Serf</td><td className="px-3 py-2">1 gold</td><td className="px-3 py-2 text-[var(--muted)]">Food (1 type), Water (well), Basic Shelter</td><td className="px-3 py-2">Farming, Logging, Basic Labor</td><td className="px-3 py-2 text-[var(--muted)]">Keep 60% of population as serfs through mid-game. They&apos;re your labor backbone.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">👤 Commoner</td><td className="px-3 py-2 text-[var(--neon)]">8 gold</td><td className="px-3 py-2 text-[var(--muted)]">Food (2 types), Clothing, Church access, Beer</td><td className="px-3 py-2">Crafting, Smithing, Tailoring, Trade</td><td className="px-3 py-2 text-[var(--muted)]">Promote 20-30% to commoners. Each commoner needs 3× the goods of a serf — scale production first.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">👤 Citizen</td><td className="px-3 py-2 text-[var(--amber)]">25 gold</td><td className="px-3 py-2 text-[var(--muted)]">Food (3 types), Tools, Jewelry, Decorated Housing, Entertainment</td><td className="px-3 py-2">Advanced crafting, Monuments, Administration</td><td className="px-3 py-2 text-[var(--muted)]">Promote 10-20% to citizens. Each citizen = 25 serfs in tax revenue. But each citizen consumes luxury goods from 4+ production chains.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The 60-25-15 Rule">
          Optimal population ratio: <b>60% Serfs, 25% Commoners, 15% Citizens.</b> A 200-pop town: 120 serfs (120 gold/mo), 50 commoners (400 gold/mo), 30 citizens (750 gold/mo) = <b>1,270 gold/month total.</b> Don&apos;t over-promote — commoners don&apos;t farm and citizens don&apos;t labor. If you promote too many, your workforce collapses.
        </Callout>
      </section>

      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🚢 Trade Route Mastery</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Trade Partner</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Buys</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Sells</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Distance</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">🏙️ Northburgh</td><td className="px-3 py-2 text-[var(--muted)]">Bread, Beer, Wheat</td><td className="px-3 py-2 text-[var(--muted)]">Tools, Iron Ore</td><td className="px-3 py-2">Short</td><td className="px-3 py-2 text-[var(--muted)]">Your primary early-game partner. Export surplus bread. Import iron ore if you lack a local iron mine. Max mastery first.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏙️ Kallio</td><td className="px-3 py-2 text-[var(--muted)]">Jewelry, Stained Glass, Gold</td><td className="px-3 py-2 text-[var(--muted)]">Marble, Quartz</td><td className="px-3 py-2">Long</td><td className="px-3 py-2 text-[var(--muted)]">Late-game luxury trade. Jewelry sells for 50 gold/unit but requires citizen-tier workers. Build this route after your first 20 citizens.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏙️ Monastic Orders</td><td className="px-3 py-2 text-[var(--muted)]">Herbs, Honey, Wine</td><td className="px-3 py-2 text-[var(--muted)]">Relics, Manuscripts</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2 text-[var(--muted)]">Niche trade. Herbs from your monastery garden sell for 15 gold/unit. Build a monastery by year 3 for this income stream.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏙️ Coastal Traders</td><td className="px-3 py-2 text-[var(--muted)]">Fish, Salt, Rope</td><td className="px-3 py-2 text-[var(--muted)]">Exotic Goods, Spices</td><td className="px-3 py-2">Short</td><td className="px-3 py-2 text-[var(--muted)]">If you spawned on a coast. Fish is infinite resource. Salt preserves food. Consistent income if coastal.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Trade Mastery Levels">
          Each trade route has a Mastery level (1-10). Higher mastery = <b>better buy/sell prices + faster cart speed.</b> A mastery-10 bread route sells at 18 gold vs 12 at mastery-1 — a 50% income increase. <b>Never split your trade carts across 5 routes at mastery 2.</b> Focus 3 routes to mastery 7+ before expanding. The mastery bonus compounds with trade volume.
        </Callout>
      </section>

      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏛️ Monument ROI Optimization</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Monument</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Gold Cost (Resources)</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Monthly Return</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Payback Period</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">⛪ Village Church</td><td className="px-3 py-2 text-[var(--muted)]">~200 gold (100 stone + 50 planks)</td><td className="px-3 py-2">Prevents emigration events (saves 2-5 villagers/year = 10-25 gold/mo equivalent)</td><td className="px-3 py-2 text-[var(--neon)]">~1 year</td><td className="px-3 py-2 text-red-400">1st</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏰 Lord&apos;s Manor</td><td className="px-3 py-2 text-[var(--muted)]">~500 gold (200 stone + 100 planks + 50 iron)</td><td className="px-3 py-2 text-[var(--neon)]">+5 gold × citizen count/month. 10 citizens = +50/mo.</td><td className="px-3 py-2">~2 years</td><td className="px-3 py-2 text-[var(--amber)]">2nd</td></tr>
              <tr><td className="px-3 py-2 font-medium">⛲ Grand Fountain</td><td className="px-3 py-2 text-[var(--muted)]">~300 gold (150 stone + 50 marble)</td><td className="px-3 py-2">Houses promote 40% faster = more commoners/citizens = more tax. Soft ROI.</td><td className="px-3 py-2">~3 years</td><td className="px-3 py-2">3rd</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏛️ Cathedral</td><td className="px-3 py-2 text-[var(--muted)]">~3,000 gold (500 stone + 200 marble + 100 glass + 50 gold)</td><td className="px-3 py-2">+20 population (pilgrims) + max faith + tax from 20 new villagers.</td><td className="px-3 py-2">~5 years</td><td className="px-3 py-2">Endgame</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="The Real ROI of the Church">
          The Village Church doesn&apos;t generate direct gold. But without it, the &apos;Mass Exodus&apos; event can trigger when faith drops below 30%, causing 5-10 villagers to leave permanently. <b>Replacing those villagers takes 2+ in-game years of immigration.</b> The Church prevents this. Build it by year 2 at the latest.
        </Callout>
      </section>

      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">💰 Gold Management &amp; Treasury</h2>

        <div className="mt-3 space-y-2">
          {[
            { rule: "Gold Reserve Minimum", desc: "Keep <b>500 gold minimum</b> in treasury at all times. Below 200 gold, you can&apos;t pay army wages — soldiers desert. Below 100 gold, trade stalls close — your economy seizes. Gold below 500 = emergency mode: cancel all construction, sell excess goods at any price." },
            { rule: "Tax Rate Optimization", desc: "Default tax = 10%. At 15%, commoners complain (−5% happiness). At 20%, citizens protest (−10% happiness, possible riots). <b>Never exceed 12% tax.</b> Instead, grow your tax base by promoting villagers. 10 more citizens at 10% tax = 250 gold/mo. Raising tax to 12% on 30 citizens = +18 gold/mo. Promotion always beats taxation." },
            { rule: "Army Cost Management", desc: "Each soldier costs 15 gold/month in wages + 5 gold/month in equipment maintenance. 10 soldiers = 200 gold/mo. <b>Only maintain a standing army if you need it.</b> During peace, disband half your soldiers. They&apos;ll return to labor and generate tax income. Remobilize when raids threaten." },
            { rule: "Import Substitution", desc: "If you&apos;re importing iron tools at 25 gold/unit and using 10/month, that&apos;s 250 gold/mo leaving your economy. <b>Build an iron mine + smelter + blacksmith instead.</b> The buildings cost ~400 gold one-time and produce tools at material cost (~5 gold/unit). Payback period: 2 months. After that, 245 gold/mo stays in your treasury." },
          ].map((item) => (
            <div key={item.rule} className="rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <h4 className="text-sm font-semibold text-[var(--neon)]">{item.rule}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "When should I build the Lord&apos;s Manor?", a: "After your first 15 commoners. The Manor unlocks taxation which funds everything else. Without it, your only income is basic trade — you&apos;ll hit a gold wall around 80 population." },
            { q: "How do I stop running out of gold?", a: "Three fixes: (1) Check your import bill — are you importing goods you could produce? (2) Promote serfs to commoners near workplaces with all needs met. (3) Focus trade mastery on 2 routes rather than spreading across 5." },
            { q: "What&apos;s the best luxury good to produce?", a: "Jewelry (50 gold/unit export) but it requires citizens. Second best: Stained Glass (40-55 gold/unit) from sand pits (infinite resource) + quartz. Third: Iron Tools (18-25 gold/unit) — the most reliable mid-game export with the simplest chain." },
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
