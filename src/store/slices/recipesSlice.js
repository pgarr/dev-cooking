import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    loading: true,
    ingredients: [],
    categories: [],
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setData: (state, action) => {
      state.recipes = action.payload.recipes;
      state.ingredients = action.payload.ingredients;
      state.categories = action.payload.categories;
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading, setData } = recipesSlice.actions;

export default recipesSlice.reducer;
