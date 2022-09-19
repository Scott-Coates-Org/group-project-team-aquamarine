import "./App.css";
import CustomerPage from "./layouts/CustomerPage.jsx";
import { Flex } from "@chakra-ui/react";
//import HomePage from "./layouts/HomePage";
import HomePage from "./layouts/HomePage";
import AddRooms from "./components/addRooms/AddRooms";
function App() {
  
  return (
    <div className="App">
      <Flex justify="center" align="center" fontFamily="Ubuntu">
        {/* <HomePage /> */}
        {/* <CustomerPage /> */}
        <AddRooms />
      </Flex>
    </div>
  );
}

export default App;
