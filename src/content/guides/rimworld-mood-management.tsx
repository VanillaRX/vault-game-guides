import { GuideTrans } from "@/components/guide/guide-chrome";
import { GuideText } from "@/components/guide/guide-text";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function RimWorldMoodManagement() {
  const game = GAMES.find((g) => g.slug === "rimworld")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="RimWorld" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          Mood management is the hidden difficulty slider of RimWorld. A colony with poor mood collapses from the inside —
          mental breaks cascade, colonists refuse to work, and your best crafter punches the antigrain warhead. This guide
          covers the complete mood system, room optimization for beauty and impressiveness, work priority configurations,
          and colony layout for maximum efficiency across all three storytellers.
        </p>
      </div>

      {/* Mood System */}
      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🧠 The Mood System: Complete Reference</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Mood = base mood + positive thoughts − negative thoughts. Colonists need mood ≥ 35% to avoid mental breaks. Below 15%: extreme break risk.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Thought</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Mood Effect</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Duration</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">How to Get / Counter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {/* POSITIVE */}
              <tr className="bg-[var(--neon)]/5"><td colSpan={4} className="px-3 py-2 text-[10px] font-bold uppercase text-[var(--neon)]">Positive Thoughts</td></tr>
              <tr><td className="px-3 py-2 font-medium">Ate fine meal</td><td className="px-3 py-2 text-[var(--neon)]">+5</td><td className="px-3 py-2 text-[var(--muted)]">12 hours</td><td className="px-3 py-2 text-[var(--muted)]">Fine meal requires meat/veg + veg/animal product. Build kitchen + stove.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Ate lavish meal</td><td className="px-3 py-2 text-[var(--neon)]">+12</td><td className="px-3 py-2 text-[var(--muted)]">12 hours</td><td className="px-3 py-2 text-[var(--muted)]">Lavish meal requires meat + veg + animal product. Best single mood buff from food.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Impressive bedroom</td><td className="px-3 py-2 text-[var(--neon)]">+3 to +8</td><td className="px-3 py-2 text-[var(--muted)]">Permanent</td><td className="px-3 py-2 text-[var(--muted)]">See room optimization section below. 5×5 minimum with excellent bed.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Impressive dining/recreation room</td><td className="px-3 py-2 text-[var(--neon)]">+3 to +8</td><td className="px-3 py-2 text-[var(--muted)]">Permanent</td><td className="px-3 py-2 text-[var(--muted)]">Combine dining + recreation into one room. 80+ impressiveness = +6.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Beautiful environment</td><td className="px-3 py-2 text-[var(--neon)]">+1 to +15</td><td className="px-3 py-2 text-[var(--muted)]">Permanent</td><td className="px-3 py-2 text-[var(--muted)]">Place sculptures in workspaces. Marble large sculpture = +15 beauty per tile.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Recreation satisfied</td><td className="px-3 py-2 text-[var(--neon)]">+10</td><td className="px-3 py-2 text-[var(--muted)]">Permanent</td><td className="px-3 py-2 text-[var(--muted)]">4+ recreation types available. Schedule 3 hours of recreation per day.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Comfortable</td><td className="px-3 py-2 text-[var(--neon)]">+4 to +10</td><td className="px-3 py-2 text-[var(--muted)]">Permanent</td><td className="px-3 py-2 text-[var(--muted)]">Excellent cloth armchair = 0.93 comfort. Synthread armchair = 1.0 comfort (max).</td></tr>

              {/* NEGATIVE */}
              <tr className="bg-red-500/10"><td colSpan={4} className="px-3 py-2 text-[10px] font-bold uppercase text-red-400">Negative Thoughts</td></tr>
              <tr><td className="px-3 py-2 font-medium">Ate without table</td><td className="px-3 py-2 text-red-400">−3</td><td className="px-3 py-2 text-[var(--muted)]">12 hours</td><td className="px-3 py-2 text-[var(--muted)]">Place tables within 25 tiles of all food storage. Most common mood debuff.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Slept on ground / in cold</td><td className="px-3 py-2 text-red-400">−4 to −8</td><td className="px-3 py-2 text-[var(--muted)]">12 hours</td><td className="px-3 py-2 text-[var(--muted)]">Every colonist must have a bed in a heated room. Non-negotiable.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Observed rotting corpse</td><td className="px-3 py-2 text-red-400">−5 to −12</td><td className="px-3 py-2 text-[var(--muted)]">Stacking</td><td className="px-3 py-2 text-[var(--muted)]">Build a corpse freezer 30+ tiles from main base. Cremate or butcher immediately.</td></tr>
              <tr><td className="px-3 py-2 font-medium">In pain</td><td className="px-3 py-2 text-red-400">−5 to −20</td><td className="px-3 py-2 text-[var(--muted)]">Until healed</td><td className="px-3 py-2 text-[var(--muted)]">Medicine + bed rest. Smokeleaf joint if desperate (but −30% consciousness penalty).</td></tr>
              <tr><td className="px-3 py-2 font-medium">Extreme temperature</td><td className="px-3 py-2 text-red-400">−5 to −15</td><td className="px-3 py-2 text-[var(--muted)]">Until resolved</td><td className="px-3 py-2 text-[var(--muted)]">Heaters in every room. Dusters for heat, parkas for cold. Temperature tolerance depends on apparel.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Colonist died</td><td className="px-3 py-2 text-red-400">−3 to −20</td><td className="px-3 py-2 text-[var(--muted)]">20-30 days</td><td className="px-3 py-2 text-[var(--muted)]">Preventable. Build sarcophagus in beautiful tomb. Gives +6 burial thought to offset.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The Mood Stack Formula">
          Your baseline mood should be <b>+15 or higher</b> from stacked positives. Target: +5 fine meal + 6 impressive dining/rec + 5 impressive bedroom + 10 recreation + 5 comfort + 3 beautiful environment = <b>+34 baseline.</b> This absorbs minor negatives like −3 darkness, −5 ate without table, −4 disturbed sleep without ever reaching break threshold.
        </Callout>
      </section>

      {/* Room Optimization */}
      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏠 Room Optimization: Beauty &amp; Impressiveness</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Room Type</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Minimum Size</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Target Impressiveness</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">How to Achieve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Bedroom</td><td className="px-3 py-2">5×5 (25 tiles)</td><td className="px-3 py-2">80+ (Extremely Impressive)</td><td className="px-3 py-2 text-[var(--muted)]">Marble walls + marble floor + excellent bed + normal sculpture. 5×5 rooms hit 80+ impressiveness with these materials.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Dining + Rec (Combined)</td><td className="px-3 py-2">10×10 (100 tiles)</td><td className="px-3 py-2">100+ (Unbelievably Impressive)</td><td className="px-3 py-2 text-[var(--muted)]">Single large room with both dining table + recreation items. Marble floor, 4 sculptures, excellent armchairs. The single best mood investment in the game.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Workshop</td><td className="px-3 py-2">As needed (12+ tiles/workbench)</td><td className="px-3 py-2">60+ (Very Impressive)</td><td className="px-3 py-2 text-[var(--muted)]">1 sculpture per 5 tiles of floor. Sterile tile for research/medical. Keep clean — dirt tanks impressiveness. Doormat mod or straw matting at entrances.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Hospital</td><td className="px-3 py-2">8×8+ (64+ tiles)</td><td className="px-3 py-2">60+</td><td className="px-3 py-2 text-[var(--muted)]">Sterile tile mandatory. Hospital bed + vitals monitor. Connected to medicine storage. Cleanliness 0.60+ for infection prevention.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Temple / Throne Room</td><td className="px-3 py-2">As required by title</td><td className="px-3 py-2">60-160 (title-dependent)</td><td className="px-3 py-2 text-[var(--muted)]">Marble everything. Best sculptures in the colony. Column spacing = every 6 tiles for max beauty.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Prison</td><td className="px-3 py-2">3×4 per cell</td><td className="px-3 py-2">0+ (not −)</td><td className="px-3 py-2 text-[var(--muted)]">Table + stool + bed per cell. Wood floor minimum. Higher mood = faster recruitment. Don&apos;t make impressive or they won&apos;t want to leave.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="Impressiveness Formula">
          Room impressiveness = weighted average of Wealth + Beauty + Space + Cleanliness. <b>Space is the cheapest stat to boost — a bigger room dramatically increases impressiveness with zero material cost.</b> For the same wealth investment, a 7×7 room scores 40% higher impressiveness than a 5×5 room.
        </Callout>
      </section>

      {/* Work Priority */}
      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📋 Work Priority: The 1-2-3-4 System</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Priority</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Job Type</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Who Gets It</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-bold text-red-400">1</td><td className="px-3 py-2">Firefight, Patient, Doctor, Bed Rest</td><td className="px-3 py-2">Everyone</td><td className="px-3 py-2 text-[var(--muted)]">Emergency response. Firefighting and medical treatment override everything. A burning stockpile kills the colony faster than a missed crafting order.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-[var(--amber)]">2</td><td className="px-3 py-2">Warden, Handle (animals)</td><td className="px-3 py-2">Designated wardens, handlers</td><td className="px-3 py-2 text-[var(--muted)]">Prisoner recruitment takes days — missed warden time extends recruitment by weeks. Animals starve if not handled daily.</td></tr>
              <tr><td className="px-3 py-2 font-bold">3</td><td className="px-3 py-2">Cooking, Growing, Construction</td><td className="px-3 py-2">Dedicated specialists</td><td className="px-3 py-2 text-[var(--muted)]">Core colony functions. 1-2 colonists with these as priority 3 (their main job). Never assign cooking to everyone — food poisoning from low skill cooks is a colony-killer.</td></tr>
              <tr><td className="px-3 py-2">4</td><td className="px-3 py-2">Crafting, Smithing, Tailoring</td><td className="px-3 py-2">Dedicated crafters (skill 10+)</td><td className="px-3 py-2 text-[var(--muted)]">Production. Set &apos;Do until you have X&apos; bills so crafting doesn&apos;t waste resources. Only high-skill colonists craft — quality matters more than quantity.</td></tr>
              <tr><td className="px-3 py-2">—</td><td className="px-3 py-2 text-[var(--muted)]">Hauling, Cleaning</td><td className="px-3 py-2">Everyone (priority 4)</td><td className="px-3 py-2 text-[var(--muted)]">Background jobs. Every colonist hauls and cleans as their lowest priority. Hauling animals (dogs, huskies) reduce hauling labor by 60%.</td></tr>
              <tr><td className="px-3 py-2">—</td><td className="px-3 py-2 text-[var(--muted)]">Research</td><td className="px-3 py-2">1-2 dedicated researchers</td><td className="px-3 py-2 text-[var(--muted)]">Priority 3 for researchers, nothing else assigned. Research speed scales with skill — a level 15 researcher is 4× faster than level 5.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The Specialist System">
          Every colonist should have <b>exactly 2-3 jobs at priority 3, nothing at 4 except haul/clean.</b> A colonist with 6 jobs at priority 3 does everything poorly. Example: &quot;Crafter&quot; = Crafting 3, Smithing 3, Tailoring 3, Haul 4. &quot;Farmer&quot; = Growing 3, Plant Cut 3, Construction 3 (for repairs), Haul 4. This prevents job-switching overhead — a colonist switching workbenches costs 2+ seconds each time.
        </Callout>
      </section>

      {/* Colony Layout */}
      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏗️ Colony Layout for Maximum Efficiency</h2>

        <div className="mt-3 space-y-3">
          {[
            { zone: "Freezer + Kitchen Complex", desc: "The most important layout decision. <b>Freezer adjacent to kitchen, both adjacent to dining room.</b> Cook takes ingredients from freezer (2 tiles away), cooks meal, drops in dining room. <b>Separate butcher table in its own room</b> — butchering creates filth that contaminates meals. 2-tile airlock (door-space-door) on freezer entrance prevents cold loss.", rule: "Freezer → 2 tiles → Kitchen → 2 tiles → Dining Room. Butcher in separate building." },
            { zone: "Hospital + Medicine Storage", desc: "Hospital adjacent to medicine storage, adjacent to the killbox entrance. <b>Injured colonists dragged from the killbox should reach a hospital bed in under 30 tiles.</b> Each bed needs a vitals monitor (adjacent). 1 medicine shelf per 2 beds. Sterile tile on ALL hospital floor tiles — any non-sterile tile reduces room cleanliness.", rule: "Killbox entrance → 20-30 tiles → Hospital with vitals monitors + sterile tile." },
            { zone: "Workshop Hub", desc: "All workbenches in one large room with 2 tool cabinets (effect caps at 2). <b>Tool cabinets give +6% work speed each (max +12%) to all benches in the room.</b> Place the fabrication bench centrally — it&apos;s the heaviest-used bench. Sculptor&apos;s table near stone stockpile. Tailor bench near textiles stockpile. 1 sculpture per 25 tiles maintains beautiful environment.", rule: "One large room with 2 tool cabinets. Stockpiles adjacent to corresponding workbenches." },
            { zone: "Bedroom Block", desc: "5×5 individual bedrooms arranged in a 2-row block. <b>Central heating corridor</b> — one heater in the corridor vents into all bedrooms (vents connect rooms). This saves 1 heater per bedroom. Marble walls + marble floor + excellent bed + small sculpture = 80+ impressiveness. Double-thick walls on the outer edge for insulation.", rule: "2 rows of 5×5 bedrooms flanking a 2-wide heating corridor. Marble everything." },
          ].map((item) => (
            <div key={item.zone} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-5">
              <h4 className="text-sm font-bold text-[var(--neon)]">{item.zone}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--fg)]/80" dangerouslySetInnerHTML={{ __html: item.desc }} />
              <div className="mt-2 rounded bg-[var(--accent)]/5 px-3 py-1.5 text-[10px] text-[var(--accent)] font-mono">
                📐 {item.rule}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Storyteller differences */}
      <section id="section-4">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📖 Storyteller-Specific Mood Strategies</h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { name: "Cassandra Classic", desc: "Predictable ramp. Raids and events roughly every 10 days. Mood strategy: build up during the quiet week, recover during the post-raid safe period. <b>Keep 50 lavish meals stockpiled</b> — serve them for 3 days after each raid to counter the 'observed corpse' and 'colonist died' mood bombs. Drug policy: beer (1/day if mood &lt;40%), psychite tea (1/3 days), smokeleaf only for emergencies.", icon: "📊" },
            { name: "Phoebe Chillax", desc: "Long peaceful stretches, then back-to-back disasters. Mood strategy: <b>don&apos;t get complacent during peace.</b> Phoebe can send 3 raids in 5 days after 40 days of nothing. Build mood buffer during peace (impressive rooms, lavish meals ready). The long peace depletes your combat readiness — your mood will be high but your colonists will be rusty. Prepare defenses during peace, not during the crisis.", icon: "🌿" },
            { name: "Randy Random", desc: "Pure chaos. Can send a raid, solar flare, and manhunting squirrels simultaneously. Mood strategy: <b>redundancy over optimization.</b> Two separate dining rooms (in case one gets destroyed). Two power grids (solar + geothermal). <b>Emergency mood protocol:</b> stockpile chocolate (recreation + mood, no downsides), keep yayo for extreme emergencies (mood boost + consciousness, but addiction risk). Psychic soothe pulsers are worth triple their market value.", icon: "🎲" },
          ].map((s) => (
            <div key={s.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <span className="text-xl">{s.icon}</span>
              <h4 className="mt-2 text-sm font-semibold text-[var(--fg)]">{s.name}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: s.desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "My colonists keep having mental breaks. What&apos;s the #1 fix?", a: "Build one impressive combined dining + recreation room. Marble floor, 4 sculptures, excellent armchairs. This gives +6 mood to every colonist twice per day (when eating + when recreating). Single highest ROI mood investment." },
            { q: "How do I prevent 'ate without table'?", a: "Colonists search for a table within 25 tiles of where they pick up food. Place a 1×2 table + 2 stools in your freezer entrance, near the meal stack. Also place tables near mining sites and killbox entrances (colonists eat on the go during long fights)." },
            { q: "Best drug policy for mood management?", a: "Beer: 1/day if mood &lt;35%. Psychite tea: 1 every 3 days (zero addiction risk at this interval). Ambrosia: whenever available (no downsides). Avoid smokeleaf (−30% consciousness = worse at everything). Never use yayo or flake for mood — addiction risk is too high." },
            { q: "How important is cleanliness?", a: "Critical for kitchen (food poisoning) and hospital (infection). Kitchen cleanliness below −2 = significant food poison chance. Hospital cleanliness below 0.60 = infection risk. Sterile tile in both. Doormats or straw matting at entrances reduce tracked-in dirt by 80%." },
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
