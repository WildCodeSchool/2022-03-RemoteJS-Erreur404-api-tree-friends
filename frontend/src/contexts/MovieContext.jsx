import { createContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [moviesId, setMoviesId] = useState([]);
  const [Username, setUsername] = useState("");
  const [Chrono, setChrono] = useState("");
  const [Clic, setClic] = useState(-1);
  const handleMoviesIdChange = (temporaireIds) => {
    setMoviesId(temporaireIds);
  };
  const handleUserChange = (name) => {
    setUsername(name);
  };
  const handleChronoChange = (time) => {
    setChrono(time);
  };
  const handleClicChange = () => {
    setClic(Clic + 1);
  };

  return (
    <MovieContext.Provider
      value={{
        moviesId,
        handleMoviesIdChange,
        Username,
        handleUserChange,
        Chrono,
        handleChronoChange,
        Clic,
        handleClicChange,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
const ExportContext = {
  MovieContext,
  MovieProvider,
};
export default ExportContext;
