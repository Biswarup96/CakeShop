import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Redux/ProductSlice";
import cartReducer from "../Redux/CartSlice"; 

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
