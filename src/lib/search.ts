import type { PokemonListItem } from "./pokemon";

export function filterByName(
  list: PokemonListItem[],
  query: string
): PokemonListItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((p) => p.name.toLowerCase().includes(q));
}
