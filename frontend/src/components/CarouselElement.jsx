import React from "react";

function CarouselElement({ element, changeData }) {
  return (
    <button
      type="button"
      className="w-30 rounded overflow-hidden shadow-lg"
      onClick={() => changeData(element.id)}
    >
      <img
        className="max-h-12 h-full w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${
          element.profile_path ? element.profile_path : element.poster_path
        }`}
        alt={element.name ? element.name : element.title}
      />
      <div className="px-2 h-20">
        <h3 className="text-sm mb-2 max-h-12">
          {element.name ? element.name : element.title}
        </h3>
        <p className="text-gray-700 text-xs">
          {element.character
            ? element.character
            : element.release_date.slice(0, 4)}
        </p>
      </div>
    </button>
  );
}

export default CarouselElement;
