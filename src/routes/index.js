import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import Library from "../pages/Library/Library";
import LoginPage from "../pages/LoginPage/LoginPage";

function RoutesPage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/library" component={Library} />
      </Switch>
    </Router>
  );
}
export default RoutesPage;
