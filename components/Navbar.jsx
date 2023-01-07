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
  // const a = document.querySelector('#menu-a');
  // const menu = document.querySelector('#menu');


  // a.addEventListener('click', () => {
  //   menu.classList.toggle('hidden');
  // });

  return (

    <section className="">
      <div className="fixed w-full h-24 bg-transparent bg-black bg-opacity-40 flex items-center justify-between  sm:space-x-48 px-2 md:px-8 lg:px-16">
        <div className="mt-4 ">
          <Logo />
        </div>

        <div className="text-white hidden md:flex space-x-16 font-bold text-lg mx-auto md:items-center md:justify-start">
          <Link href="/gallery" className="hover:scale-105 duration-150 cursor-pointer focus:border-b-4">
            GALLERY
          </Link>
          <Link href="/events" className="hover:scale-105 duration-150 cursor-pointer focus:border-b-4">
            EVENTS
          </Link>
          <Link href="/ourteam" className="hover:scale-105 duration-150 cursor-pointer focus:border-b-4">
            TEAMS
          </Link>
          <Link href="/merch" className="hover:scale-105 duration-150 cursor-pointer focus:border-b-4">
            MERCH
          </Link>
          <Link href="/aboutus" className="hover:scale-105 duration-150  cursor-pointer focus:border-b-4">
            ABOUT US
          </Link>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-[#D9D9D9] pr-4 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col text-[#D9D9D9] space-y-16 font-bold text-2xl justify-center items-center absolute w-full h-screen left-0 top-0 bg-[#391F26]">
            <li>
              <Link href="/gallery" className="hover:scale-105 duration-150 focus:border-b-4">
                GALLERY
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/events" className="hover:scale-105 duration-150 focus:border-b-4">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/ourteam" className="hover:scale-105 duration-150 focus:border-b-4">
                TEAMS
              </Link>
            </li>
            <li>
              <Link href="/merch" className="hover:scale-105 duration-150 focus:border-b-4">
                MERCH
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:border-b-4 focus:border-b-4">
                ABOUT US
              </Link>
            </li>
          </ul>
        )}
      </div>
    </section>




  );
};

export default Navbar;

