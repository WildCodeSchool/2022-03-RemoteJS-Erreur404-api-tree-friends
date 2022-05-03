import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaQuestion } from "react-icons/fa";

import Position from "../components/Position";
import Carousel from "../components/Carousel";
import CarouselElement from "../components/CarouselElement";
import Rules from "../components/Rules";
import ExportContext from "../contexts/MovieContext";

import fightClub from "../data/fightClub";
import logo from "../assets/alt-logo.png";
import help from "../assets/help-button.png";

function Game() {
  const { moviesId } = useContext(ExportContext.MovieContext);
  const [position, setPosition] = useState(fightClub);
  const [destination, setDestination] = useState(fightClub);
  const [carousel, setCarousel] = useState(false);

  const switchCarousel = (id) => {
    if (position.title) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=fr`
        )
        .then((res) => {
          setCarousel(res.data);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=fr`
        )
        .then((res) => {
          setCarousel(res.data);
        });
    }
  };

  const switchPosition = (id) => {
    if (position.title) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=fr`
        )
        .then((res) => {
          setPosition(res.data);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${id}?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=fr`
        )
        .then((res) => {
          setPosition(res.data);
        });
    }
    switchCarousel(position.id);
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

  useEffect(() => {
    switchPosition(moviesId[0]);
    createDestination(moviesId[1]);
  }, []);

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

  const [openRules, setOpenRules] = useState(false);

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="self-center mt-4 font-bold text-xl">
          {minutes}m {time}s
        </h1>
        <Position place={position} />
        <div
          style={{
            maxWidth: 350,
            maxHeight: 200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {carousel ? (
            <Carousel>
              {carousel.cast.slice(0, 10).map((e) => (
                <CarouselElement element={e} key={e.id} />
              ))}
            </Carousel>
          ) : (
            <div />
          )}
        </div>
        <div className="m-12 mt-0 mb-6 h-40">
          <Position place={destination} />
        </div>
      </div>
      <div className="flex justify-between">
        <img className="m-2 w-14 aspect-square" src={logo} alt="logo" />
        <button
          type="button"
          onClick={() => setOpenRules(true)}
          className="w-12 h-12 bg-gray-50 text-orange-400 font-bold py-2 px-3.5 mx-2 mt-3 rounded-full shadow-inner"
        >
          <FaQuestion className="w-5 h-5 shadow-black" />
        </button>
        {openRules && <Rules closeRules={setOpenRules} />}
      </div>
    </div>
  );
}

export default Game;
