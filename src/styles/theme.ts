import {
  extendTheme, ThemeConfig, useColorModeValue,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// const bg = useColorModeValue('orange.50', 'gray.900');
// const color = useColorModeValue('gray.50', 'gray.800');
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
      50: '#FFFFFF',
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
        bg: 'gray.500',
        w: '2',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'gray.200',
      },
      body: {
        bg: { Background },
        color: { Color },
      },
    },
  },
});
