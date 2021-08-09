import {
  theme as defaultTheme,
  extendTheme,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Button } from '@chakra-ui/button';
import '@fontsource/raleway';
import '@fontsource/poppins';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const MyDarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.300',
    dark: 'black',
  };
  return (
    <>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        color={iconColor[colorMode]}
        bg={bgColor[colorMode]}
      >
        {children}
      </IconButton>
    </>
  );
};

const lightHoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #1100ff',
  transition: 'all .2s ease-out',
  background: '#f3e8e0',
  color: 'black',
  fontWeight: '400',
};
const darkHoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #1100ff',
  transition: 'all .2s ease-out',
  background: '#3f00eb',
  color: '#f7f7ff',
  fontWeight: '400',
};
const pressedStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};
export const MyButton = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'blue.100',
    dark: 'blue.400',
  };
  const bgHoverColor = {
    light: darkHoverStyle,
    dark: lightHoverStyle,
  };
  return (
    <div>
      <Button
        transition="0.5s"
        boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
        bg={bgColor[colorMode]}
        color={iconColor[colorMode]}
        p="10px"
        m="10px"
        _hover={bgHoverColor[colorMode]}
        _active={pressedStyle}
      >
        {children}
      </Button>
    </div>
  );
};

//! This is where the theme is created --------- //!

const breakpoints = createBreakpoints({
  sm: '425px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1440px',
});

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', ${defaultTheme.fonts.heading}`,
    body: `'Raleway', ${defaultTheme.fonts.body}`,
  },
  MyButton,
  breakpoints,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: '600',
        // textTransform: 'uppercase',
        // textColor: '#0e11e6',
        borderWidth: '1px',
        borderRadius: 'base',
        boxShadow: 'base',
        // borderColor: 'black',
        transition: 'all 50000ms ease-in-out(0.23, 1, 0.32, 1) 2ms',
        // hover: 'blue.500',
      },

      defaultProps: {
        // colorScheme: 'tomato',
        variant: 'ghost',
      },
    },
  },
  // colors: {
  //   black: '#2e2e2e',
  //   white: '#f1f1f1',
  //   whitebg: '#c0c0c0',
  //   blackbg: '#16161d92',
  // },
  // fonts: {
  //   heading: 'Arimo',
  //   body: 'Poppins',
  // },

  // fontSizes: {
  //   lg: '20px',
  //   xl: '30px',
  //   '2xl': '40px',
  //   '3xl': '50px',
  // },
  // breakpoints,
  // icons: {
  //   logo: {
  //     path: (
  //       <svg
  //         width="3000"
  //         height="3163"
  //         viewBox="0 0 3000 3163"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <rect width="3000" height="3162.95" fill="none" />
  //         <path
  //           d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
  //           fill="currentColor"
  //         />
  //       </svg>
  //     ),
  //     viewBox: '0 0 3000 3163',
  //   },
  // },
});

export default theme;
