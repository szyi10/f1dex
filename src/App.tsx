import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

// https://www.behance.net/gallery/113562309/Pokemon-Pokedex-Website-Redesign-Concept

const App = () => {
  return (
    <Suspense fallback={<p>Refueling...</p>}>
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GlobalStyle>
    </Suspense>
  );
};

export default App;
