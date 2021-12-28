import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import HomePage from './Pages/HomePage';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/ContactUs';
import UploadContent from './Pages/UploadContent'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<HomePage />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/upload-content' element={<UploadContent />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

{
  /*
  
   
      <div>Hello world</div>
    </Route>
    {/* <Route path='/about'>
      <HomePage />
    </Route>
    <Route path='/contact-us'>
      <HomePage />
    </Route> */
}
// </Routes>
//*/}
