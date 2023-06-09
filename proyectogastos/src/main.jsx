import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProviderApp from "../Context/context";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../Context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderApp>
      <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthProvider>
    </ProviderApp>
  </React.StrictMode>
);
