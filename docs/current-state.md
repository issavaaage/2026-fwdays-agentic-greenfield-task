# Current state

**Last action:** 2026-06-27T21:00:00Z

## What was done

### Design system integration
- `src/styles/ds/` — 8 CSS token files
- `src/components/ds/` — 13 adapted TSX components + barrel export
- `app/globals.css` — DS tokens + Tailwind `@theme inline` bridge
- `app/layout.tsx` — Hanken Grotesk + JetBrains Mono fonts
- `DESIGN.md` — brand guide, component catalog, adherence rules

### Bug fix
- `types/validator.ts` — fixed pre-existing path bug
- `tsconfig.json` — fixed `@/*` alias from `["./*"]` to `["./src/*"]`

### AGENTS.md
- Product docs rule, current-state rule, frontend-skill reference, Next.js version rule
- UI kit reference files listed and pointed to

### Skill
- `.agents/skills/frontend-design-skill/SKILL.md` — design system conventions extracted from AGENTS.md

### Capability split
- `docs/capabilities/00-overview.md` through `06-pagination.md` — 6 ordered OpenSpec-ready capability files

### UI kit reference
- `docs/ui-kit-reference/AppShell.jsx`, `ListScreen.jsx`, `FilterBar.jsx`, `DetailScreen.jsx`, `icons.jsx`, `README.md`

### Shell capability (COMPLETE, ARCHIVED)
- Layout components: `src/components/layout/TopBar.tsx`, `src/components/layout/Footer.tsx`
- `app/layout.tsx` wired with TopBar + Footer + responsive container
- Delta spec synced to `openspec/specs/app-shell/spec.md`
- Archived: `openspec/changes/archive/2026-06-27-shell/`

### Pokemon-list capability (COMPLETE, PENDING ARCHIVE)
- `src/lib/pokemon.ts` — `fetchPokemonList`, `fetchPokemon` with 24 h revalidation
- `src/lib/i18n/en.ts` — empty state UI strings
- `app/pokemon/page.tsx` — Server Component, 20-card responsive grid
- `app/page.tsx` — redirects to `/pokemon` (307)

## Current state

- App shell live: sticky TopBar, Footer, DS tokens
- `/pokemon` renders 20 Pokémon cards (official sprite, `#NNNN` dex, name, type badges)
- Root `/` redirects to `/pokemon`
- All fetching server-side; `/pokemon` builds with `Revalidate: 1d`
- Cards link to `/pokemon/[id]` — detail page not yet implemented
- `tsc --noEmit` and `npm run build` pass clean

## Known issues

None.

## Suggested next steps

1. Archive pokemon-list: `/opsx:archive`
2. Commit
3. Propose and implement capability 3 — pokemon-detail
