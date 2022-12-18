import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <div className="bottom-content">
        <div className="content-left">
            <div className="subcontent">
               <h2>ABOUT</h2>
               <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
        <div className="content-middle">
            <div className="subcontent">
                <h2>QUICK LINES</h2>
                <ul>
               <li><h3>About Us</h3></li>
               <li><h3>Contact Us</h3></li>
               <li><h3>Events</h3></li>
               <li><h3>Register</h3></li>
                </ul>
            </div>
            </div>
            <div className="content-right">
            <div className="subcontent">
                <h2>SUPPORT</h2>
                <ul>
                <li><h3>Privacy Policy</h3></li>
                <li><h3>Terms to Service</h3></li>
                <li><h3>Legality</h3></li>
                </ul>
            </div>
        </div>
    </div>
    );
}



export default Footer;