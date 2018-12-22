import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/img/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <NavLink to="/">
              <img src={logo} className="header_logo" alt="logo" />
            </NavLink>

            <ul className="header_menu">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
