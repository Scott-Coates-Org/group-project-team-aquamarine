// import { CalendarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
// import { getFormatedDate } from "utils/dateFormat";

function CustomerCart() {
  // const selectedDate = useSelector((state) => state.cart.date);
  // const products = useSelector((state) => state.cart.products);
  const customer = useSelector((state) => state.customer.customer);

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
        gap={0}
        className="cart__container"
      >
        <Text textAlign={["left"]} fontSize="1.5em" fontWeight={700}>
          Order Confirmation
        </Text>
        <Text
          textAlign={["left"]}
          fontSize="1.0em"
          fontWeight={700}
          mt={3}
          color="rgb(255, 0, 128)"
        >
          {customer.name}, Thank You!
        </Text>
        <Text textAlign={["left"]} fontSize="1.0em" fontWeight={400} mt={4}>
          We received your payment. <br /> Your order has been confirmed. The
          booking confirmation and receipt have been sent to {customer.email}.
        </Text>
      </Flex>
    </Flex>
  );
}

export default CustomerCart;
