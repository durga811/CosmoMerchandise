import React from 'react';
import './Highlight.css';
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"

function Highlight(){
    
    return ( 
        <div >
        <FaArrowAltCircleLeft   className="left-arrow" />
        <FaArrowAltCircleRight   className="right-arrow"/>
        <section className="slider">
            <img className='Himage' id='Himg1' src='https://images.unsplash.com/photo-1667386113858-1c91c305345f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'  />
            <img className='Himage' id='Himg2' src='https://media.istockphoto.com/photos/horseshoe-bend-picture-id519715194?k=20&m=519715194&s=170667a&w=0&h=G-GhDA-Y5QWJiBVU8aFRu6nj6Whz2ofbTQdr5-W-SMs=' />
            <img className='Himage' id='Himg3' src='https://images.unsplash.com/photo-1594528924944-454cea6f6a6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </section>
        <div className='circle'>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
        </div>
        );
}

export default Highlight;
