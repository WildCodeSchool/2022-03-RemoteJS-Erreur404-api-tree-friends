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

// export default Game;
// import React from 'react'
// import { useState, useEffect } from 'react';

// const Timer = (props:any) => {
//     const {initialMinute = 0,initialSeconds = 0} = props;
//     const [ minutes, setMinutes ] = useState(initialMinute);
//     const [seconds, setSeconds ] =  useState(initialSeconds);
//     useEffect(()=>{
//     let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             }
//         }, 1000)
//         return ()=> {
//             clearInterval(myInterval);
//           };
//     });

//     return (
//         <div>
//         { minutes === 0 && seconds === 0
//             ? null
//             : <h1> {minutes}:{seconds < 10 ?  0${seconds} : seconds}</h1>
//         }
//         </div>
//     )
// }

// export default Timer;
