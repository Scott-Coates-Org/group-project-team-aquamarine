import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
};

export const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setNewRoom: (state, action) => {
      state.rooms = [...state.rooms, action.payload.room];
      console.log(state.rooms);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewRoom } = roomSlice.actions;

export default roomSlice.reducer;
