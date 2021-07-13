import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";
import "./animation.css";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Header cart={cart} />
      <Switch>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/">
          <Products cart={cart} setCart={setCart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
