// src/pages/Home.tsx
import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import PostList from '../components/blogPost/postList';
import BennyCharacter from '../components/BennyCharacter/BennyCharacter';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />

            <BennyCharacter/>
            <Container maxW="container.md" mt={1}>
                <PostList />

            </Container>
            
        </>
    );
};

export default Home;
