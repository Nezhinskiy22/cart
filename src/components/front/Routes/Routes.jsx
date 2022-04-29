import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Singup/Signup";
import Cart from "../Cart/Cart";

const Routes = ({ productItems }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Products productItems={productItems} />
      </Route>
      <Route path="/signup" exact>
        <Signup />
      </Route>
      <Route>
        <Cart patg="/signup" exact />
      </Route>
    </Switch>
  );
};

export default Routes;
