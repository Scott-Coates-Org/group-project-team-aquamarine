import "./App.css";
import CustomerPage from "./layouts/CustomerPage.jsx";
import { Flex } from "@chakra-ui/react";
//import HomePage from "./layouts/HomePage";
import HomePage from "./layouts/HomePage";
import AddRooms from "./components/addRooms/AddRooms";
import AddProducts from "./components/addProducts/AddProducts";
function App() {
  
  return (
    <div className="App">
      <Flex justify="center" align="center" fontFamily="Ubuntu">
        {/* <HomePage /> */}
        {/* <CustomerPage /> */}
        <AddProducts />
      </Flex>
    </div>
  );
}

export default App;
