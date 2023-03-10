import {
  addItemToCart,
  decFromCart,
  remFromCart,
} from "../../features/cart/cartSlice";

const saveCartItemsToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type === addItemToCart.type ||
    action.type === decFromCart.type ||
    action.type === remFromCart.type
  ) {
    const { cart } = store.getState();

    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

  return result;
};

export default saveCartItemsToLocalStorage;
