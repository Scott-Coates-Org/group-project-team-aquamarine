import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Flex
      w="250px"
      bgColor="blackAlpha.900"
      py={4}
      px={7}
      direction="column"
      textColor="white"
    >
      <Flex alignItems="center" justifyContent="center" gap={5} mb={10}>
        <Box
          w={5}
          h={5}
          rounded="full"
          bgGradient="linear(to-bl, #7928CA, #FF0080)"
        />
        <Text
          bgGradient="linear(to-bl, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="black"
        >
          Aquamarine
        </Text>
      </Flex>

      <Text textColor="whiteAlpha.400" fontSize="lg">
        Data
      </Text>

      <Accordion allowMultiple mt={2} defaultIndex={[]}>
        <AccordionItem borderColor="whiteAlpha.200">
          <AccordionButton>
            <Text textColor="whiteAlpha.800">Products</Text>
            <AccordionIcon textColor="whiteAlpha.800" />
          </AccordionButton>

          <AccordionPanel>
            <Flex pl={3} direction="column" gap={1}>
              <Text>
                <Link to="products">All products</Link>
              </Text>
              <Text>
                <Link to="add-product">Add product</Link>
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderColor="whiteAlpha.200">
          <AccordionButton>
            <Text textColor="whiteAlpha.800">Bookings</Text>
            <AccordionIcon textColor="whiteAlpha.800" />
          </AccordionButton>

          <AccordionPanel>
            <Flex pl={3} direction="column" gap={1}>
              <Text>
                <Link to="bookings">All bookings</Link>
              </Text>
              <Text>
                <Link to="daily">Daily Capacity</Link>
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderColor="whiteAlpha.200">
          <AccordionButton>
            <Text textColor="whiteAlpha.800">Rooms</Text>
            <AccordionIcon textColor="whiteAlpha.800" />
          </AccordionButton>

          <AccordionPanel>
            <Flex pl={3} direction="column" gap={1}>
              <Text>
                <Link to="rooms">All rooms</Link>
              </Text>
              <Text>
                <Link to="add-room">Add room</Link>
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default Sidebar;
