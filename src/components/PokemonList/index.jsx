import { Input } from '@chakra-ui/react';
import Pokemon from '../Pokemon';

const pokemons = [
  {
    key: Math.random(),
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
    name: 'Pichu',
    type: ['Eletric'],
  },

  {
    key: Math.random(),
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    name: 'Pikachu',
    type: ['Eletric'],
  },

  {
    key: Math.random(),
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
    name: 'Raichu',
    type: ['Eletric'],
  },

  {
    key: Math.random(),
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
    name: 'Pidgey',
    type: ['Flying', 'Normal'],
  },
];

export default function PokemonList() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <header className="flex justify-center mx-auto mt-8">
        <Input placeholder="Search a pokémon" size="lg" />
      </header>

      <div className="mt-12">
        <h2 className="text-3xl font-sora font-bold text-slate-500">All pokémon (1st generation)</h2>

        <div className="mt-6 grid grid-cols-4 gap-4 mb-8 w-full">
          {pokemons.map(
            (pokemon) => (
              <Pokemon
                key={pokemon.key}
                img={pokemon.img}
                name={pokemon.name}
                types={pokemon.type}
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
}
