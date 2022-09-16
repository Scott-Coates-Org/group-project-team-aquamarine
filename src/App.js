import "./App.css";
import CustomerPage from "./layouts/CustomerPage.jsx";
import { Flex } from "@chakra-ui/react";
import HomePage from "./layouts/HomePage";

function App() {
  return (
    <div className="App">
      <Flex justify="center" align="center" fontFamily="Ubuntu">
        {/* <HomePage /> */}
        <CustomerPage />
      </Flex>
    </div>
  );
}

export default App;
