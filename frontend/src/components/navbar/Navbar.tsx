// src/components/Navbar.tsx
import { Box, Flex , Text, Image} from '@chakra-ui/react';
import React from 'react';


const Navbar: React.FC = () => {
  return (
    <Box bg="#161618" p={4}>
      <Flex justify="space-between" align="center">
        <Flex>
          <Text>FODAS INC.</Text>
          <Text _hover={{cursor : 'pointer'}} as='b' color="white" ml={4}>
            Home
          </Text>
          <Text as='b' color="white" ml={4}>
            Sobre mim
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
