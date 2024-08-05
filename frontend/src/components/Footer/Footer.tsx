// Footer.tsx
import { Box, Flex, Text, Link, Stack } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" w={'100%'} mt={'500px'}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        px={4}
      >
        <Text>&copy; {new Date().getFullYear()} Seu Nome ou Empresa. Todos os direitos reservados.</Text>
        <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/privacy-policy">Política de Privacidade</Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
