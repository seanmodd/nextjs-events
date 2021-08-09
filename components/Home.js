import { useRouter } from 'next/router';
import { Button, HStack, Box, useColorMode } from '@chakra-ui/react';
import { MyDarkModeSwitch } from 'styles/theme';

const Home = () => {
  const otherrouter = useRouter();
  const { colorMode } = useColorMode();
  return (
    <>
      <div style={{ width: '100vw', justify: 'center', align: 'center' }}>
        <HStack
          zIndex="docked"
          pos="fixed"
          top="10"
          right="500"
          py={3}
          px={4}
          opacity={0.75}
          cursor="pointer"
        >
          <MyDarkModeSwitch />
        </HStack>
        <HStack
          zIndex="docked"
          pos="fixed"
          top="10"
          right="10"
          py={3}
          px={4}
          bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
          borderWidth="3px"
          opacity={0.75}
          borderColor={colorMode === 'light' ? 'gray.800' : 'gray.100'}
          borderRadius="3xl"
          cursor="pointer"
        >
          <Box onClick={() => otherrouter.push('/')}>Home</Box>
        </HStack>
      </div>
    </>
  );
};

export default Home;
