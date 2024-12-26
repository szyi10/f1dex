import { Route, Routes } from "react-router-dom";
import { AllDriversPage, AuthPage, HomePage } from "./pages";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/all-drivers" element={<AllDriversPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
