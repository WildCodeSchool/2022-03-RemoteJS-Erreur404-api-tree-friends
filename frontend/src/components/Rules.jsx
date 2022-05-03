import React from "react";

function Rules({ closeRules }) {
  return (
    // rulesBackground
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center fixed">
      {/* rulesContainer */}
      <div className="w-96 h-96 flex flex-col bg-white shadow-md rounded-lg p-12">
        <div className=" flex justify-end">
          <button
            onClick={() => closeRules(false)}
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          >
            &times;
          </button>
        </div>
        {/* rulesHeader */}
        <div className="text-center">
          <h3>How to play</h3>
        </div>
        {/* rulesBody */}
        <div className="text-center">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            laudantium recusa
          </p>
        </div>
        {/* rulesFooter */}
        <div className="flex justify-center">
          <button
            onClick={() => closeRules(false)}
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
