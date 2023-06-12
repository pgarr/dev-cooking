import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slices/filtersSlice";
import recipesReducer from "./slices/recipesSlice";
import authreducer from "./slices/authSlice";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    filters: filtersReducer,
    auth: authreducer,
  },
});
