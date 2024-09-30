import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartInitialState } from "../../../types";

const initialState: TCartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        if (existingProduct.quantity < action.payload.stock) {
          existingProduct.quantity += 1;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const isItemExists = state.items.find(
        (item) => item._id === action.payload.id
      );
      if (isItemExists) {
        isItemExists.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;