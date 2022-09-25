import React from "react";
import { chakra } from "@chakra-ui/react";

function Button({ text, onClick, color, hov = color }) {
  return (
    <chakra.button
      w="100%"
      px="3"
      py="2"
      bg={`${color}.200`}
      rounded="5"
      _hover={{ bg: `${hov}.300` }}
      onClick={onClick}
    >
      {text}
    </chakra.button>
  );
}

export default Button;
