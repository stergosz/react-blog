import React from "react";
import ReactDOM from "react-dom";
import PageLayout from "./components/pageLayout";

import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>,
  document.getElementById("wrapper")
);
