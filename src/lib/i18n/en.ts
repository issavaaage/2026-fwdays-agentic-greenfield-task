export const strings = {
  emptyState: {
    title: "No Pokémon found",
    description: "The Pokédex data could not be loaded. Please try again later.",
  },
  statLabels: {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Atk",
    "special-defense": "Sp. Def",
    speed: "Speed",
  } as Record<string, string>,
  generationNames: {
    "generation-i": "Gen 1 — Kanto",
    "generation-ii": "Gen 2 — Johto",
    "generation-iii": "Gen 3 — Hoenn",
    "generation-iv": "Gen 4 — Sinnoh",
    "generation-v": "Gen 5 — Unova",
    "generation-vi": "Gen 6 — Kalos",
    "generation-vii": "Gen 7 — Alola",
    "generation-viii": "Gen 8 — Galar",
    "generation-ix": "Gen 9 — Paldea",
  } as Record<string, string>,
  detail: {
    legendary: "Legendary",
    mythical: "Mythical",
    hiddenAbility: "Hidden",
    backLink: "Back to results",
  },
  search: {
    placeholder: "Search Pokémon…",
    label: "Search Pokémon",
    noResults: {
      title: "No Pokémon match your search",
      description: "Try a different name or clear the search.",
    },
  },
} as const;
