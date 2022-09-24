import { Box, Flex } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import AddRooms from "./components/AddRooms";
import Products from "./components/Products";

import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

function AdminPage() {
  return (
    <Flex bg="blackAlpha.100" flex={1} h="100vh">
      <Sidebar />

      <Flex direction="column" flex={1}>
        <TopNav />

        <Box p={10}>
          <Routes>
            <Route path="products" element={<Products />} />

            {/* for now add room to test */}
            <Route path="add-product" element={<AddRooms />} />

            <Route path="bookings" element={<div>bookings</div>} />
            <Route path="daily" element={<div>daily</div>} />

            <Route path="rooms" element={<div>rooms</div>} />
            <Route path="add-room" element={<AddRooms />} />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  );
}

export default AdminPage;
