import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import cartSlice from "./cartSlice";
import counterReducer from "./counterSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    users: usersReducer,
    cart: cartSlice,
  },
});
