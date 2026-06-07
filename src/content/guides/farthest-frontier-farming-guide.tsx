import { GuideText } from "@/components/guide/guide-text";
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
          <GuideText en="Food is the #1 cause of colony collapse in Farthest Frontier. A single bad harvest without backup stores means starvation by winter. This guide covers crop rotation for maximum yield, soil fertility management, livestock optimization, food preservation, and the exact production chains to keep your colony fed through the harshest winters."
            zh="粮食短缺是《最远的边陲》殖民地崩溃的第一大原因。一次歉收加上没有储备粮，冬天就只能等着饿死。本指南涵盖最大化产量的轮作方案、土壤肥力管理、畜牧业优化、食物保存，以及确保殖民地熬过最严酷冬天的精确产业链配置。" />
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
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Crop" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Plant → Harvest" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Yield" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Soil Effect" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Best Use" /></th>
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

        <Callout type="strategy" title="The Optimal 3-Year Rotation"
          zh="<b>第1年：</b>A=豌豆(+2)，B=小麦(-2)，C=三叶草(+3)。净：+3肥力+小麦。<br/><b>第2年：</b>A=亚麻(-1)，B=胡萝卜(-0.5)，C=三叶草(+3)。净：+1.5肥力+亚麻+蔬菜。<br/><b>第3年：</b>A=卷心菜(-1)，B=黑麦(-1)，C=三叶草(+3)。净：+1肥力+酸菜+谷物。<br/>此轮作可永久维持正土壤肥力，无需休耕。">
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

        <Callout type="info" title="Fertilizer Math"
          zh="每单位堆肥在生长季给田地<b>+5肥力</b>。10×10田每年基础消耗100单位堆肥。每3块田维护2个堆肥场。<b>绝对不要让肥力低于30%——低于此线的减产惩罚是指数级的。</b>">
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
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Animal" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Feed" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Produces" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Optimal Herd" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Best Setup" /></th>
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
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Method" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Input" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Output" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Shelf Life" /></th>
                <th className="px-3 py-2 text-left font-semibold text-[var(--fg)]"><GuideTrans en="Priority" /></th>
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
            { en_q: "How many farm fields do I need for 100 colonists?", zh_q: "100 个殖民者需要多少农田？", en_a: "5-6 fields of 8×8 or larger. 2 wheat, 1 flax, 1 cabbage, 1 pea/clover rotation, 1 flex. Plus 2 pastures (sheep + cattle). This feeds ~120 colonists with surplus.", zh_a: "5-6 块 8×8 以上的田。2 块小麦、1 块亚麻、1 块卷心菜、1 块豌豆/三叶草轮作、1 块灵活田。再加 2 个牧场（羊 + 牛）。能养活约 120 个殖民者还有盈余。" },
            { en_q: "Why are my crops dying?", zh_q: "为什么我的庄稼总是在死？", en_a: "Three common causes: (1) Soil fertility below 30% — use clover rotation and compost. (2) Frost before harvest — check the crop calendar. (3) Blight — diversify crops, blight hits monocultures hardest.", zh_a: "三个常见原因：(1) 土壤肥力低于 30%——轮作三叶草并施肥。(2) 收获前霜冻——检查作物日历。(3) 枯萎病——多样化种植，单一作物受枯萎病打击最重。" },
            { en_q: "When should I slaughter livestock?", zh_q: "什么时候宰杀牲畜？", en_a: "October, before winter. Keep 1 male + 3-4 females for breeding. Slaughter excess juveniles. This reduces winter feed demand by ~40% and provides emergency meat.", zh_a: "十月，入冬前。留 1 公 + 3-4 母用于繁殖，多余的幼崽全宰。这样能减少约 40% 的冬季饲料需求，同时提供应急肉食。" },
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
