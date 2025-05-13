import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [], // Final cart items we are actually purchasing
  tempItem: [], // Temporary changes in the array like purchasing and deleting
  totalPrice: 0, // Total price of the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }

      state.tempItem = [...state.item];
      state.totalPrice = state.item.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    updateTempQuantity(state, action) {
      const tempItems = state.tempItem.find(
        (item) => item.id === action.payload.id
      );
      if (tempItems) {
        tempItems.quantity = action.payload.quantity;
      }
    },
    applyTempUpdate(state, action) {
      const tempItems = state.tempItem.find(
        (item) => item.id === action.payload
      );
      const cartItems = state.item.find((item) => item.id === action.payload);
      if (cartItems && tempItems) {
        cartItems.quantity = tempItems.quantity;
      }
      state.totalPrice = state.item.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    removeFromCart(state, action) {
      state.item = state.item.filter((item) => item.id !== action.payload);
      state.tempItem = [...state.item];
      state.totalPrice = state.item.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart,applyTempUpdate, updateTempQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
