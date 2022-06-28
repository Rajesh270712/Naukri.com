import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LandingPage1 from "./Components/Landingpage"
import { SearchPage } from './Components/search Page/searchPage';
import { store } from './Redux/store';


function App() {
  return (
    <ChakraProvider theme={theme}>

      <Provider store={store} >
      <LandingPage1 />
      <SearchPage/>
      </Provider>

    </ChakraProvider>
  );
}

export default App;
