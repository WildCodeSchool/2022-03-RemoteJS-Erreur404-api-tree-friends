import React from "react";

function HistoricElement({ items }) {
  return (
    <div className="rounded-lg w-32 overflow-hidden shadow-lg m-4 object-cover flex items-center">
      <img
        className="max-h-20 w-1/2 object-cover"
        src={`https://image.tmdb.org/t/p/w342/${
          items.poster_path ? items.poster_path : items.profile_path
        }`}
        alt="HistoricElement"
      />
      <h3 className="overflowing font-semibold pl-2 text-sm leading-none">
        {items.title ? items.title : items.name}
      </h3>
    </div>
  );
}

export default HistoricElement;
