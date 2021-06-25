import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
