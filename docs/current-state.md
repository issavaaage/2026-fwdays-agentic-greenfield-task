# Current state

**Last action:** 2026-06-27T22:00:00Z

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

### Pokemon-list capability (COMPLETE, ARCHIVED)
- `src/lib/pokemon.ts` — `fetchPokemonList`, `fetchPokemon`
- `src/lib/i18n/en.ts` — empty state strings
- `app/pokemon/page.tsx` — 20-card responsive grid
- `app/page.tsx` → redirect to `/pokemon`
- Archived: `openspec/changes/archive/2026-06-27-pokemon-list/`

### Pokemon-detail capability (COMPLETE, PENDING ARCHIVE)
- `app/pokemon/[id]/page.tsx` — full profile: artwork, dex#, name, genus, types, flavor, stats, abilities, height/weight, generation, legendary badge, back link
- `src/lib/pokemon.ts` extended — `fetchPokemonDetail`, `fetchPokemonSpecies`
- `src/lib/i18n/en.ts` extended — stat labels, generation names, detail strings

## Current state

- Full browse → click → read → back loop working
- `/pokemon` → 20-card grid, each card links to `/pokemon/[id]`
- `/pokemon/[id]` → full detail page (two parallel PokéAPI fetches, Server Component)
- Invalid IDs return 404 via `notFound()`
- Legendary/Mythical badge shown conditionally
- `tsc --noEmit` and `npm run build` pass clean
- Back link is `/pokemon` (URL param preservation pending caps 4–6)

## Known issues

None.

## Suggested next steps

1. Archive pokemon-detail: `/opsx:archive`
2. Commit
3. Propose and implement capability 4 — search
