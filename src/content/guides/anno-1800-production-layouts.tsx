import { Callout } from "@/components/guide/callout";
import { GAMES } from "@/lib/data";

export default function Anno1800ProductionGuide() {
  const game = GAMES.find((g) => g.slug === "anno-1800")!;

  return (
    <div className="space-y-12">
      <img src={game.headerImage} alt="Anno 1800" className="w-full rounded-xl border border-[var(--border)] object-cover" />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)]/50 p-6">
        <p className="text-sm leading-relaxed text-[var(--fg)]/90">
          This is the <b>complete production chain reference</b> for Anno 1800. Every chain across all 5 population tiers,
          all 4 regions (Old World, New World, Arctic, Enbesa), with <b>verified optimal ratios</b>, warehouse math, Trade Union
          item effects, and electricity optimization. All ratios assume 100% productivity unless otherwise noted.
        </p>
      </div>

      {/* ─── SECTION: OLD WORLD ─── */}
      <section id="section-0">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🏭 Old World — Farmers
        </h2>
        <p className="mt-2 text-xs text-[var(--muted)]">100% productivity. No electricity available at this tier.</p>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Processing</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Population Supported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Fish</td><td className="px-3 py-2.5 text-[var(--muted)]">Coastline</td><td className="px-3 py-2.5 text-[var(--muted)]">Fishery (30s)</td><td className="px-3 py-2.5">1 fishery per 80 houses</td><td className="px-3 py-2.5 text-[var(--muted)]">800 farmers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Work Clothes</td><td className="px-3 py-2.5 text-[var(--muted)]">Sheep Farm → Wool (30s)</td><td className="px-3 py-2.5 text-[var(--muted)]">Framework Knitters (30s)</td><td className="px-3 py-2.5">2 sheep : 1 knitter</td><td className="px-3 py-2.5 text-[var(--muted)]">3,250 farmers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Schnapps</td><td className="px-3 py-2.5 text-[var(--muted)]">Potato Farm (30s)</td><td className="px-3 py-2.5 text-[var(--muted)]">Schnapps Distillery (30s)</td><td className="px-3 py-2.5">2 potato : 1 distillery</td><td className="px-3 py-2.5 text-[var(--muted)]">3,000 farmers</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-1">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🏭 Old World — Workers
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input Chain</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Pop Supported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Sausages</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Pig Farm (60s) → Artisan Workshop (Sausage, 60s)</td><td className="px-3 py-2.5">2 pig : 1 workshop</td><td className="px-3 py-2.5 text-[var(--muted)]">2,400 workers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Bread</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Grain Farm (60s) → Flour Mill (30s) → Bakery (60s)</td><td className="px-3 py-2.5">2 grain : 1 mill : 1 bakery</td><td className="px-3 py-2.5 text-[var(--muted)]">2,880 workers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Soap</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Pig Farm → Rendering Works (Tallow, 30s) → Soap Factory (30s)</td><td className="px-3 py-2.5">2 pig : 1 rendering : 1 soap</td><td className="px-3 py-2.5 text-[var(--muted)]">1,800 workers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Beer</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Grain (60s) → Malthouse (30s) + Hops Farm (60s) → Brewery (60s)</td><td className="px-3 py-2.5">2 grain : 1 malt : 2 hops : 1 brewery</td><td className="px-3 py-2.5 text-[var(--muted)]">1,920 workers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Sails</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Sheep Farm (Wool, 30s) → Sailmakers (30s)</td><td className="px-3 py-2.5">3 sheep : 1 sailmaker</td><td className="px-3 py-2.5 text-[var(--muted)]">Ship construction</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-2">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🏭 Old World — Artisans
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input Chain</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Pop Supported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Canned Food</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Cattle (Beef, 60s) + Red Pepper Farm (60s) → Cannery (108s). Also consumes 1 Iron per cycle.</td><td className="px-3 py-2.5">2 cattle : 2 pepper : 1 cannery</td><td className="px-3 py-2.5 text-[var(--muted)]">1,080 artisans</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Fur Coats</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Hunting Cabin (Furs, 60s) + Cotton Fabric (New World import) → Fur Dealer (60s)</td><td className="px-3 py-2.5">1 hunter : 1 fur dealer (base). With TU item: 1 hunter = 2 fur dealers</td><td className="px-3 py-2.5 text-[var(--muted)]">850 artisans per chain</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Sewing Machines</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Lumberjack (Wood, 15s) + Iron Mine (15s) → Sewing Machine Factory (45s)</td><td className="px-3 py-2.5">1 wood : 1 iron : 1 factory</td><td className="px-3 py-2.5 text-[var(--muted)]">1,500 artisans</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Rum</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Imported from New World (Sugar Cane → Distillery). Ship on dedicated clipper route.</td><td className="px-3 py-2.5">8 sugar : 4 distillery (NW) serve ~3,000 Old World artisans</td><td className="px-3 py-2.5 text-[var(--muted)]">3,000 artisans</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Artisan Pivot Point">
          This is the tier where <b>production chains go multi-island</b>. Canned Food requires red pepper fertility AND cattle pastures. Fur Coats bridge Old and New World. <b>Build a second Old World island dedicated to artisan production.</b>
        </Callout>
      </section>

      <section id="section-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🏭 Old World — Engineers
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input Chain</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Pop Supported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Spectacles</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Copper Mine (30s) + Zinc Mine (60s) → Brass Smelter (60s) + Sand Mine (30s) → Glassmakers (30s) → Spectacle Factory (90s)</td><td className="px-3 py-2.5">4 copper : 2 zinc : 1 brass smelter : 2 sand : 1 glass : 1 spectacle factory</td><td className="px-3 py-2.5 text-[var(--muted)]">1,200 engineers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Coffee</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Imported from New World (Coffee Plantation, 60s) → Coffee Roaster (30s)</td><td className="px-3 py-2.5">6 coffee plantations : 3 roasters (NW) → 1 clipper dedicated route</td><td className="px-3 py-2.5 text-[var(--muted)]">2,000 engineers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Light Bulbs</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Glass (from sand) + Coal (Carbon Filament) → Light Bulb Factory (60s)</td><td className="px-3 py-2.5">2 sand → 1 glass : 1 coal mine : 1 light bulb factory</td><td className="px-3 py-2.5 text-[var(--muted)]">1,600 engineers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Pocket Watches</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Gold Mine (150s) + Glass + Brass → Watch Factory (90s)</td><td className="px-3 py-2.5">5 gold mines : 1 glass : 1 brass smelter : 1 watch factory</td><td className="px-3 py-2.5 text-[var(--muted)]">1,800 engineers</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Phonographs</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Wood (15s) → Cabinet Maker (60s) + Copper (30s) → Gramophone Factory (90s)</td><td className="px-3 py-2.5">2 wood : 1 cabinet maker : 2 copper : 1 gramophone factory</td><td className="px-3 py-2.5 text-[var(--muted)]">960 engineers</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-4">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🏭 Old World — Investors
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input Chain</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Pop Supported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--amber)] font-medium">Champagne</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Glass (Sand, 30s) + Sugar Cane (NW) → Champagne Cellar (150s)</td><td className="px-3 py-2.5">1 glassmakers : 4 sugar (NW) : 1 champagne cellar</td><td className="px-3 py-2.5 text-[var(--muted)]">900 investors</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--amber)] font-medium">Cigars</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Wood Veneers (Sawmill, 15s) + Tobacco (NW) → Cigar Factory (30s)</td><td className="px-3 py-2.5">1 sawmill : 4 tobacco (NW) : 1 cigar factory</td><td className="px-3 py-2.5 text-[var(--muted)]">2,400 investors</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--amber)] font-medium">Chocolate</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Sugar (NW) + Cocoa (NW) → Chocolate Factory (30s)</td><td className="px-3 py-2.5">4 sugar : 4 cocoa : 1 chocolate factory</td><td className="px-3 py-2.5 text-[var(--muted)]">2,000 investors</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--amber)] font-medium">Steam Carriages</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Steam Motors (Brass + Iron → Motor Factory, 60s) + Wood (15s) + Caoutchouc (NW) → Carriage Factory (60s)</td><td className="px-3 py-2.5">1 motor factory : 1 wood : 4 caoutchouc (NW) : 1 carriage factory</td><td className="px-3 py-2.5 text-[var(--muted)]">750 investors</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="Investor Goods Are Luxury">
          Investors don&apos;t NEED all luxuries to stay happy. Prioritize <b>Cigars + Chocolate</b> (cheapest chains) before Champagne (glass bottleneck) and Steam Carriages (most complex chain in the game).
        </Callout>
      </section>

      {/* ─── NEW WORLD ─── */}
      <section id="section-5">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🌴 New World — Complete Production Chains
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Used In</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input → Processing</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio (NW)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Cotton Fabric</td><td className="px-3 py-2.5">Fur Coats (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Cotton Plantation (60s) → Cotton Mill (30s)</td><td className="px-3 py-2.5">2 cotton plantations : 1 mill</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Rum</td><td className="px-3 py-2.5">Artisans (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Sugar Cane (30s) → Rum Distillery (30s)</td><td className="px-3 py-2.5">1 sugar cane : 1 distillery</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Coffee</td><td className="px-3 py-2.5">Engineers (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Coffee Plantation (60s) → Coffee Roaster (30s)</td><td className="px-3 py-2.5">2 coffee : 1 roaster</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Caoutchouc</td><td className="px-3 py-2.5">Steam Carriages, Bicycles (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Caoutchouc Plantation (60s)</td><td className="px-3 py-2.5">Raw good — no processing needed</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Sugar</td><td className="px-3 py-2.5">Champagne, Chocolate (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Sugar Cane (30s) — same plantation as rum</td><td className="px-3 py-2.5">Split cane output between rum and sugar</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Tobacco</td><td className="px-3 py-2.5">Cigars (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Tobacco Plantation (120s)</td><td className="px-3 py-2.5">Raw good — 4 plantations per cigar factory</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Cocoa</td><td className="px-3 py-2.5">Chocolate (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Cocoa Plantation (120s)</td><td className="px-3 py-2.5">Raw good — 4 plantations per chocolate factory</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Gold Ore</td><td className="px-3 py-2.5">Pocket Watches, Jewelry (OW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Gold Mine (150s)</td><td className="px-3 py-2.5">5 mines per watch factory.</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--fg)] font-medium">Fried Plantains</td><td className="px-3 py-2.5">Jornaleros (NW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Plantain Plantation (60s) → Fried Plantain Kitchen (30s)</td><td className="px-3 py-2.5">2 plantain : 1 kitchen</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--fg)] font-medium">Ponchos</td><td className="px-3 py-2.5">Obreros (NW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Alpaca Farm (60s) → Poncho Darner (60s)</td><td className="px-3 py-2.5">1 alpaca : 1 darner</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--fg)] font-medium">Bowler Hats</td><td className="px-3 py-2.5">Obreros (NW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Cotton Fabric + Alpaca Wool → Hat Factory (60s)</td><td className="px-3 py-2.5">1 cotton mill + 1 alpaca : 1 hat factory</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--fg)] font-medium">Tortillas</td><td className="px-3 py-2.5">Jornaleros (NW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Corn Farm (60s) → Tortilla Bakery (30s)</td><td className="px-3 py-2.5">2 corn : 1 bakery</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--fg)] font-medium">Coffee (NW)</td><td className="px-3 py-2.5">Obreros Cafeteria (NW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Same coffee chain — also consumed in NW Cafeteria</td><td className="px-3 py-2.5">Extra capacity needed for local consumption</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── ARCTIC ─── */}
      <section id="section-6">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          ❄️ Arctic — Complete Production Chains
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Used In</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Input Chain</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Parkas</td><td className="px-3 py-2.5">Explorers (Arctic)</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Caribou Meat (120s) → Parka Factory (60s). Also consumes Whale Oil (Whaling Station, 60s).</td><td className="px-3 py-2.5">1 whaling station + 1 caribou : 1 parka factory</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Pemmican</td><td className="px-3 py-2.5">Explorers (Arctic)</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Caribou Meat (120s) → Pemmican Processor (60s)</td><td className="px-3 py-2.5">2 caribou : 1 processor</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Sleeping Bags</td><td className="px-3 py-2.5">Explorers (Arctic)</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Caribou Meat + Goose Feathers (60s) + Bear Fur (120s) → Sleeping Bag Factory (90s)</td><td className="px-3 py-2.5">2 caribou : 2 goose : 1 bear : 1 factory</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Oil Lamps</td><td className="px-3 py-2.5">Technicians (Arctic)</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Whale Oil (60s) + Brass (OW import) → Lamp Factory (60s)</td><td className="px-3 py-2.5">1 whaling station + 1 brass smelter (OW) : 1 lamp factory</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Gas</td><td className="px-3 py-2.5">Investors (OW) + Arctic</td><td className="px-3 py-2.5 text-[var(--muted)] text-[11px]">Gas Pump (on Crown Falls plateau glacier). Airship transport required.</td><td className="px-3 py-2.5">2 pumps on Crown Falls. Must use airship (4× faster than clipper).</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Arctic Logistics">
          The Arctic has <b>no fertility</b> — all food must be imported or hunted. Caribou and Bears are finite resources on each plateau. <b>Build a dedicated Old World supply island</b> to feed your Arctic colonies. Airships carry 4× more than clippers over Arctic routes.
        </Callout>
      </section>

      {/* ─── ENBESA ─── */}
      <section id="section-7">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🏜️ Enbesa (Land of Lions) — Key Production Chains
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Good</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Requires</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Optimal Ratio</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Tea</td><td className="px-3 py-2.5">Water + Tea Plants</td><td className="px-3 py-2.5">2 tea : 1 water pump : 1 tea factory</td><td className="px-3 py-2.5 text-[var(--muted)]">Water canals must connect. Shepherds demand tea.</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Tapestries</td><td className="px-3 py-2.5">Water + Indigo + Linen</td><td className="px-3 py-2.5">2 indigo : 2 linen : 1 tapestry workshop</td><td className="px-3 py-2.5 text-[var(--muted)]">Elders demand tapestries. High water consumption.</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Ceramics</td><td className="px-3 py-2.5">Water + Clay</td><td className="px-3 py-2.5">2 clay pits : 1 ceramics workshop</td><td className="px-3 py-2.5 text-[var(--muted)]">Enbesan building material. Elders demand as lifestyle need.</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Illuminated Scripts</td><td className="px-3 py-2.5">Paper (Wood) + Indigo + Ceramics</td><td className="px-3 py-2.5">1 paper mill : 2 indigo : 1 ceramics : 1 scriptorium</td><td className="px-3 py-2.5 text-[var(--muted)]">Luxury for Elders. Massive water demand — 3 pumps minimum.</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)] font-medium">Hibiscus Tea</td><td className="px-3 py-2.5">Water + Hibiscus Plantation</td><td className="px-3 py-2.5">2 hibiscus : 1 tea factory variant</td><td className="px-3 py-2.5 text-[var(--muted)]">Alternative to regular tea. Higher value.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="Water Is Enbesa&apos;s Currency">
          Every Enbesan chain requires water from irrigation canals. Each water pump supports ~12 tiles of irrigated land. <b>Plan your pump placement BEFORE building farms.</b> Canals can&apos;t cross roads without bridges — build roads LAST.
        </Callout>
      </section>

      {/* ─── WAREHOUSE MATH ─── */}
      <section id="section-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          📦 Warehouse Placement: The Complete Reference
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Warehouse Level</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Carts</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Loading Ramps</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Max Range</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Buildings Supported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5">Level 1</td><td className="px-3 py-2.5">2</td><td className="px-3 py-2.5">2</td><td className="px-3 py-2.5">17 tiles (road distance)</td><td className="px-3 py-2.5 text-[var(--muted)]">4-6 production buildings</td></tr>
              <tr><td className="px-3 py-2.5">Level 2</td><td className="px-3 py-2.5">3</td><td className="px-3 py-2.5">3</td><td className="px-3 py-2.5">17 tiles</td><td className="px-3 py-2.5 text-[var(--muted)]">8-10 production buildings</td></tr>
              <tr><td className="px-3 py-2.5">Level 3</td><td className="px-3 py-2.5">4</td><td className="px-3 py-2.5">4</td><td className="px-3 py-2.5">17 tiles</td><td className="px-3 py-2.5 text-[var(--muted)]">12-15 production buildings</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="The 17-Tile Rule">
          Carts travel at full speed for <b>exactly 17 tiles</b> of road distance from warehouse. Beyond 17 tiles, cart speed drops to walking speed — a <b>72% throughput loss</b>. Paved roads add 0% range but increase cart speed by 50%. Always cluster production within 17 tiles of its warehouse.
        </Callout>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { title: "Multi-Warehouse Strategy", desc: "For production clusters larger than 15 buildings, build a <b>second warehouse</b> in the center of the overflow cluster. Warehouses don&apos;t share cart pools — each has its own fleet." },
            { title: "Loading Ramp Math", desc: "A Level 3 warehouse has 4 ramps. Each ramp processes 1 cart at a time. If your queue consistently exceeds <b>100 tons</b>, add a second warehouse — the ramps are your throughput bottleneck, not the carts." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/40 p-4">
              <b className="text-sm">{item.title}</b>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRADE UNION ─── */}
      <section id="section-9">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          🔧 Trade Union: Best Items by Industry
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Industry</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Best Specialist</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Source</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Effect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">Sewing Machines</td><td className="px-3 py-2.5">Dario the Mechanical Engineer</td><td className="px-3 py-2.5 text-[var(--muted)]">Eli Bleakworth (prison)</td><td className="px-3 py-2.5 text-[var(--muted)]">All sewing factories +50% productivity, replaces cotton input with iron</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">Bakeries</td><td className="px-3 py-2.5">Mrs. Mayson, Baking Pioneer</td><td className="px-3 py-2.5 text-[var(--muted)]">Expeditions (New World)</td><td className="px-3 py-2.5 text-[var(--muted)]">Bakeries +60% productivity, grain input replaced with wood</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">Canned Food</td><td className="px-3 py-2.5">Chef Michel</td><td className="px-3 py-2.5 text-[var(--muted)]">Eli Bleakworth (prison)</td><td className="px-3 py-2.5 text-[var(--muted)]">Canneries +50% productivity, replaces goulash with pigs</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">Spectacles</td><td className="px-3 py-2.5">Professor Razzaq</td><td className="px-3 py-2.5 text-[var(--muted)]">Isabel Sarmento (NW)</td><td className="px-3 py-2.5 text-[var(--muted)]">Spectacle factories +40%, replaces brass with wood</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">Light Bulbs</td><td className="px-3 py-2.5">Seraphim Papadikas</td><td className="px-3 py-2.5 text-[var(--muted)]">Research Institute</td><td className="px-3 py-2.5 text-[var(--muted)]">Light bulb factories +50%, replaces glass filament with wood</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">Champagne</td><td className="px-3 py-2.5">Brother Hilarius</td><td className="px-3 py-2.5 text-[var(--muted)]">Expeditions (Arctic)</td><td className="px-3 py-2.5 text-[var(--muted)]">Champagne cellars +50% productivity</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">All Heavy Industry</td><td className="px-3 py-2.5">Feras Alsarami, the Pyrphorian</td><td className="px-3 py-2.5 text-[var(--muted)]">Grand Gallery (Expeditions)</td><td className="px-3 py-2.5 text-[var(--muted)]">+30% productivity for ALL heavy industry in radius when electrified</td></tr>
              <tr><td className="px-3 py-2.5 text-[var(--neon)]">All Agriculture</td><td className="px-3 py-2.5">Dr. Ali Al-Zahir, the Botanist</td><td className="px-3 py-2.5 text-[var(--muted)]">Grand Gallery (Expeditions)</td><td className="px-3 py-2.5 text-[var(--muted)]">All crop farms +30% productivity, -50% workforce needed</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="strategy" title="Stacking Multiplier Example">
          <b>Dario + Printing Press + Feras Alsarami:</b> Dario makes input iron instead of cotton. Printing Press (+25%). Feras (+30% when electrified). Total: <b>+105% sewing machine output</b> with zero cotton cost and reduced workforce. This single TU setup can supply sewing machines for 4,500+ artisans from 1 factory.
        </Callout>
      </section>

      {/* ─── ELECTRICITY ─── */}
      <section id="section-10">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">
          ⚡ Electricity Optimization
        </h2>

        <div className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Power Plant Type</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Radius</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Fuel</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Productivity Bonus</th>
                <th className="px-3 py-2.5 text-left font-semibold text-[var(--fg)]">Best Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr><td className="px-3 py-2.5">Oil Power Plant</td><td className="px-3 py-2.5">45 tiles</td><td className="px-3 py-2.5 text-[var(--muted)]">Oil (from Oil Refinery or NW import)</td><td className="px-3 py-2.5 text-[var(--neon)]">+100%</td><td className="px-3 py-2.5 text-[var(--muted)]">Engineers and above. Double all production in radius.</td></tr>
              <tr><td className="px-3 py-2.5">Gas Power Plant</td><td className="px-3 py-2.5">40 tiles</td><td className="px-3 py-2.5 text-[var(--muted)]">Gas (Arctic import)</td><td className="px-3 py-2.5 text-[var(--neon)]">+100%</td><td className="px-3 py-2.5 text-[var(--muted)]">Arctic colonies. Cleaner than oil but requires Arctic gas supply.</td></tr>
            </tbody>
          </table>
        </div>

        <Callout type="info" title="Electricity Math">
          A building under electricity produces at <b>200%</b> (base 100% + 100% electricity bonus). This means a chain that required 4 buildings now requires 2. <b>Electricity effectively doubles your island&apos;s production capacity.</b> Always electrify your highest-value chains first: Spectacles, Light Bulbs, and Steam Motors.
        </Callout>

        <Callout type="tip" title="Power Plant Placement">
          Place the power plant at the <b>center</b> of your industrial district. The 45-tile radius covers roughly the entire buildable area of a medium island. Overlap from multiple plants does NOT stack — don&apos;t build two plants near each other. Use the oil from your first refinery in the New World.
        </Callout>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[var(--border)] pt-8">
        <h2 className="font-display text-xl font-bold tracking-tight text-[var(--neon)]">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "What's the most efficient farmer setup?", a: "4 fisheries + 2 framework knitters + 2 potato farms + 1 schnapps distillery. This feeds ~3,200 farmers. Add a second warehouse at 2,500+ farmers." },
            { q: "How do I know if I&apos;m overproducing?", a: "Open Ctrl+Q (Production Stats). Green bar = production exceeds consumption. Blue bar = balanced (±10%). Red bar = shortage. Aim for blue on all goods. Green above 30% means you&apos;re wasting maintenance." },
            { q: "Best Trade Union specialist for beginners?", a: "Dario the Mechanical Engineer (Eli Bleakworth&apos;s prison). Eliminates cotton from sewing machines — saves 2+ cotton plantations, a shipping route, and a cotton mill. Best single-item ROI in the game." },
            { q: "When should I go to the New World?", a: "The moment the expedition unlocks (~2 hours). Delaying means your artisans stall on canned food and rum. Bring 50 timber, 50 steel beams, and 50 bricks on your first ship to build a colony immediately." },
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
