// src/components/Navbar.tsx
import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { GiDiamondHard } from "react-icons/gi";
import { Link } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Box bg="#161618" p={4}>
      <Flex justify="space-between" alignItems="center">
        <Flex>
          <Icon as={GiDiamondHard} boxSize='40px' />
          <Link to={"/"}>
            <Button _hover={{ cursor: "pointer" }} as="b" color="white" ml={4}>
              Home
            </Button>
          </Link>
          <Link to={"/sobre"}>
            <Button as="b" color="white" ml={4}>
              Sobre mim
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
