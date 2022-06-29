import React from 'react';
import { Provider } from 'react-redux';
<<<<<<< HEAD
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
=======

import { UserHomePage} from "./Pages/UserHomePage";


import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {SearchPage} from "./Pages/search Page/searchPage"
import LandingPage1 from "./Pages/Landingpage"
import { UserHomePage } from './Pages/UserHomePage';
import { store } from './Redux/store';
import JobDescription from './Pages/search Page/jobDescription';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        {/* <LandingPage1 />
        <UserHomePage /> */}
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="/jobDescription/:id" element={<JobDescription />}></Route>
      </Routes>
>>>>>>> 133ff48eb15cb1bcacb5cdd20abccb58813a53e3
      </Provider>
    </ChakraProvider>
  );
}

export default App;
