import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

import "./styles/style.css";
// import "./styles/fonts.css";
// import "./icons.css"
// import "./styles/styles.css"

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

ReactDOM.render(
  <App />,
  // <h1>test</h1>,
  document.getElementById("content")
);
