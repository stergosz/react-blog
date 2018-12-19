import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">Footer goes here</div>
        </div>
      </div>
    );
  }
}
