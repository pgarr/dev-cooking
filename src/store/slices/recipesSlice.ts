import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types";

interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  ingredients: string[];
  categories: string[];
}

const initialState: RecipesState = {
  recipes: [],
  loading: true,
  ingredients: [],
  categories: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setData: (
      state,
      action: PayloadAction<{
        recipes: Recipe[];
        ingredients: string[];
        categories: string[];
      }>,
    ) => {
      state.recipes = action.payload.recipes;
      state.ingredients = action.payload.ingredients;
      state.categories = action.payload.categories;
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading, setData } = recipesSlice.actions;

export default recipesSlice.reducer;
