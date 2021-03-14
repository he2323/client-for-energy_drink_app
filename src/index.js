import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import itemsReducer from "./strore/items/reducer";
import cartReducer from "./strore/cart/reducer";
import App from "./App";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});
const colors = {
  products: {
    borderColor: "#f5f5f5",
    iconMarkedColor: "#9fb024",
    iconUnmarkedColor: "#4a5c73"
  },
  nav: {
    buttonNormal: "#2f445c",
    buttonHover: "#4a5c73"
  }
}
const theme = extendTheme({colors})
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
