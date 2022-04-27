import React from "react";

function DifficultySwiper() {
  return (
    <div className="flex flex-col text-cyan-700 m-6">
      <div className="self-center">
        <select>
          <option value="Facile">Facile</option>
          <option value="Moyen">Moyen</option>
          <option value="Difficile">Difficile</option>
        </select>
      </div>
    </div>
  );
}

export default DifficultySwiper;
