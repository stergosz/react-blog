import React, { Component } from "react";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

import "../assets/css/master.scss";

export default class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* componentDidMount() {
    fetch("/api/getUsername")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error));
  } */

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <Content />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
