// library
import React from "react";

// Widgets
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

// Components
import UpperSection from "../components/UpperSection";
import Carousel from "../components/Carousel";
import Trending from "../components/homepage/Trending";
import Highlights from "../components/homepage/Highlights";
import Events from "../components/Event";

export default function Home() {
  return (
    <>
      <div
        className="bg-[#391F26] h-[full] w-[100%]"
        style={{
          backgroundImage: `url(${`https://res.cloudinary.com/dqjqy453u/image/upload/v1672938212/Mask_group_gs88zh.png`})`,
        }}
        alt="picture"
      >
        <div>
          <Header />
        </div>
        <div className="body">
          <UpperSection />
          <div className="flex justify-center items-center text-black">
            <Button text={"DRAMA"} />
            <Button text={"DANCE"} />
            <Button text={"MUSIC"} />
          </div>
          <div className="m-[40px] flex justify-center items-center">
            <Carousel />
          </div>
          <div className="flex justify-center items-center text-[#DCDCDC] font-[600] text-[48px] leading-[50px]">
            HIGHLIGHTS
          </div>
          <div className="m-[40px] flex justify-center items-center">
            <Highlights />
          </div>
          <div className="flex justify-center items-center text-[#DCDCDC] font-[600] text-[48px] leading-[50px]">
            TRENDING VIDEOS
          </div>
          <div className="m-[40px] flex justify-center items-center">
            <Trending />
          </div>
          <div className="">
            <Events />
          </div>
          <div className="grid justify-center ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
