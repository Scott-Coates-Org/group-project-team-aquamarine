import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TopNavCustomer() {
  return (
    <Flex
      bg="white"
      w="full"
      left={0}
      right={0}
      h={16}
      justifyContent="space-between"
      alignItems="center"
      px={8}
      top={0}
      position="sticky"
      boxShadow="lg"
      zIndex="10"
    >
      <Link to="/">
        <Flex alignItems="center" justifyContent="center" gap={5}>
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
      </Link>

      <Menu>
        <MenuButton>
          <Flex alignItems="center" gap={3}>
            <Avatar
              w="35px"
              h="35px"
              bg="linear-gradient(to bottom left, #7928CA, #FF0080)"
              color="white"
              name="avatar"
            ></Avatar>
            <Text fontSize="lg" fontWeight="bold">
              Sign In
            </Text>
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList px={2}>
          <MenuItem
            rounded="md"
            bgColor="blue.200"
            _hover={{ bgColor: "blue.300" }}
            _focus={{ bgColor: "blue.300" }}
            fontWeight="semibold"
            // onClick={console.log("Sign In")}
          >
            Sign In{" "}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default TopNavCustomer;
