import { extendTheme } from '@chakra-ui/react';


const themeExtended = extendTheme({
  
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === 'dark' ? '#1b1b1f' : 'white',
      },
    }),
  },
});

export default themeExtended;
