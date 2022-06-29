import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import RouterComponent from "./routes";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RootContext>
      <RouterComponent />
    </RootContext>
  </React.StrictMode>
);
