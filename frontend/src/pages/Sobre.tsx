import Navbar from "../components/navbar/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function SobreMim() {
  return (
    <>
      <Navbar />
      <Box h="100vh" maxW={"70%"} mr={'auto'} ml={'auto'} py={'110'}>
        <Heading mb={5}>Sobre mim</Heading>
        <Text>
          Me chamo Bernardo, tenho 28 anos e aqui eu falo sobre programação,
          comunismo, livro, sexo e ressentimento com amigos antigos
        </Text>
      </Box>
    </>
  );
}
