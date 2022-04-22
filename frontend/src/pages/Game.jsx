import React, { useEffect, useState } from "react";

function Game() {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (time < 59) {
        setTime(time + 1);
      } else {
        setTime(0);
        setMinutes(minutes + 1);
      }
    }, 1000);
  }, [time]);
  return (
    <div className="flex flex-col">
      <h1 className="self-center mt-4 font-bold text-xl">
        {minutes}m {time}s
      </h1>
    </div>
  );
}

export default Game;
