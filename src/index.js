import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./routes/helpers/ScrollToTop";
import Nav from "./components/nav/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <App />
    </HashRouter>
  </React.StrictMode>
);
