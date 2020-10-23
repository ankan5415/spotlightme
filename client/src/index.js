import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

import "./styles/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, fab);

ReactDOM.render(<App />, document.getElementById("content"));
