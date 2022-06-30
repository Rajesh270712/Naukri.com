import React from 'react';
import { Provider } from 'react-redux';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {SearchPage} from "./Pages/search Page/searchPage"
import LandingPage1 from "./Pages/Landingpage"
// import { UserHomePage } from './Pages/UserHomePage';
import { store } from './Redux/store';
import Footer from "./componentsYashasvi/Footer"
import Navbar from "./componentsYashasvi/Navbar"
import JobDescription from './Pages/search Page/jobDescription';
import {UpdateProfilePage} from "./Pages/UpdateProfilePage"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>

      <Routes>
        <Route path = "/" element={<LandingPage1 />}></Route>
        <Route path = "/UserHomePage" element = {<UserHomePage />}></Route>
        <Route path = "/UpdateProfilePage" element={<UpdateProfilePage/>}></Route>
        <Route path="/SearchPage" element={<SearchPage />}></Route>
        <Route path="/jobDescription/:id" element={<JobDescription />}></Route>
      </Routes>
      <Footer/>
      
      </Provider>
    </ChakraProvider>
  );
}

export default App;
