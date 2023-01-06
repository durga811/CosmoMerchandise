import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [nav, setNav] = useState(false);

  const toggelMenu = () => {
    setShowMenu(!showMenu);
  };
  // const button = document.querySelector('#menu-button');
  // const menu = document.querySelector('#menu');


  // button.addEventListener('click', () => {
  //   menu.classList.toggle('hidden');
  // });

  return (

    <section>
      <div className="fixed w-full h-28 bg-[#1D2F41] flex items-center justify-items-start  sm:space-x-48">
        <div className=" md:px-28 px-2  sm:px-14 mt-4 ">
          <Logo />
        </div>

        <div className="text-white hidden md:flex space-x-16 font-bold text-lg font-Montserrat ">
          <button className="hover:scale-105 duration-150 focus:border-b-4">
            GALLERY
          </button>
          <button className="hover:scale-105 duration-150 focus:border-b-4">
            EVENTS
          </button>
          <button className="hover:scale-105 duration-150 focus:border-b-4">
            TEAMS
          </button>
          <button className="hover:scale-105 duration-150 focus:border-b-4">
            MERCH
          </button>
          <button className="hover:border-b-4 focus:border-b-4">
            ABOUT US
          </button>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-[#D9D9D9] pr-4 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col text-[#D9D9D9] space-y-16 font-bold text-2xl justify-center items-center absolute w-full h-screen left-0 top-0  bg-gradient-to-b from-[#1D2F41] to-[#0F4D67]">
            <li>
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                GALLERY
              </button>
            </li>
            <li>
              {" "}
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                EVENTS
              </button>
            </li>
            <li>
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                TEAMS
              </button>
            </li>
            <li>
              <button className="hover:scale-105 duration-150 focus:border-b-4">
                MERCH
              </button>
            </li>
            <li>
              <button className="hover:border-b-4 focus:border-b-4">
                ABOUT US
              </button>
            </li>
          </ul>
        )}
      </div>
    </section>




  );
};

export default Navbar;

