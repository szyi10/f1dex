import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DriverContextProvider } from "./context/driverContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DriverContextProvider>
        <App />
      </DriverContextProvider>
    </BrowserRouter>
  </StrictMode>
);
