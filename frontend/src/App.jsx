import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import des composants
import Home from "@pages/Home";
import Error from "@pages/Error";
import Settings from "@pages/Settings";
import Game from "@pages/Game";
import Results from "@pages/Results";
import Replay from "@pages/Replay";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings/" element={<Settings />} />
        <Route path="/game/" element={<Game />} />
        <Route path="/results/" element={<Results />} />
        <Route
          path="/replay/:start/:end/:username/:timer"
          element={<Replay />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
