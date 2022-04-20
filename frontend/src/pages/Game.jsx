import React from "react";
import Position from "../components/Position";
import fightClub from "../data/fightClub";
import fightClubCast from "../data/fightClubCast";
import Carousel from "../components/Carousel";
import CarouselElement from "../components/CarouselElement";

function Game() {

  return (
    <div className="flex flex-col">
      <h1 className="self-center mt-4 font-bold text-xl">0m 12s</h1>
      <Position place={fightClub}/>
      <div style={{ maxWidth: 350, maxHeight: 200, marginLeft: 'auto', marginRight: 'auto'}}>
        <Carousel>
          {fightClubCast.cast.map(e => <CarouselElement element={e} />)}
        </Carousel>
      </div>

    </div>
  );
}

export default Game;
