import React from "react";

function CarouselElement({ element }) {
  return (
    <div className="w-30 rounded overflow-hidden shadow-lg">
      <img
        className="max-h-20 h-full w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${element.profile_path}`}
        alt="movie"
      />
      <div className="px-2 py-3 h-20">
        <h3 className="font-bold text-sm mb-2 break-all">{element.name}</h3>
        <p className="text-gray-700 text-xs">
          {element.character}
        </p>
      </div>
    </div>
  );
}

export default CarouselElement;
