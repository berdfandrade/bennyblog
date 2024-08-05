// src/components/Post.tsx
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

interface PostProps {
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <Box _hover={{ cursor: 'pointer' }} borderBottom='1px dashed' p={4} mb={3}>
      <Flex justifyContent={'space-between'}>
      <Heading as="h2" size="md" mb={2}>
        {title}
      </Heading>
      <Text fontSize={'12px'}>25/01/2025</Text>
      </Flex>
      <Text>{content}</Text>
    </Box>
  );
};

export default Post;
