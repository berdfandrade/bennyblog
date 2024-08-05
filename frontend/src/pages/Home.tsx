// src/pages/Home.tsx
import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import PostList from '../components/blogPost/postList';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container maxW="container.md" mt={8}>
                <PostList />
            </Container>
        </>
    );
};

export default Home;
