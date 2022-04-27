import React, { useEffect, useState } from "react";

import Position from "../components/Position";
import Carousel from "../components/Carousel";
import CarouselElement from "../components/CarouselElement";

import fightClub from "../data/fightClub";
import harryPotter from "../data/harryPotter";
import fightClubCast from "../data/fightClubCast";
import logo from "../assets/alt-logo.png";
import help from "../assets/help-button.png";

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
    <div>
      <div className="flex flex-col">
        <h1 className="self-center mt-4 font-bold text-xl">
          {minutes}m {time}s
        </h1>
        <Position place={fightClub} />
        <div
          style={{
            maxWidth: 350,
            maxHeight: 200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel>
            {fightClubCast.cast.map((e) => (
              <CarouselElement element={e} key={e.id} />
            ))}
          </Carousel>
        </div>
        <div className="m-12 mt-0 mb-6 h-40">
          <Position place={harryPotter} />
        </div>
      </div>
      <div className="flex justify-between">
        <img className="m-2 w-14 aspect-square" src={logo} alt="logo" />
        <img className="m-2 w-14 aspect-square" src={help} alt="help" />
      </div>
    </div>
  );
}

export default Game;
