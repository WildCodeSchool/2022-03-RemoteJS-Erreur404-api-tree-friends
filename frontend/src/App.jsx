import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Error from "@pages/Error";
import Settings from "@pages/Settings";
import Game from "@pages/Game";
import Results from "@pages/Results";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings/" element={<Settings />} />
        <Route path="/game/" element={<Game />} />
        <Route path="/results/" element={<Results />} />
        <Route path="/error/" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
