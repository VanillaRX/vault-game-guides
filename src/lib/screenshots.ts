// Real screenshots fetched from store.steampowered.com/api/appdetails
// All URLs verified: Steam CDN, HTTP 200

export const SCREENSHOTS: Record<string, string[]> = {
  "anno-1800": [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/916440/ss_9756553b540fbfefc2d96baafc33aecd7ef1dc44.600x338.jpg?t=1778771290",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/916440/ss_cad25bea4177e0c49c104c54138c0b8ba4c1ab3e.600x338.jpg?t=1778771290",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/916440/ss_5cd9e958b856c98900a65328b51bfe41636e0bde.600x338.jpg?t=1778771290",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/916440/ss_fcafb5754256f29391149381df88bf7081e23a3f.600x338.jpg?t=1778771290",
  ],
  "civilization-6": [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_12cc6e1f4084de5bc0f66bfdbe3aaf3e59388b53.600x338.jpg?t=1740607040",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_6c4a3cfb61f1a9677cf2ac549c2816a4e651f741.600x338.jpg?t=1740607040",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_b2bf12299c38214fe520af0f724a6349d17ed330.600x338.jpg?t=1740607040",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/ss_7f598198526afc260d939a98af4d76d95f5349e4.600x338.jpg?t=1740607040",
  ],
  "rimworld": [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/80e383ef19353058791efe17a6485849246c9c17/ss_80e383ef19353058791efe17a6485849246c9c17.600x338.jpg?t=1780420333",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/a6158c5cef23ac8157b37dd3eb17f3c2d2649e93/ss_a6158c5cef23ac8157b37dd3eb17f3c2d2649e93.600x338.jpg?t=1780420333",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/cccfece4c643fd32d438642fbea1b980bc519a48/ss_cccfece4c643fd32d438642fbea1b980bc519a48.600x338.jpg?t=1780420333",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/294100/57c3e8d556d47bb5ad048699643528aefc652aa6/ss_57c3e8d556d47bb5ad048699643528aefc652aa6.600x338.jpg?t=1780420333",
  ],
  "farthest-frontier": [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1044720/8e636bc21f37a75991b7fcef0bde40debf8a0a9c/ss_8e636bc21f37a75991b7fcef0bde40debf8a0a9c.600x338.jpg?t=1774274689",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1044720/ss_630013acd6eec95b55db558765faf85caeec6472.600x338.jpg?t=1774274689",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1044720/ss_e1ccf51e3f514b8cd74566dc4f5733127f2bfc85.600x338.jpg?t=1774274689",
  ],
  "going-medieval": [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1029780/eaaa7d853e843ae5fd51c4ee4ab4e006a388fc64/ss_eaaa7d853e843ae5fd51c4ee4ab4e006a388fc64.600x338.jpg?t=1779288528",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1029780/f981c9c208c58770eb05a6b9d6a058de51c2ca90/ss_f981c9c208c58770eb05a6b9d6a058de51c2ca90.600x338.jpg?t=1779288528",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1029780/644c77bff4424edc7fc7401d085719ba4627bbb4/ss_644c77bff4424edc7fc7401d085719ba4627bbb4.600x338.jpg?t=1779288528",
  ],
  "foundation": [
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690830/ss_2a8289eaca31fa5b81f379b42c47010bb8070f15.600x338.jpg?t=1765384527",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690830/ss_942d0a44b1e5bb5caf601feb082f8b14124c8209.600x338.jpg?t=1765384527",
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690830/ss_dbc1c23ffd249f0c8b07aae6312f33aa63a0e8eb.600x338.jpg?t=1765384527",
  ],
};

export function getScreenshots(slug: string, count = 3): string[] {
  return (SCREENSHOTS[slug] || []).slice(0, count);
}
