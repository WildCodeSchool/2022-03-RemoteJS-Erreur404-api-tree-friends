import React, { useEffect, useState } from "react";

function Chrono() {
  const [timeScore, setTimeScore] = useState(0);
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
      setTimeScore(timeScore + 1);
    }, 1000);
  }, [seconds]);

  return (
    <h1 className="self-center mt-4 font-bold text-xl">
      {minutes}m {seconds}s
    </h1>
  );
}

export default Chrono;
