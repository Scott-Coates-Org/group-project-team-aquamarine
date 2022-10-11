import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import cartSlice from "./cartSlice";
import counterReducer from "./counterSlice";
import currentUserReducer from "./currentUserReducer";
import roomsSlice from "./roomsSlice";
import productsSlice from "./productsSlice";
import usersReducer from "./usersSlice";
import customerSlice from "./customerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    users: usersReducer,
    currentUser: currentUserReducer,
    cart: cartSlice,
    rooms: roomsSlice,
    products: productsSlice,
    customer: customerSlice,
  },
});
