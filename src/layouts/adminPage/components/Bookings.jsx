import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseApi/client";
import { useState } from "react";
import { useEffect } from "react";

function Bookings() {
  const [orders, setOrders] = useState([]);
  const [tickets, setTickets] = useState(0);

  useEffect(() => {
    try {
      const fetchOrders = async () => {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersArray = [];
        querySnapshot.forEach((doc) => {
          const orderObj = doc.data();
          orderObj.products = JSON.parse(orderObj.products);
          orderObj.contacts = JSON.parse(orderObj.contacts);
          const date = new Date(+orderObj.date).toLocaleDateString("en-US");
          orderObj.date = date;
          ordersArray.push(orderObj);
          setOrders(ordersArray);

          let ticketsNum = 0;
          const newOrders = ordersArray.map((order) => {
            let headCount = 0;
            order.products.map((prod) => {
              if (prod.time) {
                ticketsNum++;
                headCount += prod.qty;
              }
              return headCount;
            });
            order.heads = headCount;
            return order;
          });
          setTickets(ticketsNum);
          setOrders(newOrders);
          console.log(tickets);
        });
      };
      fetchOrders();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Box h="full">
      <Text fontWeight="bold" fontSize="3xl">
        Bookings
      </Text>
      <Flex flexDirection="row" gap={20}>
        <Flex flexDirection="column" alignItems="flex-end">
          <Text fontWeight="bold" fontSize="md" color="gray" mt={5}>
            TOTAL SALES
          </Text>
          <Text fontWeight="500" fontSize="2xl">
            {orders[0] !== undefined ? orders.length : "0"}
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="flex-end">
          <Text fontWeight="bold" fontSize="md" color="gray" mt={5}>
            TICKETS SOLD
          </Text>
          <Text fontWeight="500" fontSize="2xl">
            {tickets}
          </Text>
        </Flex>
      </Flex>

      <Box overflowY="scroll" mt={5} h="100vh" b="0px">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Booking Date</Th>
                <Th>Confirmation ID</Th>
                <Th>Session Times</Th>
                <Th>Headcount</Th>
                <Th>Amount</Th>
                <Th>Booking Name</Th>
                <Th>Contact Details</Th>
              </Tr>
            </Thead>

            <Tbody>
              {orders[0] !== undefined &&
                orders.map((order, index) => (
                  <Tr key={index}>
                    <Td>
                      <Flex alignItems="center" gap={3}>
                        <Text fontWeight="medium" fontSize="sm">
                          {order.date}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Text
                        fontWeight="medium"
                        fontSize="sm"
                        textColor="green.600"
                      >
                        {`${order.checkoutSessionId.substring(0, 16)}...`}
                      </Text>
                    </Td>
                    <Td>
                      <Flex gap={2} flexWrap="wrap">
                        {order.products.map(
                          (prod, index) =>
                            prod.time && (
                              <Flex
                                flex="0 1 21%"
                                key={index}
                                borderWidth="1px"
                                borderRadius="md"
                                fontSize="0.8em"
                                bg="#e2e8f0"
                                p="1px 5px"
                                textAlign="center"
                              >
                                {prod.time}
                              </Flex>
                            )
                        )}
                      </Flex>
                    </Td>
                    <Td>
                      <Text fontWeight="medium" fontSize="sm">
                        {order.heads}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontWeight="medium" fontSize="sm">
                        {order.total}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontWeight="medium" fontSize="sm">
                        {order.contacts.name}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontWeight="medium" fontSize="sm">
                        {`+${order.contacts.phone}`}
                      </Text>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Bookings;
