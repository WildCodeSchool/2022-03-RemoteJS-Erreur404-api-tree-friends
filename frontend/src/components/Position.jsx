import React from "react";

function Position({ items }) {
  return (
    <div className="w-auto rounded-lg overflow-hidden shadow-lg m-4 object-cover">
      <img
        className="max-h-32 h-full w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${
          items.poster_path ? items.poster_path : items.profile_path
        }`}
        alt="position"
      />
      <div className="px-2 py-3 h-12 flex justify-around">
        <h3 className="font-bold text-xl">
          {items.title ? items.title : items.name}
        </h3>
        <p className="text-gray-700 text-base">
          {items.release_date
            ? items.release_date.slice(0, 4)
            : items.character}
        </p>
      </div>
    </div>
  );
}

export default Position;
