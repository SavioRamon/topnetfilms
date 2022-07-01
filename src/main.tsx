import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import RootContext from "./context";
import RouterComponent from "./routes";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RootContext>
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </RootContext>
  </React.StrictMode>
);
