import React, { useContext } from "react";
import MovieExportContext from "../contexts/MovieContext";

function Input() {
  const { handleUserChange } = useContext(MovieExportContext.MovieContext);

  return (
    <div className="flex justify-center ">
      <input
        className="p-2 pl-8 w-full m-12 mt-0 rounded-md border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-inner "
        type="text"
        // name={Username}
        onChange={(e) => handleUserChange(e.target.value)}
        placeholder="Entrer votre nom"
      />
    </div>
  );
}
export default Input;
