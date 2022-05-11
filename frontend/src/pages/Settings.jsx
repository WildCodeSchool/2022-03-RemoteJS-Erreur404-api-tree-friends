import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";
import axios from "axios";
// assets
import logo from "../assets/alt-logo.png";
import dice from "../assets/dice.png";

// components
import Movie from "../components/Movie";
import StartButton from "../components/StartButton";
import DifficultySwiper from "../components/DifficultySwiper";
import ExportContext from "../contexts/MovieContext";
import Rules from "../components/Rules";

// Data
import topMovies from "../data/topMovies";
import easyMovies from "../data/easyMovies";

function Settings() {
  const [movieStart, setMovieStart] = useState();
  const [movieEnd, setMovieEnd] = useState();
  const [difficulty, setDifficulty] = useState("facile");
  const [openRules, setOpenRules] = useState(false);
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
      return easyMovies[Math.floor(Math.random() * easyMovies.length)];
    }
    if (difficulty === "moyen") {
      return topMovies[Math.floor(Math.random() * topMovies.length)];
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
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col">
        <img
          className="w-auto max-h-48 aspect-square self-center"
          src={logo}
          alt="alt-logo"
        />
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-row">
            {movieStart ? <Movie movie={movieStart} type="Start" /> : ""}
            {movieEnd ? <Movie movie={movieEnd} type="End" /> : ""}
          </div>
          <button
            className="self-center mt-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
            type="submit"
            onClick={() => prepareData()}
          >
            <img className="h-12" src={dice} alt="dice" />
          </button>
          <div className="flex justify-center">
            <DifficultySwiper
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </div>
        </motion.div>
        {movieEnd && movieStart && (
          <StartButton
            content="Play"
            link={`/gametransition/${movieStart.title}/${movieEnd.title}`}
          />
        )}
        <button
          type="button"
          onClick={() => setOpenRules(true)}
          className="absolute bottom-2 right-2 w-12 h-12 bg-gray-50 text-orange-400 font-bold py-2 px-3.5 mx-2 mt-3 rounded-full shadow-inner"
        >
          <FaQuestion className="w-5 h-5 shadow-black" />
        </button>
        {openRules && <Rules closeRules={setOpenRules} />}
      </div>
    </motion.div>
  );
}

export default Settings;
