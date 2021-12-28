import React from 'react';
import Carousel from '../components/Hero/Carousel';
import Navbar from '../components/Navbar/Navbar';
import Featured from '../components/Featured/Featured.js';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box bg={'#FAF9F8'}>
      <Navbar />
      <Carousel />
      <Featured />
    </Box>
  );
};

export default HomePage;
