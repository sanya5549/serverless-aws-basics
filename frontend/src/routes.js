import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login_signup/login";
import Signup from "./component/login_signup/signup";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
    </Route>
      {/* Finally, catch all unmatched routes */}
    </Switch>
  );
}