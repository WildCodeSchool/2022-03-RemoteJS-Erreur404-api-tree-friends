import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// assets
import logo from "../assets/alt-logo.png";
import dice from "../assets/dice.png";

// components
import Movie from "../components/Movie";
import StartButton from "../components/StartButton";
import DifficultySwiper from "../components/DifficultySwiper";
import ExportContext from "../contexts/MovieContext";

// Data
import topMovies from "../data/topMovies";

function Settings() {
  const [movieStart, setMovieStart] = useState();
  const [movieEnd, setMovieEnd] = useState();
  const [difficulty, setDifficulty] = useState("facile");
  const { handleMoviesIdChange } = useContext(ExportContext.MovieContext);

  const generateMovies = (callback, id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        callback(res.data);
      });
  };

  const getRandomId = () => {
    if (difficulty === "facile") {
      return topMovies[Math.floor(Math.random() * topMovies.length)];
    }
    if (difficulty === "moyen") {
      return Math.floor(Math.random() * (400 - 100) + 100);
    }
    return Math.floor(Math.random() * (400 - 100) + 100);
  };

  const prepareData = () => {
    const temporaireIds = [getRandomId(), getRandomId()];
    generateMovies(setMovieStart, temporaireIds[0]);
    generateMovies(setMovieEnd, temporaireIds[1]);
    handleMoviesIdChange(temporaireIds);
  };

  useEffect(() => {
    prepareData();
  }, []);

  return (
    <div className="flex flex-col">
      <img
        className="w-6/12 aspect-square self-center"
        src={logo}
        alt="alt-logo"
      />
      <div className="flex flex-col">
        <div className="flex flex-row">
          {movieStart ? <Movie movie={movieStart} /> : ""}
          {movieEnd ? <Movie movie={movieEnd} /> : ""}
        </div>
      </div>
      <button
        className="self-center m-2"
        type="submit"
        onClick={() => prepareData()}
      >
        <img className="h-12" src={dice} alt="dice" />
      </button>
      <DifficultySwiper difficulty={difficulty} setDifficulty={setDifficulty} />
      <StartButton content="Play" link="/game" />
    </div>
  );
}

export default Settings;
