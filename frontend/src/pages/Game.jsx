import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";

import Position from "../components/Position";
import Carousel from "../components/Carousel";
import CarouselElement from "../components/CarouselElement";
import Rules from "../components/Rules";
import LogoLink from "../components/LogoLink";
import Chrono from "../components/Chrono";
import StartButton from "../components/StartButton";

import ExportContext from "../contexts/MovieContext";

import logo from "../assets/alt-logo.png";

function Game() {
  const { moviesId } = useContext(ExportContext.MovieContext);
  const { handleClicChange } = useContext(ExportContext.MovieContext);
  const [position, setPosition] = useState("");
  const [destination, setDestination] = useState("");
  const [carousel, setCarousel] = useState("");
  const [openRules, setOpenRules] = useState(false);
  const [homeLink, setHomeLink] = useState(false);
  const [type, setType] = useState("movie");
  const [carouselType, setCarouselType] = useState("credits");

  window.onbeforeunload = () => {
    return "I don't really know how this works yet";
  };

  const switchCarousel = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/${carouselType}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setCarousel(res.data);
      });
  };

  const switchPosition = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setPosition(res.data);
      });
  };

  const createDestination = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setDestination(res.data);
      });
  };

  const changeData = (id) => {
    switchPosition(id);
  };

  useEffect(() => {
    changeData(moviesId[0]);
    createDestination(moviesId[1]);
  }, []);

  useEffect(() => {
    switchCarousel(position.id);
    setTimeout(() => {
      if (type === "movie") {
        setType("person");
        setCarouselType("movie_credits");
      } else {
        setType("movie");
        setCarouselType("credits");
      }
      handleClicChange();
    }, 200);
  }, [position.id]);

  useEffect(() => {}, [carousel]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col">
        {position !== "" && <Position items={position} />}
        <div
          style={{
            maxWidth: 350,
            maxHeight: 200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {carousel !== "" && (
            <Carousel>
              {carousel.cast
                .sort((a, b) => b.popularity - a.popularity)
                .slice(0, 30)
                .map((e) => (
                  <CarouselElement
                    element={e}
                    key={e.id}
                    changeData={changeData}
                  />
                ))}
            </Carousel>
          )}
          {position.id === destination.id && (
            <StartButton content="Results" link="/results" />
          )}
        </div>
        <div className="m-12 mt-0 mb-6 h-40">
          <Position items={destination} />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={() => setHomeLink(true)}
          className="m-2 w-14 aspect-square"
        >
          <img src={logo} alt="logo" />
        </button>
        {homeLink && <LogoLink closeLink={setHomeLink} />}
        <Chrono />
        <button
          type="button"
          onClick={() => setOpenRules(true)}
          className="w-12 h-12 bg-gray-50 text-orange-400 font-bold py-2 px-3.5 mx-2 mt-3 rounded-full shadow-inner"
        >
          <FaQuestion className="w-5 h-5 shadow-black" />
        </button>
        {openRules && <Rules closeRules={setOpenRules} />}
      </div>
    </motion.div>
  );
}

export default Game;
