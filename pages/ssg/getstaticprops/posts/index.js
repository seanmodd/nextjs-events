import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

function PostList({ posts }) {
  return (
    <>
      <VStack>
        <VStack align="left" pt={100}>
          <Heading pb={50}>List of Posts DYNAMICALLY RETRIEVED</Heading>
          {posts.map((post) => (
            <Box align="left" cursor="pointer">
              <Link cursor="pointer" href={`posts/${post.id}`} passHref>
                <HStack _hover={{ textDecoration: 'underline' }} key={post.id}>
                  <Heading fontSize="large">Post # {post.id} -</Heading>
                  <Text color="blue">{post.title}</Text>
                </HStack>
              </Link>
            </Box>
          ))}
        </VStack>
      </VStack>
    </>
  );
}

export default PostList;

//! ngspr
export const getServerSideProps = async (ctx) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};
