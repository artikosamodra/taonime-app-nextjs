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

const Slider = () => {
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
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://placehold.co/600x400/png"
            alt="...."
            width={400}
            height={400}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
