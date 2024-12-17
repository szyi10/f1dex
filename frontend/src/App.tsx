import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { Spinner } from "./components/shared";
import { Driver, Home, NotFound } from "./pages";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver/:slug" element={<Driver />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalStyle>
    </Suspense>
  );
};

export default App;
