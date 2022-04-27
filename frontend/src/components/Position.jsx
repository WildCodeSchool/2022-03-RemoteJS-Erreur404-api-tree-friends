import React from "react";

function Position({ place }) {
  return (
    <div className="w-auto rounded-lg overflow-hidden shadow-lg m-4 object-cover">
      <img
        className="max-h-32 h-full w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${place.poster_path}`}
        alt="position"
      />
      <div className="px-2 py-3 h-12 flex justify-around">
        <h3 className="font-bold text-xl">{place.title}</h3>
        <p className="text-gray-700 text-base">
          {place.release_date.slice(0, 4)}
        </p>
      </div>
    </div>
  );
}

export default Position;
