import React from "react";
import { motion } from "framer-motion";

import Input from "../components/input";
import StartButton from "../components/StartButton";

import logo from "../assets/alt-logo.png";

function Home() {
  return (
    <div className="flex flex-col">
      <img
        className="w-auto max-h-48  aspect-square self-center"
        src={logo}
        alt="logo"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl leading-normal font-bold mb-12 m-14 ">
          <p className="text-orange-400 flex left">
            BIENVENUE SUR MOVIE WARS, UN JEU QUI VOUS INVITE A
          </p>
          <p className="text-cyan-700 flex left">
            CONNECTER DEUX FILMS ENTRE EUX.
          </p>
        </h1>
        <Input />
      </motion.div>
      <StartButton content="Start" link="/settings" />
    </div>
  );
}

export default Home;
