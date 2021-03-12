import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import itemsReducer from "./strore/items/reducer"
import cartReducer from "./strore/cart/reducer"
import App from "./App";
import { Provider } from "react-redux";
const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer
})
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
