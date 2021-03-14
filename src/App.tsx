import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Containers/Products";
import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import * as data from "./data.json";
import Nav from "./Containers/Nav/Nav";
import Product from "./Containers/Product";
import Checkout from "./Containers/Checkout"
import {setItems} from "./strore/items/actions"
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
    // dispatch(setItems(data.items));
  // }, [dispatch]);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product/:product_name" component={Product} />
      </Switch>
    </Router>
  );
};
export default App;
