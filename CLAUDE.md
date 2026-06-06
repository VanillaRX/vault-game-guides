# Vault Game Guides

Strategy & management game walkthroughs. Anno 1800, Civ 6, RimWorld, Farthest Frontier, Going Medieval, Foundation.

## Git Workflow

This is an **independent repository** — NOT part of the parent ClaudeCode repo.

- **Repo**: `git@github.com:VanillaRX/vault-game-guides.git`
- **Push**: `git push origin main` (pushes to vault-game-guides, NOT ClaudeCode)
- **Deploy**: Push triggers GitHub Actions → builds static export → deploys to GitHub Pages
- **Live URL**: `https://vanillarx.github.io/vault-game-guides`

## Project Structure

```
website-1-gamemanual/     # ← independent git repo
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # UI components
│   ├── content/guides/   # Guide content (TSX components)
│   └── lib/              # Data, types, Steam API, screenshots
├── public/               # Static assets
└── .github/workflows/    # GitHub Pages deploy workflow
```

## Build

```bash
npm run dev       # Local dev server
npm run build     # Static export → out/
```

Base path configured for GitHub Pages: `/vault-game-guides`
