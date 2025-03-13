import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { store } from "./src/store";
import { Provider } from "react-redux";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
