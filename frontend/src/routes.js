import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login_signup/login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      {/* Finally, catch all unmatched routes */}
    </Switch>
  );
}