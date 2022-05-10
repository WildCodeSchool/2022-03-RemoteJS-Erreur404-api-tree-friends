import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";

import Position from "../components/Position";
import CarouselElement from "../components/CarouselElement";
import Rules from "../components/Rules";
import LogoLink from "../components/LogoLink";
import Chrono from "../components/Chrono";
import StartButton from "../components/StartButton";
import HistoricElement from "../components/HistoricElement";

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
  const [historic] = useState([]);
  const dots = true;

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
        historic.push(res.data);
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
      <div className="flex flex-col max-h-screen">
        <div className="flex justify-between shadow-md">
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
            <FaQuestion className="w-5 h-5 drop-shadow-md" />
          </button>
          {openRules && <Rules closeRules={setOpenRules} />}
        </div>
        {position !== "" && <Position items={position} />}
        <div className="m-2">
          {carousel !== "" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg text-cyan-700 font-semibold truncate">
                {carouselType === "credits"
                  ? `Movies ${position.name} played in :`
                  : `Actors from ${position.title} :`}
              </h3>
              <Slider
                speed={200}
                slidesToShow={4}
                slidesToScroll={4}
                dots={dots}
                infinite={dots}
              >
                {carousel.cast
                  .sort((a, b) => b.popularity - a.popularity)
                  .slice(0, 25)
                  .filter((e) => e.poster_path || e.profile_path)
                  .map((e) => (
                    <CarouselElement
                      element={e}
                      key={e.id}
                      changeData={changeData}
                    />
                  ))}
              </Slider>
            </motion.div>
          )}
          {position.id === destination.id && (
            <StartButton content="Results" link="/results" />
          )}
        </div>
        <div id="navigation" className="flex justify-between m-5">
          <button
            type="button"
            className="text-white font-semibold text-lg bg-orange-500 p-2 rounded-lg shadow-md"
            onClick={() => {
              if (historic.length - 2 > 0) {
                switchPosition(historic[historic.length - 2].id);
                historic.pop();
                historic.pop();
                handleClicChange();
              }
            }}
          >
            Annuler
          </button>
          <button
            id="trigger"
            type="button"
            className="text-white font font-semibold text-lg bg-orange-500 p-2 rounded-lg shadow-md"
            onClick={() => {
              setTimeout(() => {
                if (type === "person") {
                  setType("movie");
                  setCarouselType("credits");
                }
                handleClicChange();
                setPosition(historic[0]);
              }, 200);
            }}
          >
            Recommencer
          </button>
        </div>
        <div
          id="historic"
          className="w-full flex justify-between h-40 border-2 bottom-0"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-cyan-700 font-semibold max-h-12 -mb-3 p-0">
              Start
            </h2>
            {carousel && <HistoricElement items={historic[0]} />}
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl text-cyan-700 font-semibold max-h-12 -mb-3 p-0">
              End
            </h2>
            {carousel && <HistoricElement items={destination} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Game;
