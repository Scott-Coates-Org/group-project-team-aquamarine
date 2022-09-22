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
import { signOut } from "firebase/auth";
import { logout } from "redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "firebaseApi/client";
import { currentUser } from "redux/currentUserReducer";

function TopNav() {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
  };
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
        Welcome {user.displayName}!
      </Text>

      <Menu>
        <MenuButton>
          <Flex alignItems="center" gap={3}>
            {user.photoUrl ? (
              <img
                // referrerPolicy="no-referrer"
                width="35px"
                height="35px"
                alt="avatar"
                src={user && user.photoUrl}
                style={{ borderRadius: "50%", border: "1px solid #e2e8f0" }}
              />
            ) : (
              <Avatar
                w="35px"
                h="35px"
                bg="linear-gradient(to bottom left, #7928CA, #FF0080)"
                color="white"
                name={user.displayName}
              ></Avatar>
            )}
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
            onClick={logoutHandler}
          >
            Logout{" "}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default TopNav;
