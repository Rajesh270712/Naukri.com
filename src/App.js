import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import LandingPage1 from "./Pages/Landingpage"
// import { SearchPage } from './Components/search Page/searchPage';
import { UserHomePage} from "./Pages/UserHomePage";
import { store } from './Redux/store';
// import { SearchPage } from './Pages/search Page/searchPage';



function App() {
  return (
    <ChakraProvider >
      <Provider store={store} >
      <LandingPage1 />
      {/* <SearchPage/> */}
      {/* <SearchPage/> */}
      <UserHomePage/>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
