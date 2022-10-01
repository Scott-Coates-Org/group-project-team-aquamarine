import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "",
  products: [],
  total: 0,
  addons: [],
  contacts: {},
  payDetails: {},
  signature: {},
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
      const productIndex = newProducts.findIndex((p) => p.id === id);
      // console.log(productIndex);
      if (productIndex !== -1) {
        newProducts[productIndex] = {
          ...newProducts[productIndex],
          time: time,
        };
      } else {
        newProducts.push({ id: id, name: name, time: time });
      }
      // if (newProducts[id]) {
      //   newProducts[id] = { ...newProducts[id], time: time };
      // } else {
      //   newProducts[id] = { id: id, name: name, time: time };
      // }
      state.products = newProducts;
      // console.log(current(state.products));
    },
    setProductsQuantity: (state, action) => {
      const { id, name, quantity, price } = action.payload;
      const newProducts = state.products;
      const productIndex = newProducts.findIndex((p) => p.id === id);
      // console.log(productIndex);
      if (productIndex !== -1) {
        newProducts[productIndex] = {
          ...newProducts[productIndex],
          quantity: quantity,
          price: price,
        };
      } else {
        newProducts.push({
          id: id,
          name: name,
          quantity: quantity,
          price: price,
        });
      }
      // if (newProducts[id]) {
      //   newProducts[id] = { ...newProducts[id], quantity: quantity };
      // } else {
      //   newProducts[id] = { id: id, name: name, quantity: quantity };
      // }
      state.products = newProducts;
      // console.log(current(state.products));
    },
    setTotal: (state, action) => {
      const { total } = action.payload;
      state.total = total;
    },
    setAddonsQuantity: (state, action) => {
      const { id, name, quantity, price } = action.payload;
      console.log(id, name, quantity, price);
      const newAddons = state.addons;
      const addonIndex = newAddons.findIndex((a) => a.id === id);
      // console.log(productIndex);
      if (addonIndex !== -1) {
        newAddons[addonIndex] = {
          ...newAddons[addonIndex],
          quantity: quantity,
          price: price,
        };
      } else {
        newAddons.push({
          id: id,
          name: name,
          quantity: quantity,
          price: price,
        });
      }
      state.addons = newAddons;
      // console.log(current(state.products));
    },
    setSignature: (state, action) => {
      const { signature } = action.payload;
      console.log(signature);
      state.signature = signature;
      // console.log(current(state.signature));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDate,
  setProductsTime,
  setProductsQuantity,
  setAddonsQuantity,
  setTotal,
  setSignature,
} = cartSlice.actions;

export default cartSlice.reducer;
