import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import des composants
import Home from "@pages/Home";
import Error from "@pages/Error";
import Settings from "@pages/Settings";
import Game from "@pages/Game";
import Results from "@pages/Results";

import MovieContext from "./contexts/MovieContext";

import "./App.css";

function MovieProvider({ children }) {
  const [moviesId, setMoviesId] = useState(null);
  const value = useMemo(
    () => ({
      moviesId,
      setMoviesId,
    }),
    [moviesId]
  );
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings/" element={<Settings />} />
          <Route path="/game/" element={<Game />} />
          <Route path="/results/" element={<Results />} />
          <Route path="/error/" element={<Error />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
