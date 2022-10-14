import { ChakraProvider } from '@chakra-ui/react';

import PokemonArea from '../PokemonArea';
import PokemonList from '../PokemonList';

export default function App() {
  return (
    <ChakraProvider>
      <main>
        <PokemonArea />
        <PokemonList />
      </main>
    </ChakraProvider>
  );
}
