import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Containers/Products";
import Nav from "./Containers/Nav/Nav";
import Product from "./Containers/Product";
import Checkout from "./Containers/Checkout"
const App = () => {

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
