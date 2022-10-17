import { useContext } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MagnifyingGlass } from 'phosphor-react';
import Pokemon from '../Pokemon';
import { PokemonContext } from '../../contexts/PokemonContext';

export default function PokemonList() {
  const context = useContext(PokemonContext);
  // console.log(context[0]);

  return (
    <main className="max-w-[1200px] mx-auto">
      <header className="flex justify-center mx-auto mt-2 smallest:w-[65vw] mobile:w-[65vw] tablet:w-[60vw]">
        <InputGroup>
          <InputLeftElement
            children={<MagnifyingGlass color="#FFF" weight="thin" size={24} />}
            pointerEvents="none"
            className="mt-[4px]"
          />
          <Input
            placeholder="Search a pokémon"
            size="lg"
          />
        </InputGroup>
      </header>

      <div className="mt-12 smallest:px-4 mobile:px-4">
        <h2 className="text-3xl font-sora font-bold text-slate-500 smallest:text-center mobile:text-center">All pokémon (1st generation)</h2>

        <div className="mt-6 grid mobile:grid-cols-1 mobile:gap-2 mobile:justify-center tablet:grid-cols-2 big-tablet:grid-cols-2 laptop:grid-cols-4 smallest:justify-center mobile:justify-center tablet:justify-center gap-4 mb-8 w-full">
          {context.map((pokemon) => (
            <Pokemon name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} />
          ))}
        </div>
      </div>
    </main>
  );
}
