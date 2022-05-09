import { createContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [moviesId, setMoviesId] = useState([]);
  const [username, setUsername] = useState("");
  const [chrono, setChrono] = useState("");
  const [clic, setClic] = useState(-1);
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
    setClic(clic + 1);
  };

  return (
    <MovieContext.Provider
      value={{
        moviesId,
        handleMoviesIdChange,
        username,
        handleUserChange,
        chrono,
        handleChronoChange,
        clic,
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
