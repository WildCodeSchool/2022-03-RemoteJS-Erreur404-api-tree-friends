import React from "react";
import Input from "../components/input";
import logo from "../assets/alt-logo.png";

function Home() {
  return (
    <div className="flex flex-col">
      <img className="w-6/12 aspect-square self-center" src={logo} alt="logo" />
      <h1 className="text-2xl leading-normal font-bold mb-12 m-14 ">
        <p className="text-orange-400 flex left">
          BIENVENUE SUR MOVIE WARS, UN JEU QUI VOUS INVITE A
        </p>
        <p className="text-cyan-700 flex left">
          CONNECTER DEUX FILMS ENTRE EUX.
        </p>
      </h1>
      <Input />
    </div>
  );
}

export default Home;
