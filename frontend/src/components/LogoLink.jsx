import React from "react";
import { Link } from "react-router-dom";

function LogoLink({ closeLink }) {
  return (
    // logoLinkBackground
    <div className="absolute inset-0 z-20 w-screen h-screen bg-gray-900/75 flex justify-center items-center">
      {/* logoLinkContainer */}
      <div className="w-96 h-96 flex flex-col justify-around bg-white rounded-lg p-5">
        <div className=" flex justify-center" />
        {/* logoLinkHeader */}
        <div className="text-cyan-700 text-center text-2xl font-bold drop-shadow-md">
          <h3>Voulez-vous vraiment retourner à l&apos;accueil ?</h3>
        </div>
        {/* logoLinkFooter */}
        <div className="flex justify-around mb-20">
          <Link to="/">
            <button
              type="button"
              className="bg-orange-400 shadow-lg text-white font-bold py-2 px-4 rounded-full hover:bg-orange-700"
            >
              Quitter le jeu
            </button>
          </Link>
          <button
            onClick={() => closeLink(false)}
            type="button"
            className="bg-white text-orange-400 shadow-lg font-bold py-2 px-4 rounded-full hover:bg-orange-700"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoLink;
