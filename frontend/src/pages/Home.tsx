// src/pages/Home.tsx
import React from 'react';
import { Container, Image } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import PostList from '../components/blogPost/postList';
import BENNY from '../assets/benny.png'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Image mr={'auto'} ml={'auto'}boxSize={'200px'}src={BENNY}/>
            <Container maxW="container.md" mt={1}>
                <PostList />
            </Container>
        </>
    );
};

export default Home;
