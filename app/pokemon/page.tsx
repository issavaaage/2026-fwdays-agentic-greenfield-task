import { PokemonCard, EmptyState } from "@/components/ds";
import type { PokemonType } from "@/components/ds";
import { SearchBar } from "@/components/features/SearchBar";
import { FilterBar } from "@/components/features/FilterBar";
import { fetchPokemonIndex } from "@/lib/pokemon";
import { filterByName } from "@/lib/search";
import { filterByType, filterByGeneration, filterByLegendary } from "@/lib/filters";
import { strings } from "@/lib/i18n/en";

const PAGE_SIZE = 20;

interface PageProps {
  searchParams: Promise<{
    search?: string;
    type?: string;
    gen?: string;
    legendary?: string;
    page?: string;
  }>;
}

export default async function PokemonListPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = params.search ?? "";
  const selectedTypes = params.type ? params.type.split(",").filter(Boolean) : [];
  const gen = params.gen ? parseInt(params.gen, 10) : null;
  const legendary = params.legendary === "1";
  const page = params.page ? Math.max(1, parseInt(params.page, 10)) : 1;

  const allPokemon = await fetchPokemonIndex();

  let filtered = filterByName(allPokemon, search);
  filtered = filterByType(filtered, selectedTypes);
  if (gen) filtered = filterByGeneration(filtered, gen);
  if (legendary) filtered = filterByLegendary(filtered);

  const start = (page - 1) * PAGE_SIZE;
  const pokemon = filtered.slice(start, start + PAGE_SIZE);

  const hasActiveFilters = !!(search || selectedTypes.length > 0 || gen || legendary);

  return (
    <div className="space-y-6">
      <SearchBar key={search} initialValue={search} />
      <FilterBar
        initialTypes={selectedTypes}
        initialGen={params.gen ?? ""}
        initialLegendary={legendary}
        initialSearch={search}
      />

      {pokemon.length === 0 ? (
        <EmptyState
          title={
            hasActiveFilters
              ? strings.search.noResults.title
              : strings.emptyState.title
          }
          description={
            hasActiveFilters
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
