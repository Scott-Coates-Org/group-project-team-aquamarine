import "./App.css";
import CustomerPage from "./layouts/CustomerPage.jsx";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex justify="center" align="center" fontFamily="Ubuntu">
        <CustomerPage />
      </Flex>
    </div>
  );
}

export default App;
