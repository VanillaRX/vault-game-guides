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
          <GuideText en="Every Civ 6 leader has a built-in victory preference — but knowing which victory to pivot to based on your map, neighbors, and era is what separates Prince from Deity players. This guide covers optimal victory paths for each leader, policy priorities, and the exact tech/civic beelines for all five victory types."
            zh="每个《文明VI》的领袖都有预设的胜利倾向——但真正区分王子难度和神级难度的，是你能根据地图、邻居和时代来判断该转向哪种胜利。本指南涵盖每个领袖的最优胜利路线、各时代政策卡优先级，以及五种胜利类型的精确科技/文化冲线路径。" />
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🏆 Victory Type Quick Reference</h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Victory" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Key Metric" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Tech Beeline" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Best Leaders" /></th>
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

        <Callout type="strategy" title="Culture Victory Math"
          zh="你需要<b>外国游客</b>数量超过任何文明的国内游客数。旅游业绩=进攻，文化=防守。两者都要。文化胜利通常需要在现代时代达到每回合500+旅游业绩。">
          You need more <b>foreign tourists</b> than any other civ has domestic tourists. Tourism = the attack. Culture = the defense. You need both. A culture victory typically needs 500+ tourism per turn by the Modern era.
        </Callout>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Era" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Tourism Source" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Target Tourism/turn" /></th>
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

        <Callout type="tip" title="Open Borders + Trade Route = +50% Tourism"
          zh="给每个你想吸引游客的文明发一条商路，开放边境。两者各+25%旅游业绩（<b>合计+50%</b>）。这是全游戏最大的旅游业绩单次加成。">
          Send a trade route to every civ you want tourists from. Open borders with them. Both give +25% tourism each (<b>+50% total</b>). This is the single biggest tourism multiplier in the game.
        </Callout>
      </section>

      <section id="section-3">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">⚔️ Domination: Unit Timing Windows</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Window" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Unit" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Power Spike" /></th>
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
            { en_q: "Which victory is easiest for beginners?", zh_q: "新手最容易走哪种胜利？", en_a: "Science. It's the simplest path — build campuses, produce space projects, don't die. Sim City with a timer. No tourism math or combat required.", zh_a: "科技胜利。最简单的路线——建学院区、造太空项目、别死。带计时器的模拟城市。不需要旅游数学或战斗。" },
            { en_q: "How do I know which victory to pivot to?", zh_q: "怎么判断该转哪种胜利？", en_a: "Check your terrain at turn 50. Lots of mountains? Science. Lots of chops/hills? Domination. Coastal + natural wonders? Culture. Neighbors are Korea? Abandon science — they'll out-tech you.", zh_a: "第 50 回合看地形。山多？科技。森林/丘陵多？征服。海岸 + 自然奇观？文化。邻居是韩国？放弃科技——你追不上他们的科研速度。" },
            { en_q: "Best all-rounder leader?", zh_q: "最强的万金油领袖？", en_a: "Trajan (Rome). Free monument in every city = early culture + border expansion. Legions (Classical) can dominate early, then pivot to any victory. The most flexible leader in the game.", zh_a: "图拉真（罗马）。每座城免费纪念碑 = 早期文化 + 自动扩地。古典时代的罗马军团能前期制霸，然后转向任意胜利。全游戏最灵活的领袖。" },
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
