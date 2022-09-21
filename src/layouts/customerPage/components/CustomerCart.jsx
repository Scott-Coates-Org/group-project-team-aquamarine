import { CalendarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getFormatedDate } from "utils/dateFormat";

function CustomerCart() {
  const selectedDate = useSelector((state) => state.cart.date);
  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      w="300px"
      h="fit-content"
      mt={10}
      mb={10}
      p={7}
      border="1px"
      borderColor="gray.200"
      borderRadius="5"
      boxShadow="lg"
      className="cart"
    >
      <Flex
        align="center"
        alignItems="flex-start"
        justify="center"
        flexDir="column"
        w="100%"
        gap={2}
        className="cart__container"
      >
        <Text textAlign={["left", "center"]} fontSize="1.5em" fontWeight={700}>
          Your Cart
        </Text>
        <Flex
          mt={3}
          flexDir="row"
          gap={3}
          justifyContent="center"
          alignItems="center"
        >
          <CalendarIcon />
          <Text textAlign={["left", "center"]} fontSize="1em" fontWeight={400}>
            {selectedDate
              ? getFormatedDate(selectedDate)
              : getFormatedDate(new Date())}
          </Text>
        </Flex>
        <Text
          mt={5}
          textAlign={["left", "center"]}
          fontSize="1.5em"
          fontWeight={700}
        >
          Total
        </Text>
      </Flex>
    </Flex>
  );
}

export default CustomerCart;
