import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  name: string;
  categories: { value: string; label: string }[];
}

const initialState: FiltersState = {
  name: "",
  categories: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    filterCategories: (
      state,
      action: PayloadAction<{ value: string; label: string }[]>,
    ) => {
      state.categories = action.payload;
    },
  },
});

export const { filterName, filterCategories } = filtersSlice.actions;

export default filtersSlice.reducer;
