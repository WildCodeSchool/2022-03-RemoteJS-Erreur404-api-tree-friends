import React from "react";
import DifficultySwiper from "../components/DifficultySwiper";

function Settings() {
  return (
    <div>
      <p>Paramètres</p>
      <div className="flex flex-col">
        <p className="self-center mt-4 font-bold text-xl">Choisis ton niveau</p>
      </div>
      <DifficultySwiper />
    </div>
  );
}

export default Settings;
