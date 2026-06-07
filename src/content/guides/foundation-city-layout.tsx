import { GuideText } from "@/components/guide/guide-text";
import { GuideTrans } from "@/components/guide/guide-chrome";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function FoundationCityLayout() {
  const game = GAMES.find((g) => g.slug === "foundation")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Foundation" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          <GuideText en="Foundation is a gridless, organic city-builder where villagers build their own paths and houses. Traditional grid-based planning <b>does not work here</b>. Instead, you paint zones, manage supply chains, and let the city grow organically. This guide covers zone planning, production chains, monument building, and the trade economy that turns a village into a thriving medieval city."
            zh="《Foundation》是一款无网格的有机城市建造游戏——村民自己修路盖房。传统的网格规划 <b>在这没用</b>。你要做的是划定功能区域、管理供应链，让城市自然生长。本指南涵盖区域规划、产业链、纪念碑建造和贸易经济，帮你的小村庄成长为繁华的中世纪城市。" />
        </p>
      </div>

      {/* Zone Planning */}
      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🗺️ Zone Planning: The Organic Approach</h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { title: "Residential Zones", desc: "Paint near workplaces. Villagers walk to work — if the walk exceeds 150m, they build a new house closer. Never paint residential zones in one giant block — scatter them in 3-4 clusters near different industries.", icon: "🏘️" },
            { title: "Industrial Zones", desc: "Place near resource nodes. Lumber camps near forests. Mines near stone/iron deposits. Wheat farms on flat, open land. Keep noisy industries (blacksmith, stonemason) 50m+ from residential — noise reduces desirability.", icon: "🏭" },
            { title: "Market Zones", desc: "The center of your city. Place the Market building first, then paint a large market zone around it. Stall vendors set up automatically. Luxury stalls (jewelry, clothing) generate the most tax income. Every house must be within 100m of a market.", icon: "🏪" },
          ].map((z) => (
            <div key={z.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <span className="text-xl">{z.icon}</span>
              <h4 className="mt-2 text-sm font-semibold text-[var(--fg)]">{z.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{z.desc}</p>
            </div>
          ))}
        </div>

        <Callout type="strategy" title="The Golden Rule of Foundation"
          zh="<b>画区域，不要放建筑。</b>和其他城市建造游戏不同，Foundation让村民在你划定的区域内自己盖房、建工坊、踩出路来。你的工作是区域布局和供应链管理——不是微操每一栋建筑。微操越多，城市发展越慢。">
          <b>Paint zones, don&apos;t place buildings.</b> Unlike other city builders, Foundation lets villagers build their own houses, workshops, and paths within zones you designate. Your job is zone placement and supply chain management — not micro-managing every building. The more you micromanage, the slower your city grows.
        </Callout>
      </section>

      {/* Supply Chains */}
      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📦 Complete Supply Chain Reference</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="End Product" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Input Chain" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Required Buildings" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Villager Tier" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Bread</td><td className="px-3 py-2 text-[var(--muted)]">Wheat Farm → Windmill (Flour) → Bakery</td><td className="px-3 py-2 text-[var(--muted)]">3 buildings</td><td className="px-3 py-2">Serf</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Beer</td><td className="px-3 py-2 text-[var(--muted)]">Wheat Farm → Brewery + Hop Farm → Brewery</td><td className="px-3 py-2 text-[var(--muted)]">3 buildings</td><td className="px-3 py-2">Commoner</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Clothing</td><td className="px-3 py-2 text-[var(--muted)]">Sheep Farm (Wool) → Weaver (Cloth) → Tailor</td><td className="px-3 py-2 text-[var(--muted)]">3 buildings</td><td className="px-3 py-2">Commoner</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Tools</td><td className="px-3 py-2 text-[var(--muted)]">Iron Mine → Smelter (Iron Bars) → Blacksmith</td><td className="px-3 py-2 text-[var(--muted)]">3 buildings</td><td className="px-3 py-2">Commoner</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Jewelry</td><td className="px-3 py-2 text-[var(--muted)]">Gold Mine → Goldsmith + Gem Mine → Gem Cutter → Jeweler</td><td className="px-3 py-2 text-[var(--muted)]">4 buildings</td><td className="px-3 py-2">Citizen</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Weapons</td><td className="px-3 py-2 text-[var(--muted)]">Iron Bars + Coal Mine (Charcoal) → Weaponsmith</td><td className="px-3 py-2 text-[var(--muted)]">3 buildings</td><td className="px-3 py-2">Citizen</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Stained Glass</td><td className="px-3 py-2 text-[var(--muted)]">Sand Pit → Glassmaker + Quartz Mine → Glass Workshop</td><td className="px-3 py-2 text-[var(--muted)]">3 buildings</td><td className="px-3 py-2">Citizen</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="Promotion Requirements"
          zh="居民需求全部满足后自动晋升。农奴→平民：需要多种食物（2+种）+基础衣服。平民→市民：需要奢侈食物（啤酒、肉类）+工具+装修过的房子（T2房+装饰）。平民消耗的物资是农奴的<b>3倍</b>——产业链撑得起之前不要晋升太多人。">
          Villagers promote when all their needs are met. Serf → Commoner: needs food variety (2+ types) + basic clothing. Commoner → Citizen: needs luxury food (beer, meat) + tools + decorated housing (tier 2 house + decorations). Commoners consume <b>3× more goods than serfs</b> — don&apos;t promote too many until your production chains can support it.
        </Callout>
      </section>

      {/* Monuments */}
      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏛️ Monument Building Guide</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Monument" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Resources Required" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Workers" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Benefit" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">⛪ Village Church</td><td className="px-3 py-2 text-[var(--muted)]">100 Stone, 50 Planks</td><td className="px-3 py-2">8 builders</td><td className="px-3 py-2 text-[var(--muted)]">Faith need satisfied. Unlocks Monastery (tier 2). Prevents mass emigration during hardship events.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">🏰 Lord&apos;s Manor</td><td className="px-3 py-2 text-[var(--muted)]">200 Stone, 100 Planks, 50 Iron Bars</td><td className="px-3 py-2">12 builders</td><td className="px-3 py-2 text-[var(--muted)]">Unlocks taxation. Generates 5 gold/month per citizen. Required for Citizen tier promotion.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">⛲ Grand Fountain</td><td className="px-3 py-2 text-[var(--muted)]">150 Stone, 50 Marble</td><td className="px-3 py-2">10 builders</td><td className="px-3 py-2 text-[var(--muted)]">Massive desirability boost in 50m radius. Houses near fountains promote 40% faster.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">🏛️ Cathedral</td><td className="px-3 py-2 text-[var(--muted)]">500 Stone, 200 Marble, 100 Stained Glass, 50 Gold</td><td className="px-3 py-2">20 builders</td><td className="px-3 py-2 text-[var(--muted)]">Endgame monument. Max faith. Attracts pilgrims (+20 population). Required for ultimate city achievement.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Monument Construction Workflow"
          zh="1. 先建纪念碑的资源仓库（紧挨建筑工地）。<br/>2. 所有资源仓库设为对纪念碑材料「填满」优先级。<br/>3. 分配2个专职建筑工，禁止他们做其他工作。<br/>4. 春季开工——冬季施工速度慢40%。<br/>优化物流后大教堂约45个游戏日完工。不做规划：90+天。">
          1. Build the monument&apos;s resource depot FIRST (next to the construction site).<br/>
          2. Set all resource depots to &quot;Fill&quot; priority for the monument materials.<br/>
          3. Assign 2 dedicated builders and prevent them from doing other jobs.<br/>
          4. Build in spring — winter slows construction by 40%.<br/>
          A Cathedral takes ~45 in-game days with optimized logistics. Without planning: 90+ days.
        </Callout>
      </section>

      {/* Trade */}
      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📊 Trade Economy &amp; Mastery</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Export Good" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Buyer" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Price" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Strategy" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Surplus Bread</td><td className="px-3 py-2 text-[var(--muted)]">Northburgh (city)</td><td className="px-3 py-2 text-[var(--neon)]">8-12 Gold/unit</td><td className="px-3 py-2 text-[var(--muted)]">Best early-game export. Bread has a 3:1 wheat-to-bread ratio. 3 wheat farms feed 1 windmill + bakery + surplus for export.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Iron Tools</td><td className="px-3 py-2 text-[var(--muted)]">All trading partners</td><td className="px-3 py-2 text-[var(--neon)]">18-25 Gold/unit</td><td className="px-3 py-2 text-[var(--muted)]">Best value-to-weight export. 1 iron ore → 1 tool. Tools stack to 10. One trading cart of tools = 250 gold.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Jewelry</td><td className="px-3 py-2 text-[var(--muted)]">Kallio (distant city)</td><td className="px-3 py-2 text-[var(--neon)]">35-50 Gold/unit</td><td className="px-3 py-2 text-[var(--muted)]">Highest single-item value. But requires citizen-tier workers + 4-step chain. Build this industry last.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Stained Glass</td><td className="px-3 py-2 text-[var(--muted)]">Kallio, Monasteries</td><td className="px-3 py-2 text-[var(--neon)]">40-55 Gold/unit</td><td className="px-3 py-2 text-[var(--muted)]">Best late-game export. Sand pit is unlimited resource. With 3 sand pits + 2 quartz mines = continuous production.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Trade Mastery Perk System"
          zh="每条贸易路线有<b>精通等级（1-10）</b>。等级越高=价格越好+马车越快。先把面包精通升满（它会是未来50多年你的主力出口）。在主力商品精通5级之前不要分散贸易路线——铺太散意味着几十年拿不到精通加成。">
          Each trade route has a <b>Mastery level (1-10)</b>. Higher mastery = better prices + faster carts. Max out bread mastery first (it&apos;s your primary export for 50+ years). Never diversify trade routes before mastery level 5 on your primary good — spreading thin means no mastery bonus for decades.
        </Callout>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { en_q: "Why aren't my villagers building houses?", zh_q: "为什么村民不盖房子？", en_a: "Check three things: (1) Residential zone is painted — without it, no houses. (2) Zone is within 150m of workplaces. (3) Desirability is above 0. Add a well and decorate with trees (+2 desirability each).", zh_a: "检查三点：(1) 住宅区是否划定——没划定就没人盖房。(2) 区域是否在工作地点 150m 以内。(3) 吸引力是否高于 0。加口水井，种些树（每棵树 +2 吸引力）。" },
            { en_q: "How do I promote more villagers to Commoner?", zh_q: "怎么让更多村民晋升为平民？", en_a: "You need: (1) At least 2 food types in the market. (2) Clothing available in a market stall. (3) Church built and staffed. (4) Their house is within 100m of a market. Then click the house and press Promote.", zh_a: "需要满足：(1) 市场至少有 2 种食物。(2) 市场摊位有衣服卖。(3) 教堂已建好并有神职人员。(4) 他们的房子在市场的 100m 范围内。满足后点房子，按晋升。" },
            { en_q: "Best monument to build first?", zh_q: "第一个纪念碑造什么？", en_a: "Village Church. It unlocks faith needs and prevents the 'Mass Exodus' event. Second: Lord's Manor for taxation income. Third: Grand Fountain for the desirability boost that speeds all future promotions.", zh_a: "乡村教堂。解锁信仰需求，防止'大规模出逃'事件。第二：领主庄园，开启税收收入。第三：大喷泉，提升吸引力，加速后续所有晋升。" },
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
