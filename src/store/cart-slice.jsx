import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    isChanged: false,
    cartIsVisible: false,
    totalPrice: 0,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    additem(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      state.isChanged = true;
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          title: newitem.title,
          price: newitem.price,
          quantity: 1,
          totalprice: newitem.price,
          name: newitem.title,
          description: newitem.description,
          image: newitem.images[0],
        });
        state.totalPrice = state.totalPrice + newitem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newitem.price;
        state.totalPrice = state.totalPrice + existingItem.price;
      }
    },
    removeitem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.isChanged = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
        state.totalPrice = state.totalPrice - existingItem.price;
      }
    },
    removeproduct(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.isChanged = true;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice = state.totalPrice - existingItem.totalprice;
    },
  },
});

export default cartSlice;
export const { removeitem, additem, toggle, replaceCart, removeproduct } =
  cartSlice.actions;
