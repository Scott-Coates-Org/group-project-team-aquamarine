import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setNewProduct: (state, action) => {
      state.products = [...state.products, action.payload.product];
      console.log(state.products);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewProduct } = productSlice.actions;

export default productSlice.reducer;
