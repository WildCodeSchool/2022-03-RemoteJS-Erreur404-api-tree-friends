import { createContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [moviesId, setMoviesId] = useState([]);
  const handleMoviesIdChange = (temporaireIds) => {
    setMoviesId(temporaireIds);
  };

  return (
    <MovieContext.Provider value={{ moviesId, handleMoviesIdChange }}>
      {children}
    </MovieContext.Provider>
  );
}
const ExportContext = {
  MovieContext,
  MovieProvider,
};
export default ExportContext;
