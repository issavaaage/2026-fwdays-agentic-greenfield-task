import { PokemonCard, EmptyState } from "@/components/ds";
import type { PokemonType } from "@/components/ds";
import { SearchBar } from "@/components/features/SearchBar";
import { fetchPokemonList } from "@/lib/pokemon";
import { filterByName } from "@/lib/search";
import { strings } from "@/lib/i18n/en";

interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function PokemonListPage({ searchParams }: PageProps) {
  const { search = "" } = await searchParams;
  const allPokemon = await fetchPokemonList(0, 20);
  const pokemon = filterByName(allPokemon, search);

  return (
    <div className="space-y-6">
      <SearchBar initialValue={search} />

      {pokemon.length === 0 ? (
        <EmptyState
          title={search ? strings.search.noResults.title : strings.emptyState.title}
          description={
            search
              ? strings.search.noResults.description
              : strings.emptyState.description
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {pokemon.map((p) => (
            <PokemonCard
              key={p.id}
              id={p.id}
              name={p.name}
              types={p.types as PokemonType[]}
              href={`/pokemon/${p.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
