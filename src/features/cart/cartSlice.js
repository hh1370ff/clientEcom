import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cartItems"))?.cart || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let itemExist = false;

      if (state.cart.length === 0) {
        state.cart.push({
          item: action.payload.item,
          count: action.payload.count,
        });
        return;
      }

      state.cart.map(({ item, count }, index) => {
        if (item._id === action.payload.item._id) {
          itemExist = true;
          state.cart[index] = { item, count: count + action.payload.count };
        }
      });
      if (itemExist) return;
      state.cart.push({
        item: action.payload.item,
        count: action.payload.count,
      });
    },
    decFromCart: (state, action) => {
      state.cart.map(({ item, count }, index) => {
        if (item._id === action.payload.item._id) {
          if (count > 1) {
            state.cart[index] = { item, count: count - 1 };
          } else {
            state.cart.splice(index, 1);
          }
        }
      });
    },

    remFromCart: (state, action) => {
      state.cart.map(({ item }, index) => {
        if (item._id === action.payload.item._id) {
          state.cart.splice(index, 1);
        }
      });
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const selectCart = (state) => state.cart.cart;

export const { addItemToCart, decFromCart, remFromCart } = cartSlice.actions;
