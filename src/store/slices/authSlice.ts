import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  username: string | null;
}

const initialState: AuthState = {
  username: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
    clearUsername: (state) => {
      state.username = null;
    },
  },
});

export const { setUsername, clearUsername } = authSlice.actions;

export default authSlice.reducer;
