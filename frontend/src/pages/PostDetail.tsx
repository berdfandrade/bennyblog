// src/pages/PostDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';

const posts = [
  { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
  { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
];

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <>
      <Navbar />
      <Container maxW="container.md" mt={8}>
        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Heading as="h2" size="md" mb={2}>
            {post.title}
          </Heading>
          <Text>{post.content}</Text>
        </Box>
      </Container>
    </>
  );
};

export default PostDetail;
