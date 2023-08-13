import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productSilce";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  
  },
});

export default store;
