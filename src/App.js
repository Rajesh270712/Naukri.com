import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { store } from './Redux/store';
import { SearchPage } from './Pages/search Page/searchPage';


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
