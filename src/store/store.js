import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./product-slice.jsx";
import cartSlice from "./cart-slice.jsx";
import { getProducts } from "./product-slice.jsx";

export const store = configureStore({
  reducer: {
    productsSlice,
    cart: cartSlice.reducer,
  },
});
export default store;
store.dispatch(getProducts());
