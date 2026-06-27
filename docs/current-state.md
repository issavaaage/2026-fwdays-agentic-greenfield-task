# Current state

**Last action:** 2026-06-27T23:30:00Z

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

### Pokemon-detail capability (COMPLETE, ARCHIVED)
- `app/pokemon/[id]/page.tsx` — full profile: artwork, dex#, name, genus, types, flavor, stats, abilities, height/weight, generation, legendary badge, back link
- `src/lib/pokemon.ts` extended — `fetchPokemonDetail`, `fetchPokemonSpecies`
- `src/lib/i18n/en.ts` extended — stat labels, generation names, detail strings
- Archived: `openspec/changes/archive/2026-06-27-pokemon-detail/`

### Search capability (COMPLETE, PENDING ARCHIVE)
- `src/lib/search.ts` — pure `filterByName(list, query)` helper (TC-PURE-01 compliant)
- `src/lib/i18n/en.ts` extended — `search.placeholder`, `search.label`, `search.noResults.*`
- `src/components/features/SearchBar.tsx` — `"use client"` component with 300 ms debounce, `useRouter` URL push, `initialValue` prop
- `app/pokemon/page.tsx` updated — accepts `searchParams` Promise, filters list, renders SearchBar above grid, context-aware empty state

## Current state

- Full browse → search → click → read → back loop working
- `/pokemon` → 20-card grid with search input; filtering works in real time
- `?search=<term>` persisted in URL; shareable and bookmarkable
- Clearing search restores full list, removes `?search=` param
- No-results empty state distinguishes search misses from load errors
- `/pokemon/[id]` → full detail page unchanged
- `tsc --noEmit` and `npm run build` pass clean
- Search is scoped to the fetched 20-item page (Pokémon #1–20); broader search across all 1025 is deferred to capability 6 (pagination)

## Known issues

None.

## Suggested next steps

1. Archive search change: `/opsx:archive`
2. Commit
3. Propose and implement capability 5 — filters (FR-FILTER-01..05)
