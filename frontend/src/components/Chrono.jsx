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
    <div className="flex self-center text-white bg-cyan-800 p-2 rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold -m-1">0{minutes}</h1>
        <p className="text-xs">minutes</p>
      </div>
      <p className="text-xl -mt-1">:</p>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold -m-1">{seconds}</h1>
        <p className="text-xs p-0">secondes</p>
      </div>
    </div>
  );
}

export default Chrono;
