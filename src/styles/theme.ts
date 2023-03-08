import {
  extendTheme, ThemeConfig, useColorModeValue,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

function Background() {
  useColorModeValue('orange.50', 'gray.900');
}
function Color() {
  useColorModeValue('gray.800', 'gray.50');
}
export const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#F8F9FB',
      500: '#B8B8B8',
      900: '#1A1A1A',
    },
    orange: {
      500: '#FF4D00',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      'html::-webkit-scrollbar': {
        bg: 'gray.900',
        w: '2.5',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'orange.500',
        borderRadius: '10px',
      },
      body: {
        bg: { Background },
        color: { Color },
      },
    },
  },
});
