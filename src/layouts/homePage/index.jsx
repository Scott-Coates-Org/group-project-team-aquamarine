import { Flex, Text, chakra, Box } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      className="homepage"
    >
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        className="homepage__header"
        gap={5}
      >
        <Box
          w="45px"
          h="45px"
          borderRadius="full"
          bgGradient="linear-gradient(to bottom left, #7928CA, #FF0080)"
        ></Box>{" "}
        <Text
          pt={10}
          pb={10}
          bgGradient="linear(to-bl, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          className="homepage__logo__text"
        >
          Aquamarine
        </Text>
      </Flex>
      <chakra.button
        w="200px"
        px="3"
        py="2"
        bg={`gray.200`}
        rounded="5"
        _hover={{ bg: `gray.300` }}
        onClick={() => console.log("Buy tickets")}
      >
        Buy Tickets
      </chakra.button>
    </Flex>
  );
}

export default HomePage;
