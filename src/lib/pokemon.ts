const BASE = "https://pokeapi.co/api/v2";

interface ListEntry {
  name: string;
  url: string;
}

interface PokéAPIListResponse {
  count: number;
  results: ListEntry[];
}

interface PokéAPIPokemon {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
}

export interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
}

export async function fetchPokemonList(
  offset: number,
  limit: number
): Promise<PokemonListItem[]> {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) return [];
  const data: PokéAPIListResponse = await res.json();
  const entries = await Promise.all(
    data.results.map((entry) => fetchPokemon(idFromUrl(entry.url)))
  );
  return entries.filter((e): e is PokemonListItem => e !== null);
}

export async function fetchPokemon(
  id: number | string
): Promise<PokemonListItem | null> {
  const res = await fetch(`${BASE}/pokemon/${id}`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) return null;
  const data: PokéAPIPokemon = await res.json();
  return {
    id: data.id,
    name: data.name,
    types: data.types.map((t) => t.type.name),
  };
}

function idFromUrl(url: string): number {
  const parts = url.replace(/\/$/, "").split("/");
  return Number(parts[parts.length - 1]);
}
