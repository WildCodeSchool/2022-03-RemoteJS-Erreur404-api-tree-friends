import React from "react";

function CarouselElement({ element }) {
  return (
    <div className="w-30 rounded overflow-hidden shadow-lg">
      <img
        className="max-h-20 h-full w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${
          element.profile_path ? element.profile_path : element.poster_path
        }`}
        alt={element.name ? element.name : element.title}
      />
      <div className="px-2 py-3 h-20">
        <h3 className="font-bold text-sm mb-2 break-all">
          {element.name ? element.name : element.title}
        </h3>
        <p className="text-gray-700 text-xs">
          {element.character
            ? element.character
            : element.release_date.slice(0, 4)}
        </p>
      </div>
    </div>
  );
}

export default CarouselElement;
