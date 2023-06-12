import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    clearUsername: (state, action) => {
      state.username = null;
    },
  },
});

export const { setUsername, clearUsername } = authSlice.actions;

export default authSlice.reducer;
