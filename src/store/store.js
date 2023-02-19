import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import { itemsReducer } from "../features/item/itemSlice";
import authReducer from "../features/auth/authSlice";
import { carouselReducer } from "../features/carousel/carouselSlice";
import { itemImagesReducer } from "../features/itemImage/itemImageSlice";
import { carouselImageReducer } from "../features/carouselImage/carouselImageSlice";
import saveCartItemsToLocalStorage from "./reduxMiddleware/reduxMiddleware";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
    auth: authReducer,
    carousel: carouselReducer,
    itemImages: itemImagesReducer,
    carouselImages: carouselImageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveCartItemsToLocalStorage),
  devTool: false,
});
