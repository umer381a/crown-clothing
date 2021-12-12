import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import ShopPage from "./pages/shoppage/shop-page";

import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
