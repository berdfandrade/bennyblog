// src/pages/Home.tsx
import React from 'react';
import { Container, Image, Text } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import PostList from '../components/blogPost/postList';
import BENNY from '../assets/benny.png'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />

            <Image mr={'auto'} ml={'auto'} boxSize={'200px'} src={BENNY} />
            <Text w={'400px'} mr={'auto'} ml={'auto'}>Falo sobre programação, comunismo, livro, sexo e ressentimento com amigos antigos</Text>
            <Container maxW="container.md" mt={1}>
                <PostList />
            </Container>
        </>
    );
};

export default Home;
