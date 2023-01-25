import React from "react";
import ReactDOM from "react-dom/client";
import SunData from "./components/SunData";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SunData />
  </React.StrictMode>
);
