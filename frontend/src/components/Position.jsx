import React from "react";

function Position({ items }) {
  return (
    <div className="rounded-lg w-auto overflow-hidden shadow-lg m-2 object-cover  flex justify-between items-center">
      <img
        className="w-1/2 object-cover"
        src={`https://image.tmdb.org/t/p/w342/${
          items.poster_path ? items.poster_path : items.profile_path
        }`}
        alt="position"
      />
      <div className="flex flex-col items-center mr-8">
        <h3 className="font-semibold text-cyan-700 pl-2 text-xl leading-none overflowing">
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
