import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { SearchPage } from './Components/search Page/searchPage';
import { store } from './Redux/store';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store} >

      <SearchPage/>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
