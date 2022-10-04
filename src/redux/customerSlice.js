import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    name: "",
    email: "",
    address: "",
    id: "",
  },
};

export const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setNewCustomer: (state, action) => {
      state.customer = action.payload.customer;
      // console.log(state.customer);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewCustomer } = customersSlice.actions;

export default customersSlice.reducer;
