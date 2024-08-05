import BENNY from "../../assets/benny.png";
import { Flex, Box, Image } from "@chakra-ui/react";

export default function BennyCharacter() {
    return (
        <Box>
            <Flex
                flexDir={"column"}
                mt={14}
                borderRadius="md"
                maxW={['80%', "400px"]}
                mr={"auto"}
                ml="auto"
                alignItems={"center"}
            >
                <Image boxSize="200px" mr={'auto'} ml='auto' src={BENNY} />
                {/* <Text as='b' mt='-5' mb='10'>Bernardo "Berd" Andrade</Text> */}
            </Flex>
        </Box>
    );
}
