import "./App.css";
import CustomerPage from "./layouts/CustomerPage.jsx";
import { Flex } from "@chakra-ui/react";
<<<<<<< HEAD
//import HomePage from "./layouts/HomePage";

=======
import HomePage from "./layouts/HomePage";
import AddRooms from "./components/addRooms/AddRooms";
>>>>>>> 1e8c82bed40fd647079fc5609427c12860748662

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
