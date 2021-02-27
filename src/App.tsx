import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Producents from "./Containers/Producents";
import Categorys from "./Containers/Categorys";
import Products from "./Containers/Products";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/categorys">Categorys</Link>
      <Link to="/producents">Producents</Link>
      <Link to="/products">Products</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categorys" component={Categorys} />
        <Route exact path="/producents" component={Producents} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
