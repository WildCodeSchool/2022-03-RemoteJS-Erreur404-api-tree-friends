import React, { useState, useEffect } from "react";
import axios from "axios";
// assets
import logo from "../assets/alt-logo.png";
import dice from "../assets/dice.png";
import topMovies from "../data/topMovies";
// components
import Movie from "../components/Movie";
import StartButton from "../components/StartButton";
import DifficultySwiper from "../components/DifficultySwiper";

function Settings() {
  const [movieStart, setMovieStart] = useState();
  const [movieEnd, setMovieEnd] = useState();
  const [difficulty, setDifficulty] = useState("facile");

  const randomMovieId = [];

  const random = (index) => {
    if (difficulty === "facile") {
      randomMovieId[index] =
        topMovies[Math.floor(Math.random() * topMovies.length)];
    } else if (difficulty === "moyen") {
      randomMovieId[index] = Math.floor(Math.random() * (400 - 100) + 100);
    } else {
      randomMovieId[index] = Math.floor(Math.random() * (400 - 100) + 100);
    }
    return randomMovieId[index];
  };

  const generateMovies = (callback, index) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${random(index)}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        callback(res.data);
      });
  };

  useEffect(() => {
    generateMovies(setMovieStart, 0);
    generateMovies(setMovieEnd, 1);
    if (movieStart === movieEnd) {
      generateMovies(setMovieEnd, 1);
    }
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
        onClick={() => {
          generateMovies(setMovieStart, 0);
          generateMovies(setMovieEnd, 1);
        }}
      >
        <img className="h-12" src={dice} alt="dice" />
      </button>
      <DifficultySwiper
        onChange={(event) => setDifficulty(event.target.value)}
      />
      <StartButton content="Play" link="/game" />
    </div>
  );
}

export default Settings;
