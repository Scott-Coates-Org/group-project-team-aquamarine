import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    removeCurrentUser: (state) => {
      state.user = null;
    },
  },
});

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;

// selectors
export const currentUser = (state) => state.currentUser.user;

export default currentUserSlice.reducer;
