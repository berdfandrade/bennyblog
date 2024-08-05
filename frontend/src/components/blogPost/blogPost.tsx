// src/components/Post.tsx
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface PostProps {
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <Box _hover={{ cursor: 'pointer' }} border='1px dashed' p={4} mb={3}>
      <Heading as="h2" size="md" mb={2}>
        {title}
      </Heading>
      <Text>{content}</Text>
    </Box>
  );
};

export default Post;
