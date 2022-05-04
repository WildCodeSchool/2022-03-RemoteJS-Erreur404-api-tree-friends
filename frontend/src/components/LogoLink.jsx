import React from "react";
import { Link } from "react-router-dom";

function LogoLink({ closeLink }) {
  return (
    // logoLinkBackground
    <div className="absolute inset-0 z-20 w-screen h-screen bg-gray-500/75 flex justify-center items-center fixed">
      {/* logoLinkContainer */}
      <div className="w-96 h-96 flex flex-col bg-white shadow-md rounded-lg p-12">
        <div className=" flex justify-end" />
        {/* logoLinkHeader */}
        <div className="text-center">
          <h3>Are you sure you want to go back to menu ?</h3>
        </div>
        {/* logoLinkFooter */}
        <div className="flex justify-around mt-4">
          <Link to="/">
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Yes, I am sure
            </button>
          </Link>
          <button
            onClick={() => closeLink(false)}
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
          >
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoLink;
