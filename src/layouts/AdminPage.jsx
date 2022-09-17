import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

function AdminPage() {
  return (
    <Flex bg="blackAlpha.100" flex={1} h="100vh">
      <Sidebar />

      <Flex direction="column" flex={1}>
        <TopNav />

        <Box p={10}>Site content</Box>
      </Flex>
    </Flex>
  );
}

export default AdminPage;
