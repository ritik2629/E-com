import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  // cartItems: [],
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartquantity += 1;
        toast.info(`${state.cartItems[itemIndex].name} quantity increased`);
      } else {
        const tempProduct = { ...action.payload, cartquantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`);
      }
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
