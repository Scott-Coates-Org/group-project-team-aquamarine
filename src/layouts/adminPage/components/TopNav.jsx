import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

function TopNav() {
  return (
    <Flex
      bg="white"
      w="full"
      h={16}
      justifyContent="space-between"
      alignItems="center"
      px={8}
    >
      <Text fontSize="2xl" fontWeight="bold">
        Welcome (user name)!
      </Text>

      <Menu>
        <MenuButton>
          <Flex alignItems="center" gap={1}>
            <Avatar w={10} h={10} />
            <Text fontSize="lg" fontWeight="bold">
              Admin
            </Text>
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList px={2}>
          <MenuItem
            rounded="md"
            bgColor="red.400"
            _hover={{ bgColor: "red.500" }}
            _focus={{ bgColor: "red.500" }}
            fontWeight="semibold"
          >
            Logout{" "}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default TopNav;
