import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
     <div>test page</div>
    </ChakraProvider>
  );
}

export default App;
