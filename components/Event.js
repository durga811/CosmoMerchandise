import React from "react";
import EventPages from "./EventPages";


function Event() {
  const image = {
    music: "https://i.ibb.co/zxMHMyh/music.png",
    // dance:"https://i.ibb.co/hVJyYnn/dance-Gray.png",
    drama: "https://i.ibb.co/PMsgZXH/drama.png",
    dance: "https://i.ibb.co/jz1z2v6/dance.png",
    logo: "https://i.ibb.co/YRmWqPB/cosmo-logo-1.png"
  };
  const transition = {
    transition: "all 1s ease-in-out",
  }
  return (
    <>
      <div className="Event relative w-screen h-screen overflow-hidden flex justify-center">
        <div className="opacity-0 animate-[logo_4s_1_1s_linear_forwards] w-[260px] h-[57px] absolute left-[72px] top-[50px] z-[15]">
          <div className="logo-wrapper bg-white p-1 flex item-center text-[1.53em] font-bold tracking-widest h-[50px] gap-1 ">
            <div className="bg-[#153c37]">
              <img src={image.logo} alt="" className="w-full h-full" />
            </div>
            <h1 className="text-black">COSMOPOLITAN</h1>
          </div>
          <h3 className="tracking-[0.3rem] text-[13px] font-[600] text-white mt-[0.1rem] text-center">THE MULTI ETHNIC FEST</h3>
        </div>
        <div className="letter position absolute top-[430px] z-[15] text-white text-[380px] inline h-fit font-[600] leading-[341px] transition-all animate-[textAnimation_3s_1_1s_ease-in_forwards]">
          <h1 className="pointer-events-none">EVENTS</h1>
        </div>
        <div className="main absolute w-screen flex justify-center items-center h-screen flex-1">

          <div className="peer absolute group" style={transition}>
            <EventPages color='#153c37' img={image.dance} content="Dance" />
          </div>
          <div className="left-[33.33%] hover:left-[32.33%] peer-hover:left-[35.33%] peer absolute" style={transition}>
            <EventPages color='#A34744' img={image.music} content="Music" />
          </div>
          <div className="left-[66.66%] absolute hover:left-[64.66%] peer-hover:left-[67.66%]" style={transition}>
            <EventPages color="#EDAD38" img={image.drama} content="Drama" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;

