import React from 'react';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
=======

import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {SearchPage} from "./Pages/search Page/searchPage"
>>>>>>> 4cd2e7becd821fe8a257f434d10a76e88c92284d
import LandingPage1 from "./Pages/Landingpage"
// import { SearchPage } from './se';
import { store } from './Redux/store';
<<<<<<< HEAD


function App() {
  return (
    <ChakraProvider theme={theme}>

      <Provider store={store} >
      <LandingPage1 />
      {/* <SearchPage/> */}
=======
import Footer from "./componentsYashasvi/Footer"
import Navbar from "./componentsYashasvi/Navbar"
import JobDescription from './Pages/search Page/jobDescription';
import {UpdateProfilePage} from "./Pages/UpdateProfilePage"
import {UserHomePage}  from "./Pages/UserHomePage"
import SavedJob from './Pages/search Page/savedJobs';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<LandingPage1 />}></Route>
        <Route path = "/UserHomePage" element = {<UserHomePage />}></Route>
        <Route path = "/UpdateProfilePage" element={<UpdateProfilePage/>}></Route>
        <Route path = "/savedJob" element={ <SavedJob/>}></Route>
        <Route path="/SearchPage" element={<SearchPage />}></Route>
        <Route path="/jobDescription/:id" element={<JobDescription />}></Route>
      </Routes>
      <Footer/>
     
      
>>>>>>> 4cd2e7becd821fe8a257f434d10a76e88c92284d
      </Provider>

    </ChakraProvider>
  );
}

export default App;
