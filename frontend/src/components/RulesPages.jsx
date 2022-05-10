import React from "react";

function RulesPages() {
  return <div>RulesPages</div>;
}

export default RulesPages;
/* eslint-disable import/no-unresolved */

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import "swiper/css/bundle";

// SwiperCore.use([Navigation, Pagination]);

// function RulesPages() {
//   const slides = [
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rationelaudantium recusa lor",
//     "test deuxieme text",
//     "test troisieme text",
//   ];
//   for (let i = 0; i < 3; i += 1) {
//     slides.push(
//       <SwiperSlide key={`slide-${i}`} tag="li">
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
//           laudantium recusa lor
//         </p>
//       </SwiperSlide>
//     );
//   }

//   return (
//     <div>
//       <Swiper
//         id="main"
//         tag="section"
//         wrapperTag="ul"
//         navigation
//         pagination
//         spaceBetween={0}
//         slidesPerView={1}
//       >
//         <SwiperSlide key={`slide-${i}`} tag="li">
//           {}
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
//             laudantium recusa lor
//           </p>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

/// /////////////////////////////////////////////////////////////////////
// function RulesPages() {
//   const slidesContent = [
//     {
//       id: 1,
//       content:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rationelaudantium recusa lor",
//       id: 2,
//       content:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rationelaudantium recusa lor",
//       id: 3,
//       content:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rationelaudantium recusa lor",
//     },
//   ];

//   return (
//     <div>
//       <Swiper
//         id="main"
//         tag="section"
//         wrapperTag="div"
//         spaceBetween={0}
//         slidesPerView={1}
//         navigation
//         pagination
//       >
//         {slidesContent.map((slide) => (
//           <SwiperSlide tag="li">
//             {(isActive) => (
//               <p className={`${isActive ? "" : "hidden"}`}>{slide}</p>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
