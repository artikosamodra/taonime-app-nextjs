"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// import AnimeList from "../../AnimeList/AnimeList";

const Slider = ({ dataSlider }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {dataSlider.data.map((data) => {
          return (
            <SwiperSlide key={data.mal_id}>
              <Link href={`/${data.mal_id}`} className="cursor-pointer">
                <div className="">
                  <Image
                    src={data.entry[0].images.webp.image_url}
                    alt="..."
                    width={400}
                    height={400}
                    className="img-toplist"
                  />
                </div>
                <h3 className="font-bold lg:text-lg md:text-md text-sm p-3">
                  {data.title}
                </h3>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;

// {dataSlider.data.map((data) => (
//   <SwiperSlide key={data.mal_id}>
//     <Link href={`/${data.mal_id}`} className="cursor-pointer">
//       <div className="">
//         <Image
//           src={data.images.webp.image_url}
//           alt="..."
//           width={400}
//           height={400}
//           className="img-toplist"
//         />
//       </div>
//       <h3 className="font-bold lg:text-lg md:text-md text-sm p-3">
//         {data.title}
//       </h3>
//     </Link>
//   </SwiperSlide>
// ))}
