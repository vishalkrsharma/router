import { createFileRoute } from '@tanstack/react-router';
import { getPokemon } from '../../api/pokemon';

export const Route = createFileRoute('/pokemon/$id')({
  component: Pokemon,
  loader: async ({ params }) => getPokemon(params.id),
});

function Pokemon() {
  const { id } = Route.useParams({});
  const pokemon = Route.useLoaderData();

  console.log(pokemon);
  console.log(id);

  return (
    <div>
      <div>height: {pokemon.height}</div>
    </div>
  );
}
