import { useRouter } from 'next/router';
import { Box, Button, Heading, Link, Text, VStack } from '@chakra-ui/react';
import User from 'components/ssg/user';

const UsersList = ({ users }) => {
  const video17 =
    'https://www.youtube.com/watch?v=7UouvxZ6OaM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=18';
  const router = useRouter();

  return (
    <VStack justify="center" pt={20}>
      <Heading>Next JS Pre-Rendering</Heading>
      <Text>via Static Generation with getStaticProps!</Text>

      <Link
        color="teal.500"
        onClick={() => router.push('/ssg/getstaticprops/posts')}
      >
        <Button>Learn Posts List DYNAMIC with getStaticPaths</Button>
      </Link>
      <br />
      <p style={{ textDecoration: 'underline' }}>List of users</p>
      {users.map((user) => (
        <User user={user} />
      ))}
    </VStack>
  );
};

export default UsersList;

// ? below is done using ngspr snippet:
export const getStaticProps = async (ctx) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
};
