// library
import React from "react";
import Image from "next/dist/client/image";

// Widgets
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

// Components
import UpperSection from "../components/homePage/UpperSection";
import Carousel from "../components/homePage/Carousel";
import Highlights from "../components/homePage/Highlights";
import Trending from "../components/homePage/Trending";
import Events from "../components/homePage/Events";

// ImageComponents
import bgImage from "../assets/images/background.png";

// Others
import Homesection from "./homeSection";

export default function Home() {
  return (
    <>
      <div
        className=" bg-[#391F26] bg-cover "
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div>
          <Header />
        </div>
        <div className="body">
          <UpperSection />
          <div className="flex justify-center items-center">
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
