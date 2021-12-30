import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/italiana';

const theme = extendTheme({
  fonts: {
    body: 'Poppins',
    itailiana: 'Italiana',
  },
});

export default theme;
