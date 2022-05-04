import React from "react";

function Rules({ closeRules }) {
  return (
    // rulesBackground
    <div className="absolute inset-0 z-20 w-screen h-screen bg-gray-900/75 flex justify-center items-center">
      {/* rulesContainer */}
      <div className="w-96 h-96 flex flex-col justify-between bg-white rounded-lg p-5">
        <div className="flex justify-self-start self-end">
          <button
            onClick={() => closeRules(false)}
            type="button"
            className="text-orange-400 text-4xl font-bold py-2 px-4 drop-shadow-md"
          >
            &times;
          </button>
        </div>
        {/* rulesHeader */}
        <div className="text-cyan-700 text-center text-2xl font-bold drop-shadow-md">
          <h3>COMMENT JOUER</h3>
        </div>
        {/* rulesBody */}
        <div className="text-center">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            laudantium recusa lor
          </p>
        </div>
        {/* rulesFooter */}
        <div className="flex justify-center">
          <button
            onClick={() => closeRules(false)}
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Compris !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
