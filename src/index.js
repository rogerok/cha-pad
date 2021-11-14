import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import App from "./App";
import IndexStyled from "./IndexStyled";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IndexStyled />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    </React.StrictMode>,

  document.getElementById("root")
);
