import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./slices/recipesSlice";

export default configureStore({
  reducer: { recipes: recipesSlice },
});
