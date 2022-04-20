import React from "react";
import Dropdown from "react-dropdown";
import { useState } from "react/cjs/react.production.min";

function DifficultySwiper() {
  const options = ["Facile", "Moyen", "Difficile"];

  const [difficulty, SetDifficulty] = useState("test");

  const handleChange = (event) => {
    event.preventDefault();
    SetDifficulty(event.target.value);
  };

  return (
    <div>
      <Dropdown options={options} onChange={handleChange} value={difficulty} />;
    </div>
  );
}

export default DifficultySwiper;
