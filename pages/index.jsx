// library
import React from "react";

// Widgets
import Header from "../components/Header";
import Button from "../components/Button";

// Components
import UpperSection from "../components/UpperSection";
import Carousel from "../components/Carousel";
import Highlights from "../components/homepage/Highlights";
import Trending from "../components/homepage/Trending";
import Events from "../components/Event";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div
        // className="bg-[#391F26]  w-full bg-cover"
        className='bg-[url("/Homepage.png")]  bg-center bg-cover overflow-hidden scrollbar-hide  w-full pt-24'

        alt="picture"
      >
        <div className="scrollbar-hide">
          <UpperSection />
          <div className="flex justify-center items-center text-black">
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
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
}
