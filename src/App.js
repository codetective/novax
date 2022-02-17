import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/nav/Navbar';
import TopContactBar from './components/general/TopContactBar';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" id="app" pos="relative">
        <TopContactBar />
        <Navbar />
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;