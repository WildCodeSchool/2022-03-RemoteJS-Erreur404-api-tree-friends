import React, { useEffect, useState } from "react";

function Game() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);
  return (
    <div className="flex flex-col">
      <h1 className="self-center mt-4 font-bold text-xl">{time} s</h1>
    </div>
  );
}
export default Game;
