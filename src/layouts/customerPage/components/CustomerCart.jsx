import React, { useEffect } from "react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "redux/cartSlice";
import { getFormatedDate } from "utils/dateFormat";

function CustomerCart() {
  const selectedDate = useSelector((state) => state.cart.date);
  const products = useSelector((state) => state.cart.products);
  const subTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      let amount = 0;
      products.map((product) => {
        if (product.quantity) {
          amount = product.quantity * product.price + amount;
        }
        return amount;
      });
      dispatch(setTotal({ total: amount }));
    } else return;
  }, [products]);

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
        {selectedDate && (
          <Flex
            mt={2}
            mb={3}
            flexDir="row"
            gap={3}
            justifyContent="center"
            alignItems="center"
          >
            <CalendarIcon />
            <Text
              textAlign={["left", "center"]}
              fontSize="1em"
              fontWeight={400}
            >
              {getFormatedDate(selectedDate)}
            </Text>
          </Flex>
        )}
        {products &&
          products.map((product) => (
            <Flex key={product.id} w="full" mt={0} flexDir="column" gap={2}>
              <Flex w="full" mt={0} flexDir="row" gap={2} alignItems="center">
                {product.quantity > 0 && (
                  <Text fontSize="1em" fontWeight={400} flex="1 0 1">
                    {`${product.quantity} x `}
                  </Text>
                )}
                <Text fontSize="1em" fontWeight={600} flex="1">
                  {product.name}
                </Text>
                {!product.price ? (
                  "$0.00"
                ) : (
                  <Text fontSize="1em" fontWeight={400}>
                    {`$${product.price * product.quantity}.00`}
                  </Text>
                )}
              </Flex>
              {product.time && (
                <Box
                  borderWidth="1px"
                  borderRadius="md"
                  fontSize="0.8em"
                  bg="#e2e8f0"
                  w="55px"
                  p="1px 1px"
                  textAlign="center"
                >
                  {product.time}
                </Box>
              )}
            </Flex>
          ))}
        {subTotal > 0 && (
          <>
            <Text
              mt={5}
              textAlign={["left", "center"]}
              fontSize="1.5em"
              fontWeight={700}
            >
              Total
            </Text>
            <Flex w="full" mt={0} flexDir="column" gap={2}>
              <Flex w="full" mt={0} flexDir="row" gap={2} alignItems="center">
                <Text fontSize="1em" fontWeight={400} flex="1">
                  Subtotal
                </Text>
                <Text fontSize="1em" fontWeight={400}>
                  {`$${subTotal}.00`}
                </Text>
              </Flex>
              <Flex w="full" mt={0} flexDir="row" gap={2} alignItems="center">
                <Text fontSize="1em" fontWeight={400} flex="1">
                  Transaction Fee
                </Text>
                <Text fontSize="1em" fontWeight={400}>
                  {`$7.00`}
                </Text>
              </Flex>
              <Flex w="full" mt={0} flexDir="row" gap={2} alignItems="center">
                <Text fontSize="1em" fontWeight={400} flex="1">
                  Tax
                </Text>
                <Text fontSize="1em" fontWeight={400}>
                  {`$4.85`}
                </Text>
              </Flex>
              <Flex w="full" mt={0} flexDir="row" gap={2} alignItems="center">
                <Text fontSize="1em" fontWeight={600} flex="1">
                  Total (Inc. Tax)
                </Text>
                <Text fontSize="1em" fontWeight={600}>
                  {subTotal === 0 ? "$0.00" : `${subTotal + 7 + 4.85}`}
                </Text>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default CustomerCart;
