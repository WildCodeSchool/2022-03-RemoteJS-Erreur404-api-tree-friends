import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Input from "../components/input";
import Movie from "../components/Movie";
import StartButton from "../components/StartButton";

import ExportContext from "../contexts/MovieContext";

import logo from "../assets/alt-logo.png";

function Replay() {
  const [movieStart, setMovieStart] = useState();
  const [movieEnd, setMovieEnd] = useState();
  const { handleMoviesIdChange } = useContext(ExportContext.MovieContext);
  const moviesParams = useParams();

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

  const prepareData = () => {
    const temporaireIds = [moviesParams.start, moviesParams.end];
    generateMovies(setMovieStart, temporaireIds[0]);
    generateMovies(setMovieEnd, temporaireIds[1]);
    handleMoviesIdChange(temporaireIds);
  };

  useEffect(() => {
    prepareData();
  }, []);

  return (
    <div className="flex flex-col">
      <img className="w-6/12 aspect-square self-center" src={logo} alt="logo" />
      <div className="flex flex-col">
        <div className="flex flex-row mb-8">
          {movieStart ? <Movie movie={movieStart} /> : ""}
          {movieEnd ? <Movie movie={movieEnd} /> : ""}
        </div>
      </div>
      <h1 className="text-2xl leading-normal font-bold mx-10 text-orange-400 mb-8">
        {moviesParams.username} vous invite à battre son score de{" "}
        {moviesParams.timer} !
      </h1>
      <Input />
      <StartButton content="Start" link="/game" />
    </div>
  );
}

export default Replay;
