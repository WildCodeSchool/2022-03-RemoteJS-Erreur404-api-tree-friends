import React, { useEffect, useState, useContext } from "react";

import ExportContext from "../contexts/MovieContext";

function Chrono() {
  const { handleChronoChange } = useContext(ExportContext.MovieContext);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (seconds < 59) {
        setSeconds(seconds + 1);
      } else {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
      handleChronoChange(`${minutes}m${seconds}s`);
    }, 1000);
  }, [seconds]);

  return (
    <h1 className="self-center mt-4 font-bold text-xl">
      {minutes}m {seconds}s
    </h1>
  );
}

export default Chrono;
