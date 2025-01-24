import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    categories: [],
  },
  reducers: {
    filterName: (state, action) => {
      state.name = action.payload;
    },
    filterCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { filterName, filterCategories } = filtersSlice.actions;

export default filtersSlice.reducer;
