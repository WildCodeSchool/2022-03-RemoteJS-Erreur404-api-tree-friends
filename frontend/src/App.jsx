import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// Import des composants
import Home from "@pages/Home";
import Error from "@pages/Error";
import Settings from "@pages/Settings";
import Game from "@pages/Game";
import Results from "@pages/Results";
import Replay from "@pages/Replay";
import GameTransition from "@pages/GameTransition";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/settings/" element={<Settings />} />
        <Route
          path="/gametransition/:start/:end"
          element={<GameTransition />}
        />
        <Route path="/game/" element={<Game />} />
        <Route path="/results/" element={<Results />} />
        <Route
          path="/replay/:start/:end/:username/:timer/:clic"
          element={<Replay />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
