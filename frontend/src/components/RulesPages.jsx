import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
// import "./Rules.css";

SwiperCore.use([Navigation, Pagination]);

function RulesPages() {
  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          laudantium recusa lor
        </p>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default RulesPages;
