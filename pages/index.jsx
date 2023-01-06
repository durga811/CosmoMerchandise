// library
import React from "react";

// Widgets
import Button from "../components/Button";

// Components
import UpperSection from "../components/UpperSection";
import Carousel from "../components/Carousel";
import Trending from "../components/homepage/Trending";
import Highlights from "../components/homepage/Highlights";
import Events from "../components/Event";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div
        className='bg-[url("https://res.cloudinary.com/dqjqy453u/image/upload/v1673010215/Homepage_ncxxsp.png")] bg-cover overflow-hidden bg-[#391F26]/80 scrollbar-hide  w-full bg-cover'
        alt="picture"
      >
        <div className="">
          <UpperSection />
          <div className=" md:flex justify-center items-center text-black">
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
