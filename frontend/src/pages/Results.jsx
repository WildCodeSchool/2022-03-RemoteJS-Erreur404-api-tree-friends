import React, { useContext } from "react";

import logo from "../assets/alt-logo.png";
import shareLogo from "../assets/share.png";
import StartButton from "../components/StartButton";

import ExportContext from "../contexts/MovieContext";

function Results() {
  const username = "Tintin";
  const clic = "9";
  const timer = "4min 12sec";
  const { moviesId } = useContext(ExportContext.MovieContext);

  return (
    <div className="flex flex-col">
      <img className="w-6/12 aspect-square self-center" src={logo} alt="logo" />
      <div className="text-orange-400 text-3xl leading-normal font-bold text-center w-238px h-284px rounded-3xl bg-gray-100 mx-6 px-6">
        <h1 className="text-orange-400 text-5xl leading-normal font-bold text-center mt-4">
          BRAVO !
        </h1>

        <h1 className="text-cyan-700 text-4xl leading-normal font-bold text-center mb-4">
          {username.toUpperCase()}
        </h1>
        <p className="text-orange-400 text-2xl leading-normal font-bold text-center">
          Temps: {timer}
        </p>
        <p className="text-orange-400 text-2xl leading-normal font-bold text-center">
          Nombre de coups: {clic}
        </p>
        <p className="text-cyan-700 text-2xl leading-normal font-bold text-center mb-8">
          Partage ton score avec tes amis
        </p>

        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:3000/replay/${moviesId[0]}/${moviesId[1]}/${username}/${timer}`
            );
          }}
        >
          <img className="h-10" src={shareLogo} alt="" />
        </button>
      </div>
      <div className=" mb-12 m-10">
        <StartButton content="Play again ?" link="/settings" />
      </div>
    </div>
  );
}

export default Results;
