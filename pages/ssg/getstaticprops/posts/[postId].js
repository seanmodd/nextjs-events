import { Heading, Text, VStack } from '@chakra-ui/react';

function Post({ post }) {
  return (
    <VStack pt={150}>
      <Heading fontSize="6xl">Post #{post.id}</Heading>
      <Heading
        fontSize="3xl"
        w="50%"
        py={15}
        align="center"
        textTransform="uppercase"
        textDecoration="underline"
      >
        {post.title}
      </Heading>
      <Text w={500}>{post.body}</Text>
    </VStack>
  );
}

export default Post;

//! ngspa
export const getStaticPaths = async () => ({
  paths: [
    {
      params: { postId: '1' },
    },
    {
      params: { postId: '2' },
    },
    {
      params: { postId: '3' },
    },
  ],
  fallback: false,
});

//! ngspr
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
