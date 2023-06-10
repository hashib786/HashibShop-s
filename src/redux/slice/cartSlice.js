import { createSlice } from "@reduxjs/toolkit";

const cartItem = localStorage.getItem("cartItem");
const cart =
  cartItem && JSON.parse(cartItem).length !== 0
    ? JSON.parse(cartItem)
    : { cart: [] };
const cartSlice = createSlice({
  name: "CartSlice",
  initialState: cart,
  reducers: {
    addCart: (state, action) => {
      let found = false;
      state.cart = state.cart.map((cart) => {
        if (cart._id === action.payload._id) {
          found = true;
          return action.payload;
        }
        return cart;
      });
      if (!found) state.cart = [...state.cart, action.payload];
      localStorage.setItem("cartItem", JSON.stringify(state));
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((cart) => cart._id !== action.payload);
      localStorage.setItem("cartItem", JSON.stringify(state));
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addCart, deleteCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
