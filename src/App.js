import React from "react";
import "./App.css";
import { Flex } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import AdminPage from "./layouts/AdminPage";
import HomePage from "./layouts/HomePage";
import CustomerPage from "./layouts/CustomerPage.jsx";
// import AddRooms from "./components/addRooms/AddRooms";
import { selectUser } from "./redux/authSlice";

function App() {
  const user = useSelector(selectUser).accessToken;

  return (
    <div className="App">
      <Flex justify="center" align="center" fontFamily="Ubuntu">
        <Routes>
          {/* -----------------------------------------------------------
          ADDITIONAL ROOTS 
          for you to test your isolated componentes.
          Uncomment your line and change the element to your component.
          <Route path="/bruno" element={<yourComponent />} />
          <Route path="/zeeshan" element={<yourComponent />} />
          <Route path="/rustem" element={<AddRooms />} />
          ----------------------------------------------------------- */}

          <Route path="/" element={<HomePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route
            path="/admin"
            element={!user ? <Navigate to="/login" replace /> : <AdminPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/admin" replace /> : <Login />}
          />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Flex>
    </div>
  );
}

export default App;
