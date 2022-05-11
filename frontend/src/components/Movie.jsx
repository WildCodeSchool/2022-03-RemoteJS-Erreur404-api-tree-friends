import React from "react";
import { motion } from "framer-motion";

function Movie({ movie, type }) {
  return (
    <motion.div className="w-1/2 rounded overflow-hidden shadow-lg ml-4 mr-4">
      <h1 className="font-semibold font-sans text-cyan-700 text-2xl mb-1 text-center">
        {type}
      </h1>
      <img
        className="max-h-32 h-full w-full object-cover object-center rounded-t-md"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="movie"
      />
      <div className="px-2 py-3 h-20">
        <h3 className="font-semibold text-base mb-2 truncate">{movie.title}</h3>
        <p className="text-gray-700 text-base">
          {movie.release_date.slice(0, 4)}
        </p>
      </div>
    </motion.div>
  );
}

export default Movie;
