// Search Steam for correct App IDs by game name
// Uses storesearch with cc=us to avoid region blocking

const API = "https://store.steampowered.com/api/storesearch/";

async function search(name) {
  const url = `${API}?term=${encodeURIComponent(name)}&cc=us&l=english`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.items && data.items[0]) {
    return { id: data.items[0].id, name: data.items[0].name };
  }
  return null;
}

async function main() {
  const games = process.argv.slice(2);
  if (games.length === 0) {
    console.log("Usage: node scripts/search-steam.js \"Game Name\" \"Game Name\" ...");
    console.log("Or pipe names: echo 'Game1\\nGame2' | xargs node scripts/search-steam.js");
    process.exit(1);
  }

  for (const name of games) {
    const result = await search(name);
    if (result) {
      console.log(`${result.id} | ${result.name}`);
    } else {
      console.log(`NOT_FOUND | ${name}`);
    }
    await new Promise(r => setTimeout(r, 1500)); // rate limit
  }
}

main();
