import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { ShopContextProvider } from "./Components/shopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Provider>
);
