// src/pages/Home.tsx
import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
import PostList from '../components/blogPost/postList';
import Footer from '../components/Footer/Footer';
import BennyCharacter from '../components/BennyCharacter/BennyCharacter';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />

            <BennyCharacter/>
            {/* <Text w={'400px'} mr={'auto'} ml={'auto'}>Falo sobre programação, comunismo, livro, sexo e ressentimento com amigos antigos</Text> */}
            <Container maxW="container.md" mt={1}>
                <PostList />
                
            </Container>
            
        </>
    );
};

export default Home;
