import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import HomePage from './Pages/HomePage';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
