import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filtersReducer, recipesReducer, authReducer } from "./slices";
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  filters: filtersReducer,
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;
type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();

export default store;
