import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import sellerSlice from "./slice/sellerSlice";
import productSlice from "./slice/productSlice";
import sellerAllProductSlice from "./slice/sellerAllProductSlice";
import sellerAllEvents from "./slice/sellerAllEvents";
import eventSlice from "./slice/eventSlice";
import allProductSlice from "./slice/allProductSlice";
import allEventSlice from "./slice/allEventSlice";
import cartSlice from "./slice/cartSlice";
import whishlistSlice from "./slice/whishlistSlice";
import userOrderSlice from "./slice/userOrderSlice";
import sellerOrderSlice from "./slice/sellerOrderSlice";

const store = configureStore({
  reducer: {
    loginUser: userSlice,
    seller: sellerSlice,
    products: productSlice,
    sellerAllProduct: sellerAllProductSlice,
    sellerAllEvents,
    events: eventSlice,
    allProduct: allProductSlice,
    allEvent: allEventSlice,
    cart: cartSlice,
    wishlist: whishlistSlice,
    userOrder: userOrderSlice,
    sellerOrder: sellerOrderSlice,
  },
});

export default store;
