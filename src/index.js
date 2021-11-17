import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import App from "./App";
import IndexStyled from "./IndexStyled";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <IndexStyled />
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
