import { createSlice } from "@reduxjs/toolkit";

const wishlist = localStorage.getItem("wishlistItem") ? JSON.parse(localStorage.getItem("wishlistItem")) : {wishlist:[]};
const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: wishlist,
  reducers: {
    addWishlist: (state, action) => {
      let found = false;
      state.wishlist = state.wishlist.map(wishlist => {
        if(wishlist._id === action.payload._id){
          found = true;
          return action.payload;
        }
        return wishlist;
      });
      if(!found) state.wishlist = [...state.wishlist, action.payload];
      localStorage.setItem("wishlistItem", JSON.stringify(state));
  },
  deleteWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(wishlist => wishlist._id !== action.payload);
      localStorage.setItem("wishlistItem", JSON.stringify(state));
    },
  },
  
});

export const { addWishlist, deleteWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
