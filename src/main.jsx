import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Store } from "./app/Store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={Store}>
      <Router>
        <App />

      </Router>
    </Provider>




  </>
);
