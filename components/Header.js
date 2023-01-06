import React from "react";
import Image from "next/dist/client/image";
// import cosmo_logo from "../assets/Cosmo_logo.png";

function Header() {
  return (
    <div className="bg-[#622B3A] w-full h-[124px] p-[20px] flex ">
      <div className="cosmoIntro ml-[82px]">
        <div className="bg-white flex p-1 w-[350px] h-[50px]  ">
          <div className="bg-[#622B3A] w-[30px] h-[43px] p-1 mr-[9px]">
           <img src="https://res.cloudinary.com/dqjqy453u/image/upload/v1672938671/cosmo_logo_1_gdwyqo.png"/>
          </div>
          <div className="font-bold text-black justify-center items-center text-3xl tracking-[0.3rem]">
            COSMOPOLITAN
          </div>
        </div>
        <div className="text-white tracking-[0.54rem] font-semibold">
          THE MULTI ETHNIC FEST
        </div>
      </div>
      <div className="flex text-white ml-auto font-[500] leading-[30px] text-[24px] items-center">
        <div className="mr-[50px] cursor-pointer">GALLERY</div>
        <div className="mr-[50px] cursor-pointer">EVENTS</div>
        <div className="mr-[50px] cursor-pointer">TEAMS</div>
        <div className="mr-[50px] cursor-pointer">MERCH</div>
        <div className="mr-[50px] cursor-pointer">ABOUT US</div>
      </div>
    </div>
  );
}

export default Header;

