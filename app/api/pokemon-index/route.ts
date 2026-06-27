import { fetchPokemonIndex } from "@/lib/pokemon";

export const revalidate = 86400;

export async function GET() {
  const index = await fetchPokemonIndex();
  return Response.json(index);
}
