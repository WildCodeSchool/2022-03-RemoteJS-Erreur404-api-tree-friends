import React from "react";

function Movie({ movie }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="movie"
      />
    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
      <p className="text-gray-700 text-base">{movie.release_date.slice(0, 4)}</p>
    </div>
      
    </div>
  );
}

export default Movie;
