import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="page_content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}
