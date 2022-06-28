import React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
} from '@chakra-ui/react';
<<<<<<< HEAD
import LandingPage1 from "./Components/Landingpage"
import { SearchPage } from './Components/search Page/searchPage';
=======
import { UserHomePage} from "./Pages/UserHomePage";
>>>>>>> ec1f0171ede28077c6352e601a1d6e79648177f0
import { store } from './Redux/store';
import { SearchPage } from './Pages/search Page/searchPage';



function App() {
  return (
    <ChakraProvider >
      <Provider store={store} >
<<<<<<< HEAD
      <LandingPage1 />
      <SearchPage/>
=======
      {/* <SearchPage/> */}
      <UserHomePage/>
>>>>>>> ec1f0171ede28077c6352e601a1d6e79648177f0
      </Provider>
    </ChakraProvider>
  );
}

export default App;
