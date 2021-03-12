import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Products from "./Containers/Products";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as data from "./data.json";
import Nav from "./Containers/Nav";
import Cart from "./Containers/Cart";
import Product from "./Containers/Product";
import {setItems} from "./strore/items/actions"
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setItems(data.items));
  }, [dispatch]);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:product_name" component={Product} />
      </Switch>
    </Router>
  );
};
export default App;
