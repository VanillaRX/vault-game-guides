import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function Civ6DistrictGuide() {
  const game = GAMES.find((g) => g.slug === "civilization-6")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Civilization VI" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          District placement is the most important skill in Civilization VI. Every district generates yields based on
          <b>adjacent terrain, features, and other districts</b>. A +4 Campus doubles to +8 with the right policy card. A +6
          Industrial Zone becomes +12 and then radiates that production to every city within 6 tiles through the
          Factory and Power Plant. This is the complete reference for every district&apos;s adjacency math.
        </p>
      </div>

      {/* ─── CAMPUS ─── */}
      <section id="campus">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏛️ Campus (Science)</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Unlocked: Writing. Best civilizations: Korea, Maya, Australia, Scotland, Arabia.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacent Feature</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Bonus</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Mountain</td><td className="px-3 py-2">+1 <span className="text-[var(--neon)]">🔬</span></td><td className="px-3 py-2 text-[var(--muted)]">Per adjacent mountain tile. No limit. The most reliable adjacency source.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Reef</td><td className="px-3 py-2">+2 <span className="text-[var(--neon)]">🔬</span></td><td className="px-3 py-2 text-[var(--muted)]">Coastal tile. Counts as both mountain adjacency AND a feature. Extremely valuable — a campus between 2 reefs = +4 base.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Geothermal Fissure</td><td className="px-3 py-2">+2 <span className="text-[var(--neon)]">🔬</span></td><td className="px-3 py-2 text-[var(--muted)]">Rare terrain feature. +1 Amenity if improved. +2 science adjacency. Top-tier campus tile.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Rainforest</td><td className="px-3 py-2">+1 <span className="text-[var(--neon)]">🔬</span></td><td className="px-3 py-2 text-[var(--muted)]">Per 2 adjacent rainforest tiles. Half-value adjacency. Better for Brazil.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Government Plaza</td><td className="px-3 py-2">+1 <span className="text-[var(--neon)]">🔬</span></td><td className="px-3 py-2 text-[var(--muted)]">Standard district adjacency (+1 for every 2 districts adjacent, including this one).</td></tr>
              <tr><td className="px-3 py-2 font-medium">Other Districts</td><td className="px-3 py-2">+1 <span className="text-[var(--neon)]">🔬</span></td><td className="px-3 py-2 text-[var(--muted)]">Standard minor adjacency. Per 2 adjacent districts. Campus + City Center = +0.5.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Campus Placement Priority">
          <b>Goal: +3 adjacency minimum.</b> The ideal campus: surrounded by 3 mountains and 1 reef = +5 base (+10 with Natural Philosophy). Settle cities specifically at the base of mountain clusters. One +5 campus with Pingala (Researcher) is worth 3 mediocre campuses.
        </Callout>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { name: "Mountain Campus", adj: "+3 to +6", desc: "Campus adjacent to 3-6 mountains. Easiest setup. Look for mountain ranges when scouting." },
            { name: "Reef Campus", adj: "+4 to +8", desc: "Campus between 2 reefs on coast. Reefs give +2 each. Mausoleum at Halicarnassus bonus adjacency." },
            { name: "Fissure Campus", adj: "+4 to +6", desc: "Campus between 2 geothermal fissures. Rare but incredibly powerful if you can find it. Place immediately." },
          ].map((c) => (
            <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <h4 className="text-sm font-semibold text-[var(--neon)]">{c.name}</h4>
              <p className="mt-1 text-[10px] font-mono text-[var(--muted)]">{c.adj}</p>
              <p className="mt-2 text-xs text-[var(--fg)]/75">{c.desc}</p>
            </div>
          ))}
        </div>

        <Callout type="info" title="Policy Cards">
          <b>Natural Philosophy</b> (Economic, unlocks at Recorded History): Doubles Campus adjacency bonus. <b>Five-Year Plan</b> (Economic, Class Struggle civic): Doubles Campus AND Industrial Zone adjacency. <b>Rationalism</b> (Economic, The Enlightenment): Campuses with +3 adjacency OR 10+ population get +100% science from buildings.
        </Callout>
      </section>

      {/* ─── INDUSTRIAL ZONE ─── */}
      <section id="iz">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--amber)]">⚒️ Industrial Zone (Production)</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Unlocked: Apprenticeship. Best civs: Germany, Japan, Netherlands, Gaul.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacent Feature</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Bonus</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Aqueduct</td><td className="px-3 py-2">+2 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">The strongest IZ adjacency. Must connect city center to fresh water or mountain. Place BEFORE IZ.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Dam</td><td className="px-3 py-2">+2 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">Must be on Floodplains, adjacent to river on 2+ sides. Only one per river. Place before IZ.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)] font-medium">Canal</td><td className="px-3 py-2">+2 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">Connects water bodies or city centers. Unlocked at Steam Power. Niche — only for +7+ IZs.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Strategic Resource</td><td className="px-3 py-2">+1 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">Per adjacent strategic resource tile (Iron, Niter, Coal, Oil, Aluminum, Uranium).</td></tr>
              <tr><td className="px-3 py-2 font-medium">Mine</td><td className="px-3 py-2">+1 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">Per 2 adjacent mines. Half-value. Build mines around your IZ after placing the district.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Quarry</td><td className="px-3 py-2">+1 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">Per 2 adjacent quarries. Same half-value rule as mines.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Other District</td><td className="px-3 py-2">+1 <span className="text-[var(--amber)]">⚙️</span></td><td className="px-3 py-2 text-[var(--muted)]">Per 2 adjacent districts. Government Plaza, Commercial Hub, and Campus are common companions.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The IZ-Aqueduct-Dam Triangle">
          An IZ flanked by an <b>Aqueduct (+2)</b> and <b>Dam (+2)</b> = <b>+4 base adjacency</b>. With Craftsmen policy (+100%) = <b>+8 production</b>. Add a Coal Power Plant and the <b>regional production bonus is +8 to every city within 6 tiles</b>. If you do this in 3 adjacent cities, each IZ gets adjacency from its own Aqueduct + Dam PLUS the neighboring city&apos;s Aqueduct for +6 to +8 base.
        </Callout>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {[
            { tier: "Standard", adj: "+4 base → +8", desc: "IZ between 1 Aqueduct + 1 Dam. Every city should aim for this. Minimum acceptable adjacency." },
            { tier: "Advanced", adj: "+7 base → +14", desc: "IZ touching 2 Aqueducts (from 2 cities), 1 Dam, and 1 strategic resource. City clustering required." },
            { tier: "Germany God", adj: "+12 base → +24", desc: "3 Hansas touching 4 Commercial Hubs, 2 Aqueducts, 2 Dams. Requires 3-city triangle with perfect terrain." },
          ].map((c) => (
            <div key={c.tier} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <span className="rounded bg-[var(--accent)]/20 px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">{c.tier}</span>
              <p className="mt-2 text-[10px] font-mono text-[var(--fg)]/60">{c.adj}</p>
              <p className="mt-2 text-xs text-[var(--fg)]/75">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── THEATER SQUARE ─── */}
      <section id="theater">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--accent)]">🎭 Theater Square (Culture)</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Unlocked: Drama and Poetry. Best civs: Greece, Sweden, Kongo, China (Qin Mandate).</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacent Feature</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Bonus</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--accent)] font-medium">World Wonder</td><td className="px-3 py-2">+2 <span className="text-[var(--accent)]">🎵</span></td><td className="px-3 py-2 text-[var(--muted)]">Per adjacent wonder (any wonder, any era). Stack multiple wonders around a single Theater Square.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--accent)] font-medium">Entertainment Complex</td><td className="px-3 py-2">+2 <span className="text-[var(--accent)]">🎵</span></td><td className="px-3 py-2 text-[var(--muted)]">+2 major adjacency. Also gives +1 Amenity to city. Good pairing with wonder-adjacent Theater Squares.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--accent)] font-medium">Water Park</td><td className="px-3 py-2">+2 <span className="text-[var(--accent)]">🎵</span></td><td className="px-3 py-2 text-[var(--muted)]">Coastal equivalent of Entertainment Complex. +2 adjacency. Unlocked at Natural History (later).</td></tr>
              <tr><td className="px-3 py-2 font-medium">Other Districts</td><td className="px-3 py-2">+1 <span className="text-[var(--accent)]">🎵</span></td><td className="px-3 py-2 text-[var(--muted)]">Standard minor adjacency. Per 2 adjacent districts. Harder to stack than other specialty districts.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Wonder Clustering">
          The Theater Square is the hardest district to get high adjacency on. The key: <b>cluster 2-3 wonders around a single tile</b> and place the Theater Square there. Oracle (+2), Apadana (+2), and Colosseum (+2 around one tile gives +6 base adjacency. Add Aesthetics policy (+100%) for +12.
        </Callout>
      </section>

      {/* ─── HOLY SITE ─── */}
      <section id="holy">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">⛪ Holy Site (Faith)</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Unlocked: Astrology. Best civs: Russia, Arabia, Byzantium, Khmer, Mali, Ethiopia.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacent Feature</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Bonus</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">Mountain</td><td className="px-3 py-2">+1 🙏</td><td className="px-3 py-2 text-[var(--muted)]">Per adjacent mountain. Same as Campus. Tundra mountains are Russia&apos;s specialty.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Natural Wonder</td><td className="px-3 py-2">+2 🙏</td><td className="px-3 py-2 text-[var(--muted)]">Per adjacent natural wonder tile. Some wonders are 2+ tiles — adjacency per tile.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Woods</td><td className="px-3 py-2">+1 🙏</td><td className="px-3 py-2 text-[var(--muted)]">Per 2 adjacent woods tiles. Brazil gets +1 per woods (not per 2). Dance of the Aurora (pantheon) gives +1 per adjacent tundra.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Other Districts</td><td className="px-3 py-2">+1 🙏</td><td className="px-3 py-2 text-[var(--muted)]">Standard minor adjacency. Per 2 adjacent districts.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Pantheon Picks by Adjacency">
          <b>Dance of the Aurora:</b> +1 faith per adjacent tundra. Russia Lavra on tundra: +6/+7 base adjacency before Scripture. <b>Desert Folklore:</b> +1 faith per adjacent desert. Mali can hit +8 easily. <b>Sacred Path:</b> +1 faith per adjacent rainforest. Brazil gets double value.
        </Callout>
      </section>

      {/* ─── COMMERCIAL HUB ─── */}
      <section id="comm">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">💰 Commercial Hub (Gold)</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Unlocked: Currency. Best civs: Mali, Portugal, Netherlands, Germany (for Hansa adjacency).</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacent Feature</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Bonus</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">River</td><td className="px-3 py-2">+2 💰</td><td className="px-3 py-2 text-[var(--muted)]">Major adjacency. Commercial Hub must be on a river to get this. Priority #1 for placement.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Harbor</td><td className="px-3 py-2">+2 💰</td><td className="px-3 py-2 text-[var(--muted)]">Major adjacency. Cheap to build. Great pairing — Harbor + CH on adjacent coastal tiles.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Other Districts</td><td className="px-3 py-2">+1 💰</td><td className="px-3 py-2 text-[var(--muted)]">Standard minor adjacency. Per 2 adjacent. Government Plaza gives +1. Pair with Hansa for Germany.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="Owls of Minerva (Secret Society)">
          <b>Gilded Vault</b> replaces the Bank: Commercial Hub gets culture equal to its gold adjacency. +4 gold CH → +4 culture AND +4 gold. With Town Charters (+100%): +8 culture + 8 gold. This makes Commercial Hubs the best all-around district in the game.
        </Callout>
      </section>

      {/* ─── HARBOR ─── */}
      <section id="harbor">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">⚓ Harbor (Naval / Gold)</h2>
        <p className="mt-2 text-xs text-[var(--muted)]">Unlocked: Celestial Navigation. Best civs: England, Indonesia, Portugal, Phoenicia.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacent Feature</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Bonus</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">Sea Resource</td><td className="px-3 py-2">+1 💰</td><td className="px-3 py-2 text-[var(--muted)]">Per adjacent sea resource (Fish, Crabs, Whales, Pearls, Amber, Turtles).</td></tr>
              <tr><td className="px-3 py-2 font-medium">City Center</td><td className="px-3 py-2">+2 💰</td><td className="px-3 py-2 text-[var(--muted)]">Major adjacency. Place Harbor adjacent to city center on coast for easy +2.</td></tr>
              <tr><td className="px-3 py-2 font-medium">Other Districts</td><td className="px-3 py-2">+1 💰</td><td className="px-3 py-2 text-[var(--muted)]">Standard minor adjacency. Per 2 adjacent. Commercial Hub + Harbor pair is meta.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── FULL REFERENCE TABLE ─── */}
      <section id="reference">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">📋 Complete District Adjacency Reference</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)] sticky left-0 bg-[var(--card)]">District</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Unlock</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Major Adjacency (+2)</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Minor Adjacency (+1)</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Doubling Policy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">🏛️ Campus</td><td className="px-3 py-2 text-[var(--muted)]">Writing</td><td className="px-3 py-2 text-[var(--muted)]">Reefs, Geothermal Fissures, Reef (+2) — Mountains (+1)</td><td className="px-3 py-2 text-[var(--muted)]">Per 2: Rainforest / Districts</td><td className="px-3 py-2">Natural Philosophy</td></tr>
              <tr><td className="px-3 py-2 font-medium">⚒️ Industrial Zone</td><td className="px-3 py-2 text-[var(--muted)]">Apprenticeship</td><td className="px-3 py-2 text-[var(--muted)]">Aqueduct, Dam, Canal</td><td className="px-3 py-2 text-[var(--muted)]">Per 2: Mine / Quarry / District</td><td className="px-3 py-2">Craftsmen / Five-Year Plan</td></tr>
              <tr><td className="px-3 py-2 font-medium">🎭 Theater Square</td><td className="px-3 py-2 text-[var(--muted)]">Drama &amp; Poetry</td><td className="px-3 py-2 text-[var(--muted)]">Wonders, Entertainment Complex, Water Park</td><td className="px-3 py-2 text-[var(--muted)]">Per 2: Districts</td><td className="px-3 py-2">Aesthetics</td></tr>
              <tr><td className="px-3 py-2 font-medium">⛪ Holy Site</td><td className="px-3 py-2 text-[var(--muted)]">Astrology</td><td className="px-3 py-2 text-[var(--muted)]">Natural Wonders</td><td className="px-3 py-2 text-[var(--muted)]">Per 2: Woods / Districts. Per 1: Mountain.</td><td className="px-3 py-2">Scripture</td></tr>
              <tr><td className="px-3 py-2 font-medium">💰 Commercial Hub</td><td className="px-3 py-2 text-[var(--muted)]">Currency</td><td className="px-3 py-2 text-[var(--muted)]">River, Harbor</td><td className="px-3 py-2 text-[var(--muted)]">Per 2: Districts</td><td className="px-3 py-2">Town Charters</td></tr>
              <tr><td className="px-3 py-2 font-medium">⚓ Harbor</td><td className="px-3 py-2 text-[var(--muted)]">Celestial Navigation</td><td className="px-3 py-2 text-[var(--muted)]">City Center</td><td className="px-3 py-2 text-[var(--muted)]">Per 1: Sea Resource. Per 2: Districts.</td><td className="px-3 py-2">Naval Infrastructure</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏟️ Entertainment Complex</td><td className="px-3 py-2 text-[var(--muted)]">Games &amp; Recreation</td><td className="px-3 py-2 text-[var(--muted)]">Theater Square</td><td className="px-3 py-2 text-[var(--muted)]">Per 2: Districts</td><td className="px-3 py-2">Sports Media</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏛️ Government Plaza</td><td className="px-3 py-2 text-[var(--muted)]">State Workforce</td><td className="px-3 py-2 text-[var(--muted)]">N/A (gives adjacency)</td><td className="px-3 py-2 text-[var(--muted)]">Gives +1 to ALL adjacent specialty districts</td><td className="px-3 py-2">N/A</td></tr>
              <tr><td className="px-3 py-2 font-medium">🎓 Diplomatic Quarter</td><td className="px-3 py-2 text-[var(--muted)]">Diplomatic Service</td><td className="px-3 py-2 text-[var(--muted)]">N/A (delegates only)</td><td className="px-3 py-2 text-[var(--muted)]">+1 Diplo Favor per adjacent district or City Center</td><td className="px-3 py-2">N/A</td></tr>
              <tr><td className="px-3 py-2 font-medium">🛡️ Encampment</td><td className="px-3 py-2 text-[var(--muted)]">Bronze Working</td><td className="px-3 py-2 text-[var(--muted)]">N/A (no adjacency)</td><td className="px-3 py-2 text-[var(--muted)]">No adjacency yields — provides defense and +1 Strategic Resource stockpile</td><td className="px-3 py-2">N/A</td></tr>
              <tr><td className="px-3 py-2 font-medium">🏥 Preserve</td><td className="px-3 py-2 text-[var(--muted)]">Mysticism</td><td className="px-3 py-2 text-[var(--muted)]">Unimproved Charming/Breathtaking tiles</td><td className="px-3 py-2 text-[var(--muted)]">Grove (+2 Food/Faith/Culture to adjacent unimproved tiles)</td><td className="px-3 py-2">N/A</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── CIV-SPECIFIC ─── */}
      <section id="civ-specific">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏴 Unique District Replacements</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Civ</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Unique District</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Replaces</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Adjacency Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 font-medium">🇩🇪 Germany</td><td className="px-3 py-2 text-[var(--neon)]">Hansa</td><td className="px-3 py-2 text-[var(--muted)]">Industrial Zone</td><td className="px-3 py-2 text-[var(--muted)]">+2 from Commercial Hubs (instead of +1 from districts). +2 from resources (instead of +1). Half cost. Can hit +12 base adjacency with proper city clustering.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🇯🇵 Japan</td><td className="px-3 py-2 text-[var(--neon)]">All specialty districts</td><td className="px-3 py-2 text-[var(--muted)]">Standard</td><td className="px-3 py-2 text-[var(--muted)]"><b>Meiji Restoration:</b> +1 adjacency per adjacent district (standard is +1 per 2). Stack every district together for massive yields. +3 from 3 adjacent districts vs normal +1.5.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🇰🇷 Korea</td><td className="px-3 py-2 text-[var(--neon)]">Seowon</td><td className="px-3 py-2 text-[var(--muted)]">Campus</td><td className="px-3 py-2 text-[var(--muted)]">Always +4 base science. But: <b>LOSES 1 adjacency per adjacent district.</b> Place on hills, isolated from all other districts. Surrounded by farms and mines — not districts.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🇷🇺 Russia</td><td className="px-3 py-2 text-[var(--neon)]">Lavra</td><td className="px-3 py-2 text-[var(--muted)]">Holy Site</td><td className="px-3 py-2 text-[var(--muted)]">Half cost. Expands city borders on Great Person use. Tundra start bias. Dance of the Aurora pantheon: +1 per tundra tile = +6/+7 base adjacency.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🇬🇷 Greece</td><td className="px-3 py-2 text-[var(--neon)]">Acropolis</td><td className="px-3 py-2 text-[var(--muted)]">Theater Square</td><td className="px-3 py-2 text-[var(--muted)]">Must be built on hills. +1 adjacency per adjacent city center. +1 per wonder. Half cost. Place on hill next to your city center for +3 base before wonders.</td></tr>
              <tr><td className="px-3 py-2 font-medium">🇲🇱 Mali</td><td className="px-3 py-2 text-[var(--neon)]">Suguba</td><td className="px-3 py-2 text-[var(--muted)]">Commercial Hub</td><td className="px-3 py-2 text-[var(--muted)]">+2 from Holy Site (instead of +1 from districts). +2 from River. +1 per adjacent Pamukkale or Oasis tile. Stack Suguba + Holy Site + River for +6 base.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── WONDER PLACEMENT ─── */}
      <section id="wonders">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">🏗️ Wonder Placement Optimization</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Wonder</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best Adjacent To</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Strategic Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Ruhr Valley</td><td className="px-3 py-2">IZ + Aqueduct cluster</td><td className="px-3 py-2 text-[var(--muted)]">+20% production to the city. Must be adjacent to IZ and river. Place in your highest-production city.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Oxford University</td><td className="px-3 py-2">Next to Plaza + high-adj Campus</td><td className="px-3 py-2 text-[var(--muted)]">+20% science. +2 free techs. Doesn&apos;t need adjacency, but adjacency to Campus/Plaza gives minor bonuses.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Broadway</td><td className="px-3 py-2">Theater Square cluster</td><td className="px-3 py-2 text-[var(--muted)]">+20% culture. Free Great Work slots. Adjacent to Theater Square for +2 adjacency.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Petra</td><td className="px-3 py-2">Flat desert (no hills/floodplains)</td><td className="px-3 py-2 text-[var(--muted)]">+2 food, +2 gold, +1 production on all desert tiles in city. Turns useless desert into a powerhouse.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Mausoleum at Halicarnassus</td><td className="px-3 py-2">Harbor with sea resources</td><td className="px-3 py-2 text-[var(--muted)]">+1 science/culture/faith on coast tiles. Great Engineers get +1 charge. Stack with Leonardo da Vinci.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Colosseum</td><td className="px-3 py-2">Center of 3+ cities within 6 tiles</td><td className="px-3 py-2 text-[var(--muted)]">+2 culture, +2 loyalty, +3 amenities to all cities within 6 tiles. Must be adjacent to Entertainment Complex.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)] font-medium">Kilwa Kisiwani</td><td className="px-3 py-2">Coast, near multiple city-states</td><td className="px-3 py-2 text-[var(--muted)]">+3 envoys. If you&apos;re suzerain of 2+ city-states of same type, their bonus increases by +15% empire-wide.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "What&apos;s the minimum IZ adjacency I should accept?", a: "+4 base (+8 with Craftsmen). Anything less and you&apos;re wasting the Power Plant&apos;s regional effect, which radiates the IZ&apos;s adjacency to all cities within 6 tiles." },
            { q: "When should I place districts vs improve tiles?", a: "Place districts FIRST — they lock in production cost at the current era. Tile improvements can come later. District cost scales with your tech/civic tree progress. A turn-50 Campus costs half of a turn-200 Campus." },
            { q: "Best district to build first in a new city?", a: "Depends on victory path. Science: Campus. Culture: Theater Square. Faith: Holy Site. Generalist: Commercial Hub (gold + trade route capacity). Always check terrain first — a +5 Campus beats a +2 CH even if you&apos;re going for gold." },
            { q: "How does Japan&apos;s Meiji Restoration work?", a: "+1 adjacency per adjacent district (standard is +1 per 2). This means 3 adjacent districts = +3 adjacency (vs normal +1.5). Stack all districts together in a cluster for massive yields. Japan is the best district-clustering civ in the game." },
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
