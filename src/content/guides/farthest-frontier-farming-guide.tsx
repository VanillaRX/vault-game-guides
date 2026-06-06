import { GuideTrans } from "@/components/guide/guide-chrome";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function FarthestFrontierFarmingGuide() {
  const game = GAMES.find((g) => g.slug === "farthest-frontier")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Farthest Frontier" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          Food is the #1 cause of colony collapse in Farthest Frontier. A single bad harvest without backup stores means starvation
          by winter. This guide covers crop rotation for maximum yield, soil fertility management, livestock optimization, food
          preservation, and the exact production chains to keep your colony fed through the harshest winters.
        </p>
      </div>

      {/* Crop Rotation */}
      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🌾 Crop Rotation: The Foundation</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Every farm field has 3 rotation slots (A, B, C). Each crop affects soil fertility and has specific planting/harvest months.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Crop</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Plant → Harvest</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Yield</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Soil Effect</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Wheat</td><td className="px-3 py-2 text-[var(--muted)]">Mar → Aug</td><td className="px-3 py-2">High</td><td className="px-3 py-2 text-red-400">-2 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Flour → Bread. Staple grain. Every colony needs at least 2 wheat fields.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Rye</td><td className="px-3 py-2 text-[var(--muted)]">Mar → Jul</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2 text-red-400">-1 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Cold-tolerant. Plant as backup grain. Grows where wheat fails.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Buckwheat</td><td className="px-3 py-2 text-[var(--muted)]">Apr → Jul</td><td className="px-3 py-2">Low</td><td className="px-3 py-2 text-red-400">-1 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Fast rotation filler. Use between heavy feeders for quick harvest.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Flax</td><td className="px-3 py-2 text-[var(--muted)]">Mar → Jul</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2 text-red-400">-1 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Linen → Clothing. Essential for Tier 2+. Plant alongside grain.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Cabbage</td><td className="px-3 py-2 text-[var(--muted)]">Mar → Jun</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2 text-[var(--muted)]">-1 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Sauerkraut storage. Longest shelf life of any preserved food.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Carrots</td><td className="px-3 py-2 text-[var(--muted)]">Mar → Aug</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2 text-[var(--muted)]">-0.5 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Root cellar storage. Fills vegetable food group. Long fresh shelf life.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Peas</td><td className="px-3 py-2 text-[var(--muted)]">Feb → Jun</td><td className="px-3 py-2">Low</td><td className="px-3 py-2 text-[var(--neon)]">+2 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Nitrogen fixer. Must include in every rotation. Restores soil after grains.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Clover</td><td className="px-3 py-2 text-[var(--muted)]">Any → Any</td><td className="px-3 py-2">None</td><td className="px-3 py-2 text-[var(--neon)]">+3 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Green manure. Plant in slot C every rotation. No harvest but restores soil.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Turnips</td><td className="px-3 py-2 text-[var(--muted)]">Apr → Jul</td><td className="px-3 py-2">Medium</td><td className="px-3 py-2 text-[var(--muted)]">-1 fertility</td><td className="px-3 py-2 text-[var(--muted)]">Livestock feed + human food. Dual-purpose crop.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The Optimal 3-Year Rotation">
          <b>Year 1:</b> A=Peas (+2 fertility), B=Wheat (-2), C=Clover (+3). Net: +3 fertility + wheat harvest.<br/>
          <b>Year 2:</b> A=Flax (-1), B=Carrots (-0.5), C=Clover (+3). Net: +1.5 fertility + linen + vegetables.<br/>
          <b>Year 3:</b> A=Cabbage (-1), B=Rye (-1), C=Clover (+3). Net: +1 fertility + sauerkraut + grain.<br/>
          This rotation maintains positive soil fertility indefinitely without fallow years.
        </Callout>
      </section>

      {/* Soil Management */}
      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🪴 Soil Fertility Management</h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { title: "Clay", desc: "Best soil type. Highest base fertility (85-100%). Build farms here first. Clay soil holds water better — less irrigation needed.", icon: "🧱" },
            { title: "Sandy Loam", desc: "Good soil. 65-85% fertility. Drains well but needs more fertilizer. Acceptable for most crops except heavy feeders like wheat.", icon: "🏖️" },
            { title: "Sand", desc: "Poor soil. Below 50% fertility. Only plant rye or use as pasture. Not worth improving — find better land.", icon: "🏜️" },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <span className="text-xl">{s.icon}</span>
              <h4 className="mt-2 text-sm font-semibold text-[var(--fg)]">{s.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>

        <Callout type="info" title="Fertilizer Math">
          Each unit of compost adds <b>+5 fertility</b> to the field for one growing season. A 10×10 field consumes 100 compost per year at base rate. Maintain 2 compost yards per 3 farm fields. <b>Never let fertility drop below 30% — yield penalty is exponential below this threshold.</b>
        </Callout>
      </section>

      {/* Livestock */}
      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🐄 Livestock Optimization</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Animal</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Feed</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Produces</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Optimal Herd</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best Setup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">🐄 Cattle</td><td className="px-3 py-2 text-[var(--muted)]">Grain + Hay</td><td className="px-3 py-2 text-[var(--muted)]">Milk, Meat, Hide</td><td className="px-3 py-2">6-8 head</td><td className="px-3 py-2 text-[var(--muted)]">Best value livestock. Milk = cheese (long shelf life). Meat = sausages. Hide = leather. Triple output animal.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">🐖 Pigs</td><td className="px-3 py-2 text-[var(--muted)]">Root vegetables</td><td className="px-3 py-2 text-[var(--muted)]">Meat, Lard</td><td className="px-3 py-2">4-6 head</td><td className="px-3 py-2 text-[var(--muted)]">Feed turnips and spoiled food. Lard = candles + soap. Best waste-to-value converter.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">🐑 Sheep</td><td className="px-3 py-2 text-[var(--muted)]">Hay</td><td className="px-3 py-2 text-[var(--muted)]">Wool, Meat</td><td className="px-3 py-2">8-10 head</td><td className="px-3 py-2 text-[var(--muted)]">Wool → Clothing. Least demanding livestock. One hay field supports 10 sheep indefinitely.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">🐔 Chickens</td><td className="px-3 py-2 text-[var(--muted)]">Grain (minimal)</td><td className="px-3 py-2 text-[var(--muted)]">Eggs, Meat</td><td className="px-3 py-2">12-16 head</td><td className="px-3 py-2 text-[var(--muted)]">Eggs = cheap protein. Fast reproduction. Slaughter excess population every autumn for meat.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Winter Livestock Survival">
          Livestock needs <b>1 unit of feed per animal per winter month</b> (Nov-Mar = 5 months). A herd of 6 cattle needs 30 feed for the winter. <b>Stockpile feed in a barn adjacent to the pasture.</b> Animals in pastures without adjacent barns die first during blizzards.
        </Callout>
      </section>

      {/* Food Preservation */}
      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏺 Food Preservation &amp; Storage</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Method</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Input</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Output</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Shelf Life</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Smokehouse</td><td className="px-3 py-2 text-[var(--muted)]">Raw Meat + Firewood</td><td className="px-3 py-2 text-[var(--muted)]">Smoked Meat</td><td className="px-3 py-2 text-[var(--neon)]">24 months</td><td className="px-3 py-2 text-[var(--muted)]">Build 2 smokehouses when you have 50+ population. Smoked meat never spoils in a root cellar.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Sauerkraut Maker</td><td className="px-3 py-2 text-[var(--muted)]">Cabbage + Salt</td><td className="px-3 py-2 text-[var(--muted)]">Sauerkraut</td><td className="px-3 py-2 text-[var(--neon)]">18 months</td><td className="px-3 py-2 text-[var(--muted)]">Highest shelf life of any vegetable product. Dedicate one field to cabbage for this.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Cheesemaker</td><td className="px-3 py-2 text-[var(--muted)]">Milk (from cattle)</td><td className="px-3 py-2 text-[var(--muted)]">Cheese</td><td className="px-3 py-2 text-[var(--neon)]">12 months</td><td className="px-3 py-2 text-[var(--muted)]">Convert excess milk before it spoils (milk spoils in 3 months).</td></tr>
              <tr><td className="px-3 py-2 font-medium">Root Cellar</td><td className="px-3 py-2 text-[var(--muted)]">Any food</td><td className="px-3 py-2 text-[var(--muted)]">Extended storage</td><td className="px-3 py-2 text-[var(--neon)]">3× base</td><td className="px-3 py-2 text-[var(--muted)]">Multiplies shelf life of all food stored inside. Build 2-3 root cellars by year 3.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Granary</td><td className="px-3 py-2 text-[var(--muted)]">Grain only</td><td className="px-3 py-2 text-[var(--muted)]">Protected grain</td><td className="px-3 py-2 text-[var(--neon)]">36 months</td><td className="px-3 py-2 text-[var(--muted)]">Grain-specific storage. Prevents rat infestation. Build next to windmill for efficiency.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Winter Survival Stockpile">
          Every colonist eats <b>~2 units of food per month</b>. Winter = 5 months. For 100 colonists: <b>1,000 food units minimum.</b> Aim for 2,000 (double) as buffer against blight and blizzard events. <b>Check food stockpile on October 1st — if below 1,500 for 100 pop, slaughter livestock immediately.</b>
        </Callout>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "How many farm fields do I need for 100 colonists?", a: "5-6 fields of 8×8 or larger. 2 wheat, 1 flax, 1 cabbage, 1 pea/clover rotation, 1 flex. Plus 2 pastures (sheep + cattle). This feeds ~120 colonists with surplus." },
            { q: "Why are my crops dying?", a: "Three common causes: (1) Soil fertility below 30% — use clover rotation and compost. (2) Frost before harvest — check the crop calendar. (3) Blight — diversify crops, blight hits monocultures hardest." },
            { q: "When should I slaughter livestock?", a: "October, before winter. Keep 1 male + 3-4 females for breeding. Slaughter excess juveniles. This reduces winter feed demand by ~40% and provides emergency meat." },
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
