import store from "./store/store";
import {
  addToCart,
  deleteItemFromCart,
  updateItemQuantityCart
} from "./actions/cartAction";

import { filterPricyItem } from "./actions/filterAction";

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addToCart("Fifa 2018", 29, 1, "USD"));

store.dispatch(addToCart("Coffee", 6, 2, "USD"));

store.dispatch(addToCart("Chocolate", 20, 2, "USD"));

//store.dispatch(deleteItemFromCart("Chocolate"));

//store.dispatch(updateItemQuantityCart("Coffee", 9, 3, "USD"));
const cartItems = store.getState().shoppingCart;
console.log(cartItems);
store.dispatch(filterPricyItem(cartItems, 15));

unsubscribe();
