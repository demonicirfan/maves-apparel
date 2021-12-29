import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import HomePage from './Pages/HomePage';
import theme from './theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/ContactUs';
import UploadContent from './Pages/UploadContent';
import Products from './Pages/Products';
import Product from './Pages/Products';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<Navigate replace to='/' />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<HomePage />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/upload-content' element={<UploadContent />} />
          <Route path='/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
