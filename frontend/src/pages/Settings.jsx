import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import Movie from "../components/Movie";

function Settings() {

  const [movieStart, setMovieStart] = useState();
  const [movieEnd, setMovieEnd] = useState();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  const randomMovieId = [];

  const random = (index) => {
    randomMovieId[index] = Math.floor(Math.random() * (900 - 100) + 100);
    console.log(randomMovieId)
    return randomMovieId[index];
  };

  const generateMovies = (callback, index) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${random(
          index
        )}?api_key=process.env.REACT_APP_TMDB_KEY&language=fr`
      )
      .then((res) => {
        callback(res.data);
      });
  };

  useEffect(() => {
    generateMovies(setMovieStart, 0)
    generateMovies(setMovieEnd, 1)
  }, [])

  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        {movieStart ? <Movie movie={movieStart} /> : ""}
        {movieEnd ? <Movie movie={movieEnd} /> : ""}
        <button type="button" onClick={() => {
          generateMovies(setMovieStart, 0)
          generateMovies(setMovieEnd, 1)}}>
          Change Movies
        </button>
      </div>
    </div>
  );
}

export default Settings;
