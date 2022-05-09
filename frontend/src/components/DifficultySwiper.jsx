import React from "react";

function DifficultySwiper({ difficulty, setDifficulty }) {
  return (
    <div className="flex flex-col text-cyan-700 m-3 border shadow-inner p-2 w-1/2 rounded-lg">
      <div className="self-center">
        <select
          className=" text-center font-semibold"
          defaultValue={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="" disabled hidden>
            Choisis ton niveau
          </option>
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
        </select>
      </div>
    </div>
  );
}

export default DifficultySwiper;
