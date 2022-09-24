import {
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function Products() {
  return (
    <>
      <Text fontWeight="bold" fontSize="3xl">
        Products
      </Text>

      <Box maxH="calc(100vh - 16rem)" overflowY="auto" mt={12}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Type</Th>
              </Tr>
            </Thead>

            <Tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex alignItems="center" gap={3}>
                      <Image
                        src="https://images.unsplash.com/photo-1621046590998-78ecf71d58a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        w={48}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        Product name
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Text
                      fontWeight="medium"
                      fontSize="lg"
                      textColor="green.600"
                    >
                      $20.00
                    </Text>
                  </Td>
                  <Td>
                    <Text fontWeight="medium" fontSize="lg">
                      Pass
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Products;
