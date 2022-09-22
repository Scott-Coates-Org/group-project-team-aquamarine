import React, { useEffect } from "react";
import "App.css";
import { Flex } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "layouts/login/Login";
import AdminPage from "layouts/adminPage/index";
import HomePage from "layouts/homePage/index";
import CustomerPage from "layouts/customerPage/index";
// import AddRooms from "./components/addRooms/AddRooms";
import {
  currentUser,
  removeCurrentUser,
  setCurrentUser,
} from "redux/currentUserReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseApi/client";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          setCurrentUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(removeCurrentUser());
      }
    });
  }, [dispatch]);

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
            element={
              !user?.email ? <Navigate to="/login" replace /> : <AdminPage />
            }
          />
          <Route
            path="/login"
            element={user?.email ? <Navigate to="/admin" replace /> : <Login />}
          />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Flex>
    </div>
  );
}

export default App;
