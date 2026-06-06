import { GuideTrans } from "@/components/guide/guide-chrome";
import { GuideText } from "@/components/guide/guide-text";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function Civ6VictoryGuide() {
  const game = GAMES.find((g) => g.slug === "civilization-6")!;

  return (
    <div className="space-y-10">
      <img src={game.headerImage} alt="Civilization VI" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          Every Civ 6 leader has a built-in victory preference — but knowing which victory to pivot to based on your map, neighbors,
          and era is what separates Prince from Deity players. This guide covers optimal victory paths for each leader, policy priorities,
          and the exact tech/civic beelines for all five victory types.
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🏆 Victory Type Quick Reference</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Victory</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Key Metric</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Tech Beeline</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Best Leaders</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)]">🚀 Science</td><td className="px-3 py-2">Production + Science</td><td className="px-3 py-2">Rocketry → Satellites → Smart Materials → Robotics</td><td className="px-3 py-2">Korea, Maya, Australia, Scotland</td></tr>
              <tr><td className="px-3 py-2 text-[var(--accent)]">🎭 Culture</td><td className="px-3 py-2">Tourism + Culture</td><td className="px-3 py-2">Printing → Flight → Radio → Computers → Environmentalism</td><td className="px-3 py-2">Greece (Pericles), Sweden, China (Qin)</td></tr>
              <tr><td className="px-3 py-2 text-[var(--amber)]">⚔️ Domination</td><td className="px-3 py-2">Combat Strength</td><td className="px-3 py-2">Bronze Working (Encampment) → Gunpowder → Flight → Advanced Flight</td><td className="px-3 py-2">Macedon, Zulu, Ottoman, Gran Colombia</td></tr>
              <tr><td className="px-3 py-2 text-[var(--fg)]">🙏 Religion</td><td className="px-3 py-2">Faith generation</td><td className="px-3 py-2">Astrology → Theology (Mahabodhi) → Theocracy government</td><td className="px-3 py-2">Russia, Arabia, Byzantium, Khmer</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">🤝 Diplomacy</td><td className="px-3 py-2">Diplo Favor + Gold</td><td className="px-3 py-2">Currency (trade routes) → Diplomatic Service (Spy) → Seasteads</td><td className="px-3 py-2">Canada, Georgia, America (Rough Rider)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">⚙️ Science Victory: The Beeline</h2>

        <div className="mt-3 space-y-2">
          {[
            { step: "Early Game", action: "Rush <b>Campus + Library</b> in every city. Hypatia (Great Scientist) gives +1 science to libraries. Settle near mountains or reefs. Pingala (Governor) with Researcher promotion doubles science in capital." },
            { step: "Mid Game", action: "Beeline <b>Industrialization</b> for Coal Power Plants. Build IZ-aqueduct-dam triangles for +8 minimum production. Research Labs (+5 science each). Use International Space Agency policy to boost science from city-states." },
            { step: "Late Game", action: "Start spaceport construction in your highest-production city. <b>Royal Society</b> building lets builders rush projects. Combine with <b>Integrated Space Cell</b> policy. Chop rainforests and woods with Magnus (Governor) for burst production." },
            { step: "Exoplanet Expedition", action: "Final project requires 50 light years of travel. Each <b>Terrestrial Laser Station</b> (from spaceport project) adds 1 light year/turn. Spam builders to rush lasers. Win in 25 turns from launch." },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <span className="text-[var(--neon)] text-lg shrink-0">🚀</span>
              <div><b className="text-sm">{item.step}</b><p className="mt-1 text-xs leading-relaxed text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: item.action }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="section-2">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🎭 Culture Victory: The Tourism Engine</h2>

        <Callout type="strategy" title="Culture Victory Math">
          You need more <b>foreign tourists</b> than any other civ has domestic tourists. Tourism = the attack. Culture = the defense. You need both. A culture victory typically needs 500+ tourism per turn by the Modern era.
        </Callout>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Era</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Tourism Source</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Target Tourism/turn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2">Classical</td><td className="px-3 py-2">Wonders, Great Works (Writing)</td><td className="px-3 py-2">10-20</td></tr>
              <tr><td className="px-3 py-2">Renaissance</td><td className="px-3 py-2">Archaeological Museums (themed), Great Artists</td><td className="px-3 py-2">50-80</td></tr>
              <tr><td className="px-3 py-2">Industrial</td><td className="px-3 py-2">Seaside Resorts, National Parks</td><td className="px-3 py-2">150-200</td></tr>
              <tr><td className="px-3 py-2">Modern</td><td className="px-3 py-2">Rock Bands, Shopping Malls, Ski Resorts</td><td className="px-3 py-2">400+</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Open Borders + Trade Route = +50% Tourism">
          Send a trade route to every civ you want tourists from. Open borders with them. Both give +25% tourism each (<b>+50% total</b>). This is the single biggest tourism multiplier in the game.
        </Callout>
      </section>

      <section id="section-3">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">⚔️ Domination: Unit Timing Windows</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Window</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Unit</th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]">Power Spike</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2 text-[var(--neon)]">Ancient Era</td><td className="px-3 py-2">War-Cart (Sumeria) / Eagle Warrior (Aztec)</td><td className="px-3 py-2 text-[var(--muted)]">Unique units with no strategic resource cost. Rush nearest capital.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">Classical Era</td><td className="px-3 py-2">Swordsman + Battering Ram</td><td className="px-3 py-2 text-[var(--muted)]">Ram makes walls irrelevant. Iron Working + Oligarchy government timing.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">Medieval Era</td><td className="px-3 py-2">Knight + Trebuchet</td><td className="px-3 py-2 text-[var(--muted)]">Knights have 49 CS. With a Great General: 54. One-shot most cities.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">Renaissance Era</td><td className="px-3 py-2">Frigate + Privateer</td><td className="px-3 py-2 text-[var(--muted)]">Naval domination on island maps. Frigates outrange city defenses.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">Modern Era</td><td className="px-3 py-2">Bomber + Tank</td><td className="px-3 py-2 text-[var(--muted)]">Bombers reduce city HP to 0 in 2 turns. Tanks capture. Game over.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "Which victory is easiest for beginners?", a: "Science. It&apos;s the simplest path — build campuses, produce space projects, don&apos;t die. Sim City with a timer. No tourism math or combat required." },
            { q: "How do I know which victory to pivot to?", a: "Check your terrain at turn 50. Lots of mountains? Science. Lots of chops/hills? Domination. Coastal + natural wonders? Culture. Neighbors are Korea? Abandon science — they&apos;ll out-tech you." },
            { q: "Best all-rounder leader?", a: "Trajan (Rome). Free monument in every city = early culture + border expansion. Legions (Classical) can dominate early, then pivot to any victory. The most flexible leader in the game." },
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
