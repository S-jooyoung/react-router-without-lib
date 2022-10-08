import React from "react";
import ReactDOM from "react-dom/client";

// custom-components
import Router from "./components/router";
import Route from "./components/route";

// pages
import About from "./pages/about";
import Root from "./pages/root";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
