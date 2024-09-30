import { createSlice } from "@reduxjs/toolkit";
import { TCategoryInitialState } from "../../../types";


const initialState: TCategoryInitialState = {
  category: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.category = action.payload;
    },
    clearCategory: (state) => {
      state.category = null;
    },
  },
});

export const { selectCategory, clearCategory } = categorySlice.actions;

export default categorySlice.reducer;