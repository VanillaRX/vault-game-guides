import { GuideTrans } from "@/components/guide/guide-chrome";
import { GuideText } from "@/components/guide/guide-text";
import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function RimWorldDefenseGuide() {
  const game = GAMES.find((g) => g.slug === "rimworld")!;

  return (
    <div className="space-y-10">
      <img src={game.headerImage} alt="RimWorld" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          <GuideText en="On the rim, your colony lives or dies by its defenses. A single breach raid can end a 50-hour colony in minutes. This guide covers every killbox design, cover mechanics, sapper-proofing, turret placement, and storyteller-specific defense strategies for Cassandra, Phoebe, and Randy."
            zh="在边缘世界，殖民地的生死取决于防御工事。一次破墙袭击能在几分钟内终结你玩了50小时的殖民地。本指南涵盖所有杀阵 (killbox) 设计、掩体机制、防工兵策略、炮塔摆放，以及针对卡桑德拉、菲比、兰迪三位叙事者的防御对策。" />
        </p>
      </div>

      <section id="section-0">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🎯 Cover Mechanics: The Math</h2>
        <p className="mt-3 text-sm text-[var(--fg)]/80">
          <GuideText en="RimWorld's combat is a dice roll. Cover reduces the attacker's hit chance. <b>Stacking cover is multiplicative, not additive.</b>"
            zh="边缘世界的战斗是掷骰子。掩体降低攻击方的命中率。<b>掩体叠乘是乘法，不是加法。</b>" />
        </p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Cover Type" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Block %" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Best Use" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2">Sandbags</td><td className="px-3 py-2">57%</td><td className="px-3 py-2 text-[var(--muted)]">Colonist shooting position. Place in a line, colonists stand behind.</td></tr>
              <tr><td className="px-3 py-2">Barricade</td><td className="px-3 py-2">57%</td><td className="px-3 py-2 text-[var(--muted)]">Same as sandbags but uses steel/stone. Indestructible vs fire.</td></tr>
              <tr><td className="px-3 py-2">Wall (corner peek)</td><td className="px-3 py-2">75%</td><td className="px-3 py-2 text-[var(--muted)]">Best cover in the game. Colonist peeks around corner — 75% block.</td></tr>
              <tr><td className="px-3 py-2 text-[var(--neon)]">Wall + Sandbag</td><td className="px-3 py-2 text-[var(--neon)]">83%</td><td className="px-3 py-2 text-[var(--muted)]">Wall corner + sandbag in adjacent tile. The meta: best possible cover.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The Wall-Sandbag Meta"
          zh="建造模式：<b>墙 — 沙袋 — 墙 — 沙袋 — 墙...</b> 殖民者站在 <b>墙后面</b>，从墙角探头射击。墙旁边的沙袋提供乘法叠加掩体。总计：75%（墙）+ 剩余25%的57%（沙袋）= <b>83%有效掩体</b>。这是边缘世界能达到的最高掩体值。">
          Build pattern: <b>Wall — Sandbag — Wall — Sandbag — Wall...</b> Colonists stand <b>behind the wall</b>, peeking around the corner. The sandbag adjacent to the wall stacks cover multiplicatively. Total: 75% (wall) + 57% of remaining 25% (sandbag) = <b>83% effective cover</b>. This is the highest achievable cover in RimWorld.
        </Callout>
      </section>

      <section id="section-1">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🏰 Killbox Designs Ranked</h2>

        <div className="mt-3 space-y-4">
          {[
            { name: "Classic Singularity Killbox", rank: "S-Tier", desc: "A long 1-tile-wide tunnel ending in a large open room. Enemies enter single-file. Your 10 colonists stand at the far end, all shooting the entrance. <b>No enemy can fire back until they exit the tunnel.</b> Place sandbags at the tunnel exit so enemies can't stop to shoot. Turrets on side shelves for crossfire.", best: "All storytellers, all raid types except breach/sapper." },
            { name: "Heat Trap (Burn Box)", rank: "S-Tier (Situational)", desc: "Enclosed room at the killbox entrance. Wooden floors + wooden barricades. When enemies enter, molotov the barricades. Room reaches 200°C+ in seconds. <b>Everything inside dies — including loot.</b> Stone doors to contain heat. Best on mountain maps with overhead roof.", best: "Late-game tribal raids (50+ enemies). Insect infestations." },
            { name: "Funnel Killbox", rank: "A-Tier", desc: "Open field narrowed by walls into a V-shape. Enemies are forced into a kill zone 5-7 tiles wide. Colonists line up on the wide end. <b>More forgiving than singularity</b> — colonists can spread out, fewer friendly fire incidents.", best: "Early-to-mid game. Colonies with 6-8 shooters." },
            { name: "Turret Hallway", rank: "B-Tier", desc: "A 2-tile-wide corridor with turrets every 3 tiles on both sides. Enemies walk through and get shredded by crossfire. <b>Expensive in steel and components.</b> Requires constant rearming.", best: "Mid-game when steel is abundant. Combined with a singularity entrance." },
          ].map((kb) => (
            <div key={kb.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-5">
              <div className="flex items-center gap-2">
                <span className="rounded bg-[var(--accent)]/20 px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">{kb.rank}</span>
                <h4 className="font-semibold text-sm text-[var(--fg)]">{kb.name}</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: kb.desc }} />
              <p className="mt-2 text-[10px] text-[var(--neon)]"><GuideText en="Best for:" zh="适用：" /> {kb.best}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="section-2">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🧱 Sapper-Proofing Your Base</h2>
        <p className="mt-3 text-sm text-[var(--fg)]/80">
          <GuideText en="Sapper raids <b>ignore killboxes</b>. They mine through walls and mountains to reach your bedrooms. Counter-strategies:"
            zh="工兵袭击<b>无视杀阵</b>。他们会挖穿墙壁和山体，直奔你的卧室。应对策略：" />
        </p>

        <div className="mt-3 space-y-2">
          {[
            { title: "Double-Wall Outer Perimeter", desc: "Sappers target the shortest path to a bedroom. Double-thick granite walls everywhere except your killbox entrance. They&apos;ll choose the killbox as the shortest path." },
            { title: "Unpowered Turret Bait", desc: "Place an unpowered turret behind a single-thickness wall where sappers approach. They&apos;ll mine toward the turret — and walk right into your prepared defenders." },
            { title: "Interior Defensive Positions", desc: "Build mini-bunkers inside your base. A 3×3 room with sandbags, 2 doors, and a shelf of EMP grenades. If sappers breach, your colonists fall back to these positions." },
          ].map((s) => (
            <div key={s.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)]/30 p-4">
              <b className="text-sm">{s.title}</b>
              <p className="mt-1 text-xs text-[var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="section-3">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]">🤖 Turret Placement Guide</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Turret Type" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Range" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Damage" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Best Placement" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2">Mini-turret</td><td className="px-3 py-2">25.9</td><td className="px-3 py-2">11/shot</td><td className="px-3 py-2 text-[var(--muted)]">Killbox side shelves, 3 tiles apart. Provides covering fire while colonists shoot.</td></tr>
              <tr><td className="px-3 py-2">Autocannon</td><td className="px-3 py-2">32.9</td><td className="px-3 py-2">25/shot</td><td className="px-3 py-2 text-[var(--muted)]">Back line of killbox, behind colonists. Long range, high damage, slow fire rate.</td></tr>
              <tr><td className="px-3 py-2">Uranium Slug</td><td className="px-3 py-2">44.9</td><td className="px-3 py-2">60/shot</td><td className="px-3 py-2 text-[var(--muted)]">Outside base walls for centipedes. Extreme range, extreme damage, very slow fire.</td></tr>
              <tr><td className="px-3 py-2">Mortar</td><td className="px-3 py-2">500</td><td className="px-3 py-2">50 AoE</td><td className="px-3 py-2 text-[var(--muted)]">4-6 mortars in a central cluster. EMP shells for mechs, HE for sieges, Incendiary for tribals.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-lg font-bold tracking-tight text-[var(--neon)]"><GuideTrans en="FAQ" /></h2>
        <div className="mt-4 space-y-4">
          {[
            { en_q: "What's the minimum defense for my first year?", zh_q: "第一年最少需要什么防御？", en_a: "A 7-tile-wide corridor ending in a 9×9 room. 3 sandbag positions for colonists. Wooden traps along the corridor floor. That's enough for the first 3-4 raids.", zh_a: "一条 7 格宽、尽头是 9×9 房间的通道，3 个殖民者沙袋射击位，通道地上铺满木陷阱。足够扛过前 3-4 波袭击。" },
            { en_q: "How do I deal with drop pod raids?", zh_q: "空投仓袭击怎么处理？", en_a: "Interior turrets in every room. Drop pods bypass outer walls. Keep a shelf with EMP grenades in your dining room. Draft all colonists IMMEDIATELY — don't wait for them to reach positions.", zh_a: "每个房间内部放炮塔。空投仓会绕过外墙。餐厅里放一个 EMP 手雷架。立刻征召所有殖民者——不要等他们跑到指定位置。" },
            { en_q: "Randy Random sent 50 manhunting squirrels. Help?", zh_q: "兰迪随机派了 50 只狂暴松鼠，怎么办？", en_a: "Block all doors with a drafted colonist standing in the doorway (hold door open). Squirrels can't break doors fast. Wait 24-48 hours until they fall asleep, then hunt them one by one. Or use a molotov.", zh_a: "征召一个殖民者站在门口堵住门。松鼠拆门很慢。等 24-48 小时它们睡着后一只只猎杀。或者扔个燃烧瓶。" },
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
