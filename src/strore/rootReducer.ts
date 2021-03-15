import itemsReducer from "./items/reducer";
import cartReducer from "./cart/reducer";
import {  combineReducers } from "redux";

export const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
  });
export type RootState = ReturnType<typeof rootReducer>
