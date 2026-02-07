# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Paygent is an AI-powered payment orchestration product (Cronos blockchain / x402 protocol). This repo is the **primary marketing website** — a static single-page app with no backend, no API calls, and all content hardcoded in components. Live at **paygent.uk**.

There is a sibling app at `../cronos-fintech-trust/` (earlier alternative version) — they are fully independent, not a monorepo.

## Commands

```bash
pnpm dev          # Dev server with HMR (auto-installs deps)
pnpm build        # TypeScript check + Vite production build
pnpm build:prod   # Production build (BUILD_MODE=prod disables source-identifier plugin)
pnpm lint         # ESLint (flat config, ESLint 9)
pnpm preview      # Preview production build locally
pnpm clean        # Remove node_modules, pnpm-store, lockfile
```

No test framework is configured.

## Architecture

**Entry flow**: `index.html` → `src/main.tsx` (ErrorBoundary + StrictMode) → `src/App.tsx`

**App.tsx renders sections in order**:
`Navigation` → `HeroSection` → `FeaturesSection` → `UseCasesSection` → `TechnologySection` → `FooterSection`

All page sections live in `src/components/*.tsx`. There is `react-router-dom` v6 installed but no routes are defined — it's a single scroll page.

**Path alias**: `@/` → `./src/` (in both vite.config.ts and tsconfig.json)

## UI & Styling

- **shadcn/ui** (New York style, zinc base color, lucide icons) — components in `src/components/ui/`
- **Tailwind CSS 3** with CSS custom properties (HSL) in `src/index.css`
- Always use `cn()` from `@/lib/utils` for class merging (clsx + tailwind-merge)
- **Dark mode only** — enforced via `<html class="dark">` in index.html and `classList.add('dark')` in App.tsx

**Brand colors**: navy background `#020817`, card `#0B1832`, primary blue CTA `#3B82F6`

**Custom utility classes** (defined in `src/index.css`): `.glass`, `.glass-card`, `.glow-purple`, `.glow-blue`, `.bg-grid-white`, `.bg-dot-white`

**Custom Tailwind extensions** (in `tailwind.config.js`): `bg-paygent-gradient`, `animate-float`, `animate-pulse-slow`

## TypeScript & Linting

- `strict: false` — all strict-family checks disabled in tsconfig.app.json
- ESLint allows `no-unused-vars` and `no-explicit-any`

## Deployment

- **Cloudflare Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `main`, builds with `pnpm build:prod`, deploys via `wrangler-action@v3`
- SPA routing: `public/_redirects` (`/* /index.html 200`)
- **Secrets**: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

## Vite Plugins

- `@vitejs/plugin-react` — React Fast Refresh
- `vite-plugin-source-identifier` — adds `data-matrix-*` debug attributes in non-prod builds; disabled when `BUILD_MODE=prod`
