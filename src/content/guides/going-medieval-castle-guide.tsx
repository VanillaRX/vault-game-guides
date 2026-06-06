import { GuideTrans } from "@/components/guide/guide-chrome";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function GoingMedievalCastleGuide() {
  const game = GAMES.find((g) => g.slug === "going-medieval")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Going Medieval" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          Your castle is your colony&apos;s last line of defense. A well-designed fortress turns a 20-man raid into target practice.
          A poorly designed one turns your settlers into loot. This guide covers layered defense design, material engineering,
          settler mood management, and winter survival — everything you need to survive and thrive in a post-Calamity medieval world.
        </p>
      </div>

      {/* Castle Design */}
      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏰 Layered Defense Architecture</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Going Medieval&apos;s Z-level system allows true vertical defense. Each layer serves a purpose.</p>

        <div className="mt-3 space-y-3">
          {[
            { layer: "1. Outer Curtain Wall", desc: "2 tiles thick, 3 Z-levels high. <b>Limestone or granite only.</b> No doors at ground level — enemies will break them in 30 seconds. Access from battlements via ladders (enemies can&apos;t climb ladders in combat). Leave a 3-tile gap between outer and inner walls — this is your kill zone.", tip: "Merlons (the raised parts of battlements) give settlers +75% cover. Alternate merlon-merlon-merlon-gap for maximum firing angles." },
            { layer: "2. Inner Killing Field", desc: "The 3-tile gap between walls. <b>Fill with wooden traps and nothing else.</b> No trees, no rocks, no cover. Raiders entering this zone are exposed to archers on BOTH the outer and inner wall simultaneously — crossfire doubles DPS.", tip: "Place traps on every tile. A raider crossing a 3×10 killing field triggers 30 traps. Even heavy armor raiders die in 15-20 traps." },
            { layer: "3. Inner Wall + Gatehouse", desc: "3 tiles thick, 4+ Z-levels high. <b>Your gatehouse is the only ground-level entrance.</b> Build a 1-tile-wide corridor through it. Line the corridor ceiling with murder holes (floor grates) — settlers on Z+1 drop rocks through them. A 5-tile corridor with murder holes kills 90% of raiders before they reach the inner door.", tip: "The inner gatehouse door should be <b>iron-reinforced</b> with 2 layers (door-wall-door). If the first door breaks, retreat behind the second while archers finish from above." },
            { layer: "4. The Keep (Last Stand)", desc: "The innermost building. Store emergency food, medicine, and backup weapons here. <b>3 Z-levels minimum, 3-tile-thick walls.</b> Central staircase with barricades on every landing. If raiders reach the keep, it&apos;s a fighting retreat up the tower. Your best melee settlers hold each landing.", tip: "Keep a stockpile of 500 preserved food + 200 bandages in the keep. If the outer defenses fall, your colony can survive a 10-day siege inside the keep." },
          ].map((item) => (
            <div key={item.layer} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-5">
              <h4 className="text-sm font-bold text-[var(--neon)]">{item.layer}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--fg)]/80" dangerouslySetInnerHTML={{ __html: item.desc }} />
              <div className="mt-2 rounded-lg bg-[var(--accent)]/10 px-3 py-1.5 border border-[var(--accent)]/20">
                <span className="text-[10px] font-semibold text-[var(--accent)]">💡 {item.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🧱 Wall Material Engineering</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Material</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">HP</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Build Time</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Limestone</td><td className="px-3 py-2">400</td><td className="px-3 py-2 text-[var(--muted)]">Medium</td><td className="px-3 py-2 text-[var(--muted)]">Best all-around. Abundant, high HP, fast to build. Use for outer walls and gatehouse.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Granite</td><td className="px-3 py-2 text-[var(--neon)]">600</td><td className="px-3 py-2 text-[var(--muted)]">Long</td><td className="px-3 py-2 text-[var(--muted)]">Highest HP. Use for the keep and inner gatehouse. Scarcer than limestone — prioritize critical structures.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Clay Brick</td><td className="px-3 py-2">300</td><td className="px-3 py-2 text-[var(--muted)]">Medium</td><td className="px-3 py-2 text-[var(--muted)]">Interior walls, settler rooms. Don&apos;t use for external defense — too fragile. Good insulation for bedrooms.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Wood</td><td className="px-3 py-2 text-red-400">150</td><td className="px-3 py-2 text-[var(--muted)]">Fast</td><td className="px-3 py-2 text-[var(--muted)]">Temporary walls in year 1. Replace ALL wood walls with stone by year 2. Trebuchets one-shot wood.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Never Use Wood for External Walls">
          A single trebuchet shot destroys a wood wall instantly. Siege raiders arrive with trebuchets around year 3-4. If your outer wall is still wood when they arrive, <b>you lose the colony</b>. Upgrade to limestone by year 2 at the latest.
        </Callout>
      </section>

      {/* Settler Psychology */}
      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🧠 Settler Mood &amp; Psychology</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Need</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Mood Impact</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">How to Satisfy</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Critical?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">Hunger</td><td className="px-3 py-2 text-red-400">-30 (severe)</td><td className="px-3 py-2 text-[var(--muted)]">3 food types in storage. Lavish meals if possible.</td><td className="px-3 py-2 text-red-400">⚠️ Critical</td></tr>
              <tr><td className="px-3 py-2 font-medium">Sleep</td><td className="px-3 py-2 text-red-400">-20</td><td className="px-3 py-2 text-[var(--muted)]">Individual bedrooms (5×5 minimum). No barracks past year 2 — shared rooms = mood penalty.</td><td className="px-3 py-2 text-red-400">⚠️ Critical</td></tr>
              <tr><td className="px-3 py-2 font-medium">Temperature</td><td className="px-3 py-2">-15</td><td className="px-3 py-2 text-[var(--muted)]">Brazier in every room. Double-thick walls for insulation. Underground rooms stay 10°C warmer in winter.</td><td className="px-3 py-2">Medium</td></tr>
              <tr><td className="px-3 py-2 font-medium">Clothing</td><td className="px-3 py-2">-10</td><td className="px-3 py-2 text-[var(--muted)]">Linen clothing (tier 1) → Leather (tier 2) → Fur-lined (tier 3 for winter). Assign warm clothes in autumn.</td><td className="px-3 py-2">Medium</td></tr>
              <tr><td className="px-3 py-2 font-medium">Recreation</td><td className="px-3 py-2">-5</td><td className="px-3 py-2 text-[var(--muted)]">Prayer spot → Shrine → Chapel. Schedule 2 hours of recreation per day. Chess table in common room.</td><td className="px-3 py-2">Low</td></tr>
              <tr><td className="px-3 py-2 font-medium">Beauty</td><td className="px-3 py-2">-5</td><td className="px-3 py-2 text-[var(--muted)]">Stone floors, tapestries on walls, statues in common areas. Wood floors give +2 beauty per tile.</td><td className="px-3 py-2">Low</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Mood Cascade Prevention">
          One settler with severe mood debuffs can start a fistfight → injures another settler → their mood drops → more fights. <b>This is a mood cascade.</b> Prevent it by: (1) Never letting food drop below 3 days supply. (2) Isolating settlers with &lt;20% mood in a locked room with meals until they recover. (3) Scheduling recreation time after combat — post-raid PTSD is real.
        </Callout>
      </section>

      {/* Winter */}
      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">❄️ Winter Survival Guide</h2>

        <div className="mt-3 space-y-2">
          {[
            { step: "September", action: "<b>Harvest all crops.</b> Plant nothing after September 15th — frost kills seedlings. Move livestock into covered barns (heated with braziers). Stockpile 2× winter firewood." },
            { step: "October", action: "<b>Slaughter excess livestock.</b> Keep 1 male + 3 females. Switch all settlers to winter clothing. Double-check food stockpile: 3,000 units for 10 settlers (generous buffer for 5-month winter)." },
            { step: "November-March", action: "<b>Underground living.</b> Move all work indoors: crafting, smithing, tailoring. Outdoor work is lethal below -10°C. Settlers exposed to -20°C for 2+ hours get hypothermia (permanent health damage). Use the winter to craft and research." },
            { step: "April", action: "<b>Spring thaw.</b> Check for frost-damaged walls. Repair before raiders arrive (spring raids start in May). Plant peas first (earliest planting — February) then wheat in March. Don&apos;t overplant — you need labor for repairs too." },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <span className="text-xs font-bold text-[var(--neon)] w-16 shrink-0">{item.step}</span>
              <p className="text-xs leading-relaxed text-[var(--fg)]/80" dangerouslySetInnerHTML={{ __html: item.action }} />
            </div>
          ))}
        </div>

        <Callout type="danger" title="The First Winter Kills Most Colonies">
          New players consistently underestimate winter food demand. <b>10 settlers × 2 meals/day × 150 days = 3,000 food.</b> If you have fewer than 2,000 food on November 1st, start slaughtering livestock and hunting every animal on the map. Better to lose your herd than your colony.
        </Callout>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "How thick should my outer wall be?", a: "2 tiles minimum. 3 tiles for sections facing the most common raid direction. At 3 tiles, trebuchets take 40+ shots to breach — enough time for your archers to kill the crew." },
            { q: "Why do my settlers keep having mental breaks?", a: "Check mood tab (click settler → mood). Most common causes: shared bedrooms (build individual rooms), eating raw food (build a kitchen), or no recreation time (schedule 2 hours of 'Anything' per day)." },
            { q: "Best killbox design for Going Medieval?", a: "Unlike RimWorld, Going Medieval killboxes need verticality. A covered trench (3 tiles deep) in front of your gatehouse, lined with traps, with archers on battlements 2 Z-levels above. Raiders can&apos;t shoot up at a 45° angle — you&apos;re immune to return fire." },
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
