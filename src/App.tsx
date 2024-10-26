import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { Driver, Home } from "./pages";

// https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept

const App = () => {
  return (
    <Suspense fallback={<p>Refueling...</p>}>
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver/:slug" element={<Driver />} />
        </Routes>
      </GlobalStyle>
    </Suspense>
  );
};

export default App;
