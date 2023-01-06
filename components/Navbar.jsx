import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggelMenu = () => {
    setShowMenu(!showMenu);
  };
  // const button = document.querySelector('#menu-button');
  // const menu = document.querySelector('#menu');


  // button.addEventListener('click', () => {
  //   menu.classList.toggle('hidden');
  // });

  return (

    <header className="py-2">
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-transparent
          
        "
      >
        <div>
          <Link href="#">
            <div className="opacity-0 animate-[logo_4s_1_1s_linear_forwards] z-[15] my-auto">
              <div className="logo-wrapper bg-white p-1 flex item-center text-[1.53em] font-bold tracking-widest h-[50px] gap-1 ">
                <div className="bg-[#153c37]">
                  <img src="https://i.ibb.co/YRmWqPB/cosmo-logo-1.png" alt="" className="w-full h-full" />
                </div>
                <h1 className="text-black my-auto">COSMOPOLITAN</h1>
              </div>
              <h3 className="tracking-[0.3rem] text-[13px] font-[600] text-white mt-[0.1rem] text-center">THE MULTI ETHNIC FEST</h3>
            </div>
          </Link>
        </div>
        <button onClick={toggelMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className={`${showMenu && "hidden"} w-full md:flex md:items-center md:w-auto`} id="menu">
          <ul
            className="
              pt-4
              text-2xl text-white
              md:flex
              md:justify-between 
              space-x-10
              md:pt-0"
            
          >
            <li>
              <Link className="md:p-4 py-2 block " href="#"
              >Gallery
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block " href="/events"
              >Events</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block " href="/"
              >Teams</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block " href="/merch"
              >Merch
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block " href="#"
              >About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>




  );
};

export default Navbar;

