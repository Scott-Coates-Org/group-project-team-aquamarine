import './App.css';
// import CustomerPage from './layouts/customerPage';
import { Flex } from '@chakra-ui/react';
import HomePage from './layouts/homePage';
// import AddRooms from './components/AddRooms';

// import AdminPage from './layouts/adminPage';

function App() {
  return (
    <div className="App">
      <Flex justify="center" align="center" fontFamily="Ubuntu">
        <HomePage />
        {/* <CustomerPage /> */}
        {/* <AddRooms /> */}
        {/* <AdminPage /> */}
      </Flex>
    </div>
  );
}

export default App;
