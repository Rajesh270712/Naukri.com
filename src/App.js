import React from 'react';
import { Provider } from 'react-redux';

import { UserHomePage} from "./Pages/UserHomePage";


import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {SearchPage} from "./Pages/search Page/searchPage"
import LandingPage1 from "./Pages/Landingpage"
// import { UserHomePage } from './Pages/UserHomePage';
import { store } from './Redux/store';
import JobDescription from './Pages/search Page/jobDescription';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
         <LandingPage1 />
   
      {/* <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="/jobDescription/:id" element={<JobDescription />}></Route>
      </Routes> */}
      </Provider>
    </ChakraProvider>
  );
}

export default App;
