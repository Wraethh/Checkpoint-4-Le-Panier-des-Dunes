import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";

import App from "./App";
import { VegetableContextProvider } from "./contexts/VegetableContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <VegetableContextProvider>
          <App />
        </VegetableContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
