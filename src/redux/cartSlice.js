import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  products: {},
  addons: {},
  contacts: {},
  payDetails: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload.date;
      // console.log(state.date);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate } = cartSlice.actions;

export default cartSlice.reducer;
