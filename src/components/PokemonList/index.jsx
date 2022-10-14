import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import Pokeball from '../../assets/icons/pokeball.svg';
import Pokemon from '../Pokemon';

export default function PokemonList() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <header className="flex justify-center mx-auto mt-8">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<img src={Pokeball} width={24} alt="Pokeball icon" />}
          />
          <Input placeholder="Search a pokémon" size="lg" />

        </InputGroup>
      </header>
      <div className="mt-12">
        <h2 className="text-3xl font-sora font-bold text-slate-500">All pokémon (1st generation)</h2>

        <div className="mt-6">
          <Pokemon />
        </div>
      </div>
    </main>
  );
}
