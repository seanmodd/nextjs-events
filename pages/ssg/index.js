import { useRouter } from 'next/router';
import {
  Heading,
  Box,
  Link,
  Text,
  HStack,
  VStack,
  Button,
} from '@chakra-ui/react';
import User from 'components/ssg/user';

const UsersList = () => {
  const video17 =
    'https://www.youtube.com/watch?v=7UouvxZ6OaM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=18';
  const router = useRouter();
  return (
    <VStack justify="center" pt={20}>
      <Heading fontSize="5xl">Next JS Pre-Rendering via</Heading>
      <Heading fontSize="3xl">Static-Side Generation aka SSG!</Heading>
      <br />
      {/* <Text fontSize="2xl" color="blue.500">
        {' '}
        Different Approaches:
      </Text> */}
      <Link href={video17} isExternal color="teal.500">
        <Button>
          Next.js Tutorial - 17 - Static Generation with getStaticProps
        </Button>
      </Link>
      <HStack pt={20}>
        <Box onClick={() => router.push('/ssg/getstaticprops')}>
          <Button color="green.500">1. getStaticProps</Button>
        </Box>
        <Box onClick={() => router.push('/ssg/getstaticprops/posts/dynamic')}>
          <Button color="green.500">2. getStaticPaths</Button>
        </Box>
      </HStack>

      <br />
    </VStack>
  );
};

export default UsersList;
