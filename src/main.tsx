import React from "react";
import ReactDOM from "react-dom";
import RootContext from "./context";
import RouterComponent from "./routes";


ReactDOM.render(
  <React.StrictMode>
    <RootContext>

      <RouterComponent />

    </RootContext>
  </React.StrictMode>,
  document.getElementById("root")
);
