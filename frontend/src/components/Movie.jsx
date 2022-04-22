import React from "react";

function Movie({ movie }) {
  return (
    <div className="w-1/2 rounded overflow-hidden shadow-lg ml-4 mr-4">
      <img
        className="max-h-40 h-full w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="movie"
      />
      <div className="px-2 py-3 h-20">
        <h3 className="font-bold text-base mb-2 truncate">{movie.title}</h3>
        <p className="text-gray-700 text-base">
          {movie.release_date.slice(0, 4)}
        </p>
      </div>
    </div>
  );
}

export default Movie;
