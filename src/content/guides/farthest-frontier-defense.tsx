import { GuideTrans } from "@/components/guide/guide-chrome";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function FarthestFrontierDefense() {
  const game = GAMES.find((g) => g.slug === "farthest-frontier")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Farthest Frontier" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          Raiders in Farthest Frontier scale with your population and wealth. A 200-pop town with gold vaults attracts
          raids of 40+ raiders with battering rams. Without proper walls, towers, and troop management, your colony
          falls in minutes. This guide covers wall engineering, tower placement, troop management, disease control,
          and the complete defense progression from wooden palisades to stone fortresses.
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏰 Wall Engineering: Palisade to Fortress</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Wall Type</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">HP</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Cost/Tile</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Raider Protection</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">When to Build</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">Wooden Palisade</td><td className="px-3 py-2">200</td><td className="px-3 py-2">2 logs</td><td className="px-3 py-2 text-[var(--muted)]">Blocks melee raiders. Archers shoot through gaps. Battering ram breaks in 4 hits.</td><td className="px-3 py-2">Year 1-2: 30+ population</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Stone Wall</td><td className="px-3 py-2 text-[var(--neon)]">800</td><td className="px-3 py-2">3 stone</td><td className="px-3 py-2 text-[var(--muted)]">Blocks all melee. Battering ram needs 16 hits. Immune to fire arrows.</td><td className="px-3 py-2">Year 3-4: 80+ population</td></tr>
              <tr><td className="px-3 py-2">Fortified Stone Wall</td><td className="px-3 py-2 text-[var(--neon)]">1,500</td><td className="px-3 py-2">3 stone + 1 iron</td><td className="px-3 py-2 text-[var(--muted)]">Battering ram needs 30 hits. Trebuchet-resistant. Adds cover bonus for defenders on battlements.</td><td className="px-3 py-2">Year 5+: 150+ population</td></tr>
              <tr><td className="px-3 py-2 font-medium">Gate</td><td className="px-3 py-2">400-1000</td><td className="px-3 py-2">4 planks + 2 iron</td><td className="px-3 py-2 text-[var(--muted)]">Weakest point. Always the first target. Double-gate design: outer gate → 3-tile corridor → inner gate.</td><td className="px-3 py-2">Immediately after walls</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The Double Gate Kill Corridor">
          Build: Outer Gate → 3-tile-wide corridor that runs 10 tiles deep → Inner Gate. On both sides of the corridor, build <b>towers at Z+1 with archers</b>. When raiders break the outer gate and flood into the corridor, your archers shoot down from both sides. No raider survives a 10-tile corridor with 6 archers on each side.
        </Callout>
      </section>

      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🗼 Tower Placement: The Overwatch System</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Tower Type</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Range</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Garrison</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best Placement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Watchtower</td><td className="px-3 py-2">40 tiles</td><td className="px-3 py-2">3 archers</td><td className="px-3 py-2 text-[var(--muted)]">Every 30 tiles along the outer wall. Provides overlapping coverage — each wall section covered by 2 towers.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Stone Tower</td><td className="px-3 py-2">50 tiles</td><td className="px-3 py-2">5 archers</td><td className="px-3 py-2 text-[var(--muted)]">Corners of the wall. Covers two wall sections simultaneously. Also flanking the gate corridor.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Fortified Tower</td><td className="px-3 py-2">60 tiles</td><td className="px-3 py-2">8 soldiers (archers or crossbowmen)</td><td className="px-3 py-2 text-[var(--muted)]">Critical chokepoint coverage. 1 per every 2 stone towers. Place at the gatehouse and at wall corners facing the expected raid direction.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Tower Spacing Rule">
          Towers must have <b>overlapping fields of fire</b>. If Tower A has range 40 and Tower B has range 40, place them no more than 35 tiles apart. This ensures every raider approaching the wall is in range of at least two towers at all times. Against heavily armored raiders, single-tower DPS is insufficient.
        </Callout>
      </section>

      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">⚔️ Troop Composition &amp; Management</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Unit</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Equipment</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Role</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best Against</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Pop Ratio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">🏹 Archer</td><td className="px-3 py-2 text-[var(--muted)]">Bow + Leather Armor</td><td className="px-3 py-2">Ranged DPS from towers</td><td className="px-3 py-2">Light armor, unshielded raiders</td><td className="px-3 py-2">1 per 15 pop</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏹 Crossbowman</td><td className="px-3 py-2 text-[var(--muted)]">Crossbow + Chainmail</td><td className="px-3 py-2">Heavy ranged, armor-piercing</td><td className="px-3 py-2 text-[var(--neon)]">Heavy armor, shielded raiders, battering ram crews</td><td className="px-3 py-2">1 per 25 pop</td></tr>
              <tr><td className="px-3 py-2 font-medium">⚔️ Soldier</td><td className="px-3 py-2 text-[var(--muted)]">Sword + Shield + Plate Armor</td><td className="px-3 py-2">Frontline melee</td><td className="px-3 py-2">Any raiders that breach the wall</td><td className="px-3 py-2">2 per 50 pop (minimum 4)</td></tr>
              <tr><td className="px-3 py-2 font-medium">🛡️ Spearman</td><td className="px-3 py-2 text-[var(--muted)]">Spear + Shield + Chainmail</td><td className="px-3 py-2">Anti-cavalry, gate defense</td><td className="px-3 py-2">Mounted raiders, battering rams</td><td className="px-3 py-2 text-[var(--muted)]">Situational (see mounted raids)</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Garrison Rotation">
          Keep <b>50% of archers on towers at all times</b>. The other 50% work as normal (farmers, laborers). When the raid horn sounds, pause, select all garrison-capable colonists, and click "Garrison" on their nearest tower. A 200-pop town should have 13 archers ready within 30 seconds. Practice this drill — the difference between 5 archers and 13 archers on the wall is the difference between repelling a raid and losing the gate.
        </Callout>
      </section>

      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🦠 Disease Control &amp; Sanitation</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Disease</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Cause</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Mortality</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Prevention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-red-400 font-medium">Dysentery</td><td className="px-3 py-2 text-[var(--muted)]">Contaminated water. Well within 10 tiles of outhouse or animal pen.</td><td className="px-3 py-2">10-30%</td><td className="px-3 py-2 text-[var(--muted)]">Place wells 20+ tiles from waste sources. Upgrade outhouses to latrines by year 2.</td></tr>
              <tr><td className="px-3 py-2 text-red-400 font-medium">Plague</td><td className="px-3 py-2 text-[var(--muted)]">Rat infestation in granaries and root cellars.</td><td className="px-3 py-2 text-red-400">30-60%</td><td className="px-3 py-2 text-[var(--muted)]">Build rat catchers near all food storage. Keep 200+ medicine stockpiled. Quarantine infected colonists in hospital.</td></tr>
              <tr><td className="px-3 py-2 text-red-400 font-medium">Scurvy</td><td className="px-3 py-2 text-[var(--muted)]">No fruit/vegetable food group for 2+ months.</td><td className="px-3 py-2">5-15%</td><td className="px-3 py-2 text-[var(--muted)]">Diversify food: always have 1 vegetable crop + 1 fruit orchard active. Sauerkraut provides vitamin C.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Tetanus</td><td className="px-3 py-2 text-[var(--muted)]">Untreated wounds. Dirty hospital.</td><td className="px-3 py-2">5-10%</td><td className="px-3 py-2 text-[var(--muted)]">Stock medicine (1 per colonist). Build hospital with 2+ beds by year 2. Assign a dedicated doctor (priority 2).</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="danger" title="Plague Can Wipe a Colony">
          Plague is the most dangerous event in Farthest Frontier. It spreads from colonist to colonist through proximity. <b>Immediate protocol:</b> pause game. Build a quarantine hospital (separate building, 15+ tiles from town). Move all infected colonists there. Move all healthy colonists to the opposite side of town. Treat with Medicine. Burn contaminated food. Plague spreads through the food supply — infected food in the market = everyone gets it.
        </Callout>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "When should I build my first wall?", a: "Year 2, when population hits 50. Start with a wooden palisade enclosing your core buildings (granary, storehouse, market, root cellar). Expand and upgrade to stone by year 4." },
            { q: "How many soldiers do I need?", a: "10% of population should be garrison-ready. A 200-pop town needs 20 archers/crossbowmen + 4 soldiers. Maintain arms and armor for all of them in the armory — unequipped soldiers are worse than no soldiers." },
            { q: "Best defense against battering rams?", a: "Crossbowmen on towers flanking the gate. They have armor-piercing bolts — 4 crossbowmen can kill a battering ram crew before the gate breaks. Also: build the gate on a hill — rams move slower uphill, giving your archers 40% more shooting time." },
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
