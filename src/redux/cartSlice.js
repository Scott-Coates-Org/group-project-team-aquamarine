import { createSlice, current } from "@reduxjs/toolkit";

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
    setProductsTime: (state, action) => {
      const { id, name, time } = action.payload;
      const newProducts = state.products;
      if (newProducts[id]) {
        newProducts[id] = { ...newProducts[id], time: time };
      } else {
        newProducts[id] = { id: id, name: name, time: time };
      }
      state.products = newProducts;
      console.log(current(state.products));
    },
    setProductsQuantity: (state, action) => {
      const { id, name, quantity } = action.payload;
      const newProducts = state.products;
      if (newProducts[id]) {
        newProducts[id] = { ...newProducts[id], quantity: quantity };
      } else {
        newProducts[id] = { id: id, name: name, quantity: quantity };
      }
      state.products = newProducts;
      console.log(current(state.products));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate, setProductsTime, setProductsQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
