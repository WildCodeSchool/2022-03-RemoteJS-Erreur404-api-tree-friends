import React from "react";

function DifficultySwiper({ difficulty, setDifficulty }) {
  return (
    <div className="flex flex-col text-cyan-700 m-6">
      <div className="self-center">
        <select
          defaultValue={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="" disabled selected hidden>
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
