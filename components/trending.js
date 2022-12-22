import React from 'react';
import './trending.css';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Trending(){
    return(
        <div>
           <FaArrowAltCircleLeft   className="left" />
           <FaArrowAltCircleRight   className="right"/>
           <section className="slider2">
            <img className="Timage" id="Timg1" src="https://wallpaperaccess.com/full/2512452.jpg"  />
            <img className="Timage" id="Timg2" src="https://wallpaperaccess.com/full/2512452.jpg"  />
            <img className="Timage" id="Timg3" src="https://wallpaperaccess.com/full/2512452.jpg"  />
            <img className="Timage" id="Timg4" src="https://wallpaperaccess.com/full/2512452.jpg"  />
            <img className="Timage" id="Timg5" src="https://wallpaperaccess.com/full/2512452.jpg"  />
           </section>
           <div className='circle'>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
        </div>
    )

};


export default Trending;