import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function Trending() {
  return (
    <div className="App">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides 
        style={{ height: "500px" }}
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-2.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-3.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-4.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-5.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-6.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-7.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-8.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-9.jpg)"
          }}
        >
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-10.jpg)"
          }}
        >
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
