// library
import React from "react";

import Button from "../components/Button";

// Components
import UpperSection from "../components/UpperSection";
import Carousel from "../components/Carousel";
import Highlights from "../components/homepage/Highlights";
import Events from "../components/Event";
import Footer from "../components/Footer";
import TrendingComp from "../components/TrendingComp";

export default function Home() {
  return (
    <>
      <div

        // className="bg-[#391F26]  w-full bg-cover"
        className='bg-[url("https://i.ibb.co/rcNjJjT/Homepage.png")]  bg-center bg-cover overflow-hidden scrollbar-hide  w-full pt-16'

        alt="picture"
      >
        <div className="scrollbar-hide">
          <UpperSection />
          <div className="flex space-x-20 justify-center items-center text-black">
            <Button text={"DRAMA"} />
            <Button text={"DANCE"} />
            <Button text={"MUSIC"} />
          </div>
          <div className=" flex justify-center items-center w-full">
            <Carousel />
          </div>
          <div className="flex justify-center items-center text-[#DCDCDC] font-[600] text-[48px] leading-[50px]">
            HIGHLIGHTS
          </div>
          <div className=" flex justify-center items-center">
            <Highlights />
          </div>
          <div className="flex justify-center items-center text-[#DCDCDC] font-[600] text-[48px] leading-[50px]">
            TRENDING VIDEOS
          </div>
          <div className=" flex justify-center items-center">
            <TrendingComp />
          </div>
          <Events />
        </div>
      </div>
    </>
  );
}
