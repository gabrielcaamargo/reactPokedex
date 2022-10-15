import { Input } from '@chakra-ui/react';
import Pokemon from '../Pokemon';

import PokemonType from '../../assets/poketypes';

export default function PokemonList() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <header className="flex justify-center mx-auto mt-8">
        <Input placeholder="Search a pokémon" size="lg" />
      </header>

      <div className="mt-12">
        <h2 className="text-3xl font-sora font-bold text-slate-500">All pokémon (1st generation)</h2>

        <div className="mt-6 grid grid-cols-4 gap-4 mb-8 w-full">
          <Pokemon
            img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            name="Pikachu"
            type={PokemonType.EletricType}
            typeText="Eletric"
          />

          <Pokemon
            img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
            name="Pidgeot"
            type={PokemonType.FlyingType}
            typeText="Flying"
            secondType={PokemonType.NormalType}
            secondTypeText="Normal"
          />
        </div>
      </div>
    </main>
  );
}
