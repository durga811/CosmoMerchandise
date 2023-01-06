import React from "react";
import Image from "next/dist/client/image";
// import handArt from "../../assets/images/Rectangle.png";
function UpperSection() {
  return (
    <>
      <div className="md-0 w-full min-h-screen inline-flex mt-[35px] ">
        <div>
          <div className=" mx-1 text-white sm:ml-[200px] mt-[120px] w-[400px]">
            <div className=" text-[20px] md:text-[30px] font-[500]">FILM & MUSIC SOCIETY</div>
            <div className="text-[40px] md:ext-[48px] font-[600] mt-[20px] mb-[20px]">
              COSMOPOLITAN
            </div>
            <div className="sm:font-[500]">
              Culture is what motivates and retains talented people. Here we
              are, just 30 days away from the much-awaited multi-ethnic fest of
              NITR. Hold your breath, amp up your excitement, and get ready for
              the four days of action-packed performances that will astound you
              with a unique mix of various cultures and art styles. So brace
              yourselves and hang tight as our cultural voyage starts from Jan
              19th to 22nd.
            </div>
            <div className="rounded-[0px]">
              <button className="bg-[#D9D9D9] px-[2rem] py-[0.5rem] text-black text-justify rounded-3xl mt-[40px] font-normal">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="ml-[20%]">
          <img
          className="hidden md:inline-flex"
            src="https://res.cloudinary.com/dqjqy453u/image/upload/v1672938285/Rectangle_mx5b88.png"
            alt="handArt"
          />
        </div>
      </div>
    </>
  );
}
export default UpperSection;

//https://ibb.co/Y3QHvVC-bgImage
// https://ibb.co/3hQpKzh- handimage
