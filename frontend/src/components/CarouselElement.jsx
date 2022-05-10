import React from "react";

function CarouselElement({ element, changeData }) {
  return (
    <button
      type="button"
      className="min-w-full rounded shadow-xl"
      onClick={() => changeData(element.id)}
    >
      <img
        className="max-h-32 w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/w342/${
          element.profile_path ? element.profile_path : element.poster_path
        }`}
        alt={element.name ? element.name : element.title}
      />
      <div className="h-20 flex flex-col">
        <h3 className="overflowing text-sm my-1 max-h-12 font-semibold leading-none">
          {element.name ? element.name : element.title}
        </h3>
        <p className="overflowing text-gray-700 text-xs">
          {element.character
            ? element.character
            : element.release_date.slice(0, 4)}
        </p>
      </div>
    </button>
  );
}

export default CarouselElement;
