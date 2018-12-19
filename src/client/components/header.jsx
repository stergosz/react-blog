import React, { Component } from "react";

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
            <a href={process.env.PUBLIC_URL}>
              <img src={logo} className="header_logo" alt="logo" />
            </a>

            <ul className="header_menu">
              <li>
                <a href={process.env.PUBLIC_URL}>Login</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL}>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
