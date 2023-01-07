import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function View() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/durga811/image/upload/v1673127659/cosmo%20assets/shirt_front_ypo0uq.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/durga811/image/upload/v1673127661/cosmo%20assets/shirt_back_knpzkz.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
