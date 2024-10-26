import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DriverContextProvider } from "./context/driverContext.tsx";
import { ListContextProvider } from "./context/listContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ListContextProvider>
        <DriverContextProvider>
          <App />
        </DriverContextProvider>
      </ListContextProvider>
    </BrowserRouter>
  </StrictMode>
);
