import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import App from "./App";

// Get the root element from the DOM
const container = document.getElementById("root");

// Create a root.
const root = createRoot(container!);

// Initial render: Render an element to the root.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
