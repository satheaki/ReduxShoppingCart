import cartReducer from "./cartReducer";
import stockReducer from "./stockReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";

const applicationReducers = {
  shoppingCart: cartReducer,
  inventoryStock: stockReducer,
  filteredCart: filterReducer
};

const rootReducer = combineReducers(applicationReducers);

export default rootReducer;
