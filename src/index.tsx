import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FirebaseProvider } from "./utils/FirebaseProvider";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
