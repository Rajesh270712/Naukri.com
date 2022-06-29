import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { store } from './Redux/store';
import { SearchPage } from './Pages/search Page/searchPage';
import JobDescription from './Pages/search Page/jobDescription';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        
        <Routes>
          <Route path='/' element={<SearchPage/>} ></Route>
            <Route path='/jobDescription/:id' element={<JobDescription/>} ></Route>
        </Routes>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
