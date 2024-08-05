// src/pages/PostDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';

const posts = [
  { id: '1', title: 'Sobre minhas visões de vida', content: 'Sou comunista, e razoavelmente budista, com pouca ou nenhuma esperança na humanidade' },
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
        <Box p={4} mb={4}>
          <Heading as="h2" size="md" mb={5}>
            {post.title}
          </Heading>
          <Box borderBottom='1px dashed' mb={5}></Box>
          <Text>{post.content}</Text>
        </Box>
      </Container>
    </>
  );
};

export default PostDetail;
