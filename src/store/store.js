import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer, recipesReducer, authReducer } from "./slices";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
