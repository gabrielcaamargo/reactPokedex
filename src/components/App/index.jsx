import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import PokemonArea from '../PokemonArea';
import PokemonList from '../PokemonList';

import { AppContext } from '../../contexts/AppContext';
import { PokemonContext } from '../../contexts/PokemonContext';

export default function App() {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

    const fetchApi = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data.results);
      } catch {
        console.log('Error');
      }
    };

    fetchApi();
  }, []);

  const convertToCapitalizedString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <ChakraProvider>
      <AppContext.Provider value={convertToCapitalizedString}>
        <PokemonContext.Provider value={apiData}>
          <main>
            <PokemonArea />
            <PokemonList />
          </main>
        </PokemonContext.Provider>
      </AppContext.Provider>
    </ChakraProvider>
  );
}
