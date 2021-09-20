import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slices/filtersSlice";
import recipesSlice from "./slices/recipesSlice";

export default configureStore({
  reducer: { recipes: recipesSlice, filters: filtersSlice },
});
