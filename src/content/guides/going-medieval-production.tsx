import { GuideText } from "@/components/guide/guide-text";
import { GuideTrans } from "@/components/guide/guide-chrome";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function GoingMedievalProduction() {
  const game = GAMES.find((g) => g.slug === "going-medieval")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Going Medieval" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          <GuideText en="Going Medieval's production system spans raw resource gathering, intermediate crafting, and high-tier manufacturing spread across multiple Z-levels. A disorganized production chain means settlers walking 200 tiles to grab one log. This guide covers the complete production tree, settler specialization, research priorities, and underground storage optimization."
            zh="《前往中世纪》的生产体系横跨多个 Z 轴层级的原材料采集、半成品加工和高级制造。一条混乱的生产链意味着居民要跑 200 格去拿一根原木。本指南涵盖完整的生产树、居民专精、科研优先路径和地下仓储优化。" />
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🔗 Complete Production Chain Reference</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">End Product</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Raw → Intermediate → Final</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Required Skill</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Research Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">Planks</td><td className="px-3 py-2 text-[var(--muted)]">Log → Carpenter Bench</td><td className="px-3 py-2">Carpentry</td><td className="px-3 py-2 text-[var(--muted)]">Tier 0 (free)</td></tr>
              <tr><td className="px-3 py-2 font-medium">Stone Blocks</td><td className="px-3 py-2 text-[var(--muted)]">Raw Stone (quarry) → Stonemason Bench</td><td className="px-3 py-2">Crafting</td><td className="px-3 py-2 text-[var(--muted)]">Tier 0</td></tr>
              <tr><td className="px-3 py-2 font-medium">Iron Ingots</td><td className="px-3 py-2 text-[var(--muted)]">Iron Ore (mine) → Smelter (fuel: coal/charcoal)</td><td className="px-3 py-2">Smithing</td><td className="px-3 py-2 text-[var(--muted)]">Tier 1 (Architecture)</td></tr>
              <tr><td className="px-3 py-2 font-medium">Steel Ingots</td><td className="px-3 py-2 text-[var(--muted)]">Iron Ingot + Coal → Advanced Smelter</td><td className="px-3 py-2">Smithing</td><td className="px-3 py-2 text-[var(--muted)]">Tier 3 (Advanced Smithing)</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Meals</td><td className="px-3 py-2 text-[var(--muted)]">Raw Meat + Vegetables → Campfire/Stove</td><td className="px-3 py-2">Cooking</td><td className="px-3 py-2 text-[var(--muted)]">Tier 0 (campfire) / Tier 1 (stove)</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Preserved Food</td><td className="px-3 py-2 text-[var(--muted)]">Meals + Salt (mined) → Preservation Station</td><td className="px-3 py-2">Cooking</td><td className="px-3 py-2 text-[var(--muted)]">Tier 2 (Food Preservation)</td></tr>
              <tr><td className="px-3 py-2 font-medium">Linen Cloth</td><td className="px-3 py-2 text-[var(--muted)]">Flax (farm) → Loom (weaving)</td><td className="px-3 py-2">Tailoring</td><td className="px-3 py-2 text-[var(--muted)]">Tier 0</td></tr>
              <tr><td className="px-3 py-2 font-medium">Leather</td><td className="px-3 py-2 text-[var(--muted)]">Raw Hide (hunting) → Tanning Rack</td><td className="px-3 py-2">Tailoring</td><td className="px-3 py-2 text-[var(--muted)]">Tier 0</td></tr>
              <tr><td className="px-3 py-2 font-medium">Clothing</td><td className="px-3 py-2 text-[var(--muted)]">Linen or Leather → Tailor Bench</td><td className="px-3 py-2">Tailoring</td><td className="px-3 py-2 text-[var(--muted)]">Tier 0</td></tr>
              <tr><td className="px-3 py-2 font-medium">Armor (Iron)</td><td className="px-3 py-2 text-[var(--muted)]">Iron Ingots → Armorer Bench</td><td className="px-3 py-2">Smithing</td><td className="px-3 py-2 text-[var(--muted)]">Tier 2 (Armorsmithing)</td></tr>
              <tr><td className="px-3 py-2 font-medium">Weapons (Steel)</td><td className="px-3 py-2 text-[var(--muted)]">Steel Ingots → Weaponsmith Bench</td><td className="px-3 py-2">Smithing</td><td className="px-3 py-2 text-[var(--muted)]">Tier 3 (Weaponsmithing)</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Crossbows</td><td className="px-3 py-2 text-[var(--muted)]">Steel Mechanism + Wood Stock → Fletching Bench</td><td className="px-3 py-2">Crafting</td><td className="px-3 py-2 text-[var(--muted)]">Tier 4 (Advanced Engineering)</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Production Proximity Bonus">
          Settlers walk at 3.5 tiles/second. A 100-tile round trip to fetch one log = 28 seconds wasted. <b>Keep stockpiles within 5 tiles of their consuming workbench.</b> Example: smelter should have an iron ore stockpile on one side and a coal stockpile on the other, both within 2 tiles. The output iron ingot stockpile should be 2 tiles away on the third side.
        </Callout>
      </section>

      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">👤 Settler Specialization</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Role</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Primary Skills (Starred)</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Schedule</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Colonists Needed (10-pop colony)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">🌾 Farmer</td><td className="px-3 py-2">Growing ★★, Harvesting ★</td><td className="px-3 py-2 text-[var(--muted)]">Anything 5am-7pm. Harvest priority during autumn.</td><td className="px-3 py-2">3</td></tr>
              <tr><td className="px-3 py-2 font-medium">🪓 Logger/Miner</td><td className="px-3 py-2">Mining ★★ (if underground), Woodcutting ★★</td><td className="px-3 py-2 text-[var(--muted)]">Work 6am-6pm. Haul after work.</td><td className="px-3 py-2">2</td></tr>
              <tr><td className="px-3 py-2 font-medium">🔨 Crafter</td><td className="px-3 py-2">Crafting ★★, Smithing ★★</td><td className="px-3 py-2 text-[var(--muted)]">Work 6am-8pm indoors. Never assigned to outdoor labor.</td><td className="px-3 py-2">1-2</td></tr>
              <tr><td className="px-3 py-2 font-medium">🍳 Cook</td><td className="px-3 py-2">Cooking ★★</td><td className="px-3 py-2 text-[var(--muted)]">Cook in morning (5am-10am). Haul ingredients rest of day.</td><td className="px-3 py-2">1</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏗️ Builder</td><td className="px-3 py-2">Construction ★★</td><td className="px-3 py-2 text-[var(--muted)]">Work 6am-6pm. Priority 1 on construction orders.</td><td className="px-3 py-2">1-2</td></tr>
              <tr><td className="px-3 py-2 font-medium">📦 Hauler</td><td className="px-3 py-2">Any (low-skill colonist)</td><td className="px-3 py-2 text-[var(--muted)]">Haul priority 2 for everyone not in combat. Animals haul too.</td><td className="px-3 py-2">Everyone when idle</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Star Skills Matter">
          A settler with ★★ (double star) Cooking gains skill at 4× the rate of an unstarred settler. At Cooking 10, a ★★ cook produces meals 2× faster and at 50% higher quality than an unstarred level 5 cook. <b>Never assign a production job to a settler without the matching star skill.</b> Let them haul — it&apos;s better than wasting resources on low-quality crafted goods.
        </Callout>
      </section>

      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📚 Research Priority Path</h2>

        <div className="mt-3 space-y-2">
          {[
            { tier: "Tier 1 — Survival", researches: "Architecture (stone walls, improved beds) → Agriculture (crop rotation, fertilizer) → Cooking (stove, better meals).", why: "Stone walls replace wood. Better beds = less sleep needed. Stove cooks 2× faster than campfire." },
            { tier: "Tier 2 — Fortification", researches: "Armorsmithing (iron armor) → Food Preservation (smoked meat) → Brewing (beer for mood).", why: "Iron armor is 3× more protective than leather. Smoked meat stores for 12 months vs 3 days raw. Beer gives +10 mood buff." },
            { tier: "Tier 3 — Industry", researches: "Advanced Smithing (steel) → Weaponsmithing (steel weapons) → Medicine (better treatment).", why: "Steel weapons do 2× damage of iron. Steel armor deflects 80% of arrows. Better medicine halves infection chance." },
            { tier: "Tier 4 — Mastery", researches: "Advanced Engineering (crossbows, traps) → Architecture II (fortified walls) → Brewing II (distilled spirits).", why: "Crossbows one-shot unarmored raiders. Fortified walls withstand trebuchets. Distilled spirits provide emergency mood recovery." },
          ].map((item) => (
            <div key={item.tier} className="rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <h4 className="text-sm font-bold text-[var(--neon)]">{item.tier}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: item.researches }} />
              <p className="mt-1.5 text-[11px] text-[var(--fg)]/70" dangerouslySetInnerHTML={{ __html: item.why }} />
            </div>
          ))}
        </div>
      </section>

      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📦 Underground Storage Optimization</h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { title: "Temperature Stability", desc: "Underground rooms (Z-1 and below) maintain 5-10°C year-round regardless of surface temperature. This is <b>natural refrigeration</b> — no fuel cost. Dig your food storage 2 Z-levels down for maximum temperature stability." },
            { title: "Spoilage Prevention", desc: "Food spoils 3× slower underground. Combined with salt preservation (tier 2 research), underground food storage extends shelf life to <b>18+ months</b> for preserved meat. Place your kitchen directly above the underground food storage with a staircase connecting them." },
            { title: "Raider-Proof Storage", desc: "Underground stockpiles are immune to surface raids. Raiders don&apos;t dig down — they target surface buildings. Store your emergency supplies (200 meals, 50 medicine, 20 weapons) in a Z-3 vault accessible only by ladder. If the surface falls, your colony survives below." },
            { title: "Space Efficiency", desc: "Every Z-level is a new buildable layer. Don&apos;t spread out horizontally — build down. A 10×10 room on Z-1 costs the same as a 10×10 surface room but is thermally stable and raider-safe. <b>Aim for 40% of your colony&apos;s floor space underground by year 3.</b> " },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <h4 className="text-sm font-semibold text-[var(--fg)]">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "What&apos;s the most efficient food chain?", a: "Hunt → raw meat → campfire (early) / stove (mid). 1 hunter with skill 10 bow provides enough meat for 5 settlers. Supplement with 1 flax + 1 cabbage field for vegetable variety and clothing material." },
            { q: "How do I speed up production?", a: "Reduce walking distance. Every workbench should have input stockpiles within 2 tiles. Place related workbenches adjacent: smelter next to blacksmith, loom next to tailor bench. This eliminates 90% of production downtime." },
            { q: "Should I specialize settlers or make everyone do everything?", a: "Specialize. A ★★ crafter at skill 15 produces 4× faster and at epic quality vs an unstarred settler. Set work priorities so specialists do ONLY their specialty. Non-specialist settlers handle hauling, cleaning, and emergency labor." },
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
