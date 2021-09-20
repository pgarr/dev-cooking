import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    filterName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterName } = filtersSlice.actions;

export default filtersSlice.reducer;
