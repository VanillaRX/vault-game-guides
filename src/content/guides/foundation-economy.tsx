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
          <GuideText en="Foundation's economy runs on a tax-and-trade system where villager promotion drives everything. A serf pays 1 gold/month. A citizen pays 25 gold/month and consumes luxury goods that fuel advanced industries. This guide covers the complete villager promotion pipeline, trade route mastery, monument ROI optimization, and economic scaling from village treasury to medieval financial powerhouse."
            zh="《Foundation》的经济建立在税收与贸易体系之上，居民晋升是核心驱动力。一个农奴每月交 1 金币，一个市民每月交 25 金币，同时消费推动高级产业的奢侈品。本指南涵盖完整的居民晋升路径、贸易路线精通、纪念碑投资回报优化，以及从小村金库到中世纪金融巨头的经济扩张策略。" />
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

        <Callout type="strategy" title="The 60-25-15 Rule"
          zh="最优人口比例：<b>60%农奴，25%平民，15%市民。</b>200人城镇：120农奴(120金/月)，50平民(400金/月)，30市民(750金/月)=<b>总计1270金/月。</b>不要过度晋升——平民不种地，市民不劳动。晋升太多，劳动力会崩盘。">
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

        <Callout type="tip" title="Trade Mastery Levels"
          zh="每条贸易路线有精通等级(1-10)。等级越高=<b>买卖价格越好+马车越快。</b>10级精通的面包路线卖18金，1级的只卖12金——50%的收入差距。<b>永远不要在精通只有2级时把商队分散到5条路线。</b>先集中把3条路线升到7+级再扩张。精通加成会随贸易量滚动增长。">
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

        <Callout type="info" title="The Real ROI of the Church"
          zh="乡村教堂不直接产生金币。但没有它的话，信仰低于30%时可能触发「大规模出逃」事件，5-10个居民永久离开。<b>补充这些居民需要2+游戏年的移民。</b>教堂能阻止这一切。最晚第2年建。">
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
            { en_q: "When should I build the Lord's Manor?", zh_q: "什么时候建领主庄园？", en_a: "After your first 15 commoners. The Manor unlocks taxation which funds everything else. Without it, your only income is basic trade — you'll hit a gold wall around 80 population.", zh_a: "有了 15 个平民之后。庄园解锁税收，税收支撑一切。没有庄园，你的唯一收入来源是基础贸易——80 人口左右就会碰到金币瓶颈。" },
            { en_q: "How do I stop running out of gold?", zh_q: "金币总是不够用怎么办？", en_a: "Three fixes: (1) Check your import bill — are you importing goods you could produce? (2) Promote serfs to commoners near workplaces with all needs met. (3) Focus trade mastery on 2 routes rather than spreading across 5.", zh_a: "三个解决办法：(1) 检查进口账单——有没有东西是你自己能生产却在进口的？(2) 把需求已满足的农奴晋升为平民。(3) 把贸易精通集中在 2 条路线，不要分散到 5 条。" },
            { en_q: "What's the best luxury good to produce?", zh_q: "最好的奢侈品是什么？", en_a: "Jewelry (50 gold/unit export) but it requires citizens. Second best: Stained Glass (40-55 gold/unit) from sand pits (infinite resource) + quartz. Third: Iron Tools (18-25 gold/unit) — the most reliable mid-game export with the simplest chain.", zh_a: "珠宝（50 金币/单位出口）但需要市民。第二：彩色玻璃（40-55 金币/单位）来自采砂场（无限资源）+ 石英。第三：铁制工具（18-25 金币/单位）——最可靠的中期出口品，产业链最简单。" },
          ].map((item, i) => (
            <details key={i} className="group rounded-xl border border-[var(--border)] bg-[var(--card)]/30">
              <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[var(--fg)]/90 list-none marker:hidden flex items-center justify-between">
                <GuideText en={item.en_q} zh={item.zh_q} /><span className="ml-2 text-[var(--muted)] group-open:rotate-45 transition-transform text-xs">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--muted)]"><GuideText en={item.en_a} zh={item.zh_a} /></p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
