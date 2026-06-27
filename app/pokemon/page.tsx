import { PokemonCard, EmptyState } from "@/components/ds";
import type { PokemonType } from "@/components/ds";
import { fetchPokemonList } from "@/lib/pokemon";
import { strings } from "@/lib/i18n/en";

export default async function PokemonListPage() {
  const pokemon = await fetchPokemonList(0, 20);

  if (pokemon.length === 0) {
    return (
      <EmptyState
        title={strings.emptyState.title}
        description={strings.emptyState.description}
      />
    );
  }

  return (
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
  );
}
