import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    categories: [],
    ingredientsHas: [],
  },
  reducers: {
    filterName: (state, action) => {
      state.name = action.payload;
    },
    filterCategories: (state, action) => {
      state.categories = action.payload;
    },
    filterIngredientsHas: (state, action) => {
      state.ingredientsHas = action.payload;
    },
  },
});

export const {
  filterName,
  filterCategories,
  filterIngredientsHas,
} = filtersSlice.actions;

export default filtersSlice.reducer;
