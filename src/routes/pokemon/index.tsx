import { createFileRoute, Link } from '@tanstack/react-router';
import { getPokemonList } from '../../api/pokemon';

export const Route = createFileRoute('/pokemon/')({
  component: PokemonList,
  loader: getPokemonList,
});

function PokemonList() {
  const pokemons = Route.useLoaderData();

  console.log(pokemons);

  return (
    <>
      <h2>pokemon list</h2>
      <ul>
        {pokemons?.map((pokemon, i) => (
          <li key={i}>
            <Link
              to='/pokemon/$id'
              params={{ id: pokemon.id }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
