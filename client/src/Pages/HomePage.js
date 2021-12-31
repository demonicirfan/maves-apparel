import React from 'react';
import Carousel from '../components/Hero/Carousel';
import Featured from '../components/Featured/Featured.js';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box bg={'#FAF9F8'}>
      <Carousel />
      <Featured />
    </Box>
  );
};

export default HomePage;
