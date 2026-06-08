// Verify correct Steam App IDs
const games = [
  "Coral Island", "Fae Farm", "Sun Haven", "Slime Rancher",
  "My Time at Sandrock", "Immortal Life", "Harvestella", "Dinkum",
  "Roots of Pacha", "Littlewood", "Travelers Rest", "Kynseed",
  "Tiny Glade", "Timberborn", "Manor Lords", "Against the Storm",
  "Palworld", "Valheim", "Factorio", "Project Zomboid",
  "Elden Ring", "Dragon Shelter", "Solarpunk", "Campsite Hustle",
  "Life Below", "Deep Crafter", "House Flipper",
  "Rune Factory 5", "Ooblets", "Bears and Breakfast",
  "Paralives", "Field of Mistria", "Staxel",
];

async function main() {
  for (const name of games) {
    const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(name)}&l=english`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.items && data.items[0]) {
        console.log(`${data.items[0].id} | ${data.items[0].name}`);
      } else {
        console.log(`NOT FOUND | ${name}`);
      }
    } catch (e) {
      console.log(`ERROR | ${name}`);
    }
    // Rate limit
    await new Promise(r => setTimeout(r, 1500));
  }
}

main();
