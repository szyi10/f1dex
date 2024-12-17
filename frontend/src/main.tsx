import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ListContextProvider } from "./context/listContext.tsx";
import { DriverContextProvider } from "./context/driverContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ListContextProvider>
        <DriverContextProvider>
          <App />
        </DriverContextProvider>
      </ListContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
