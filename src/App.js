import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { UserHomePage} from "./Pages/UserHomePage";
import { store } from './Redux/store';
import { SearchPage } from './Pages/search Page/searchPage';



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
