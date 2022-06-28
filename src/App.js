import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { SearchPage } from './Components/search Page/searchPage';
import { store } from './Redux/store';
import { UserHomePage} from "./Pages/UserHomePage";


function App() {
  return (
    <ChakraProvider >
      <Provider store={store} >
      {/* <SearchPage/> */}
      <UserHomePage/>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
