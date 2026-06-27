# Current state

**Last action:** 2026-06-27T23:55:00Z

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

### Search capability (COMPLETE, ARCHIVED)
- `src/lib/search.ts` — pure `filterByName(list, query)` helper (TC-PURE-01 compliant)
- `src/lib/i18n/en.ts` extended — `search.placeholder`, `search.label`, `search.noResults.*`
- `src/components/features/SearchBar.tsx` — `"use client"` component with 300 ms debounce, `useRouter` URL push, `initialValue` prop
- `app/pokemon/page.tsx` updated — accepts `searchParams` Promise, filters list, renders SearchBar above grid, context-aware empty state

### Filters capability (COMPLETE, PENDING ARCHIVE)
- `src/lib/pokemon.ts` extended — `PokemonIndexEntry` type, `fetchPokemonIndex()` (batched fetch of all 1025 Pokémon + species, `revalidate: 86400`)
- `src/lib/filters.ts` — pure `filterByType`, `filterByGeneration`, `filterByLegendary` helpers (TC-PURE-01 compliant)
- `src/lib/search.ts` updated — `filterByName` now generic `<T extends { name: string }>` (full-index compatible)
- `src/lib/i18n/en.ts` extended — `filters.*` strings (type heading, gen options, legendary label, clear button)
- `app/api/pokemon-index/route.ts` — Route Handler serving the full Pokémon index with `revalidate: 86400`
- `src/components/features/FilterBar.tsx` — `"use client"` component: 18 type badges (TypeBadge selectable), generation Select (Gen 1–9), legendary Switch, "Clear filters" ghost Button
- `app/pokemon/page.tsx` updated — fetches full index, applies filter pipeline (name → type → generation → legendary), slices 20 for current page, passes initial props to FilterBar and SearchBar

## Current state

- Full browse → filter → search → click → read → back loop working
- `/pokemon` → 20-card grid with type multi-select, generation select, legendary toggle, and search
- All filters reflected in URL params (`?type=fire,water&gen=1&legendary=1&search=mewtwo`); shareable and bookmarkable
- Filter controls pre-populated on page reload from URL params
- Search now covers all 1025 Pokémon (was limited to 20); searching "mewtwo" returns Mewtwo #150
- "Clear filters" removes all params and resets search input; button hidden when no filters active
- `tsc --noEmit` and `npm run build` pass clean
- Build shows `/api/pokemon-index` with `Revalidate: 1d`

## Known issues

None.

## Suggested next steps

1. Archive filters change: `/opsx:archive`
2. Commit
3. Propose and implement capability 6 — pagination (FR-PAGE-01..02)
