import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserContextProvider } from "./contexts/UserContext";
import { VegetableContextProvider } from "./contexts/VegetableContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <VegetableContextProvider>
          <App />
          <ToastContainer />
        </VegetableContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
