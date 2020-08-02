import React, { useState } from "react";
import NavLinks from "../components/NavLinks";
import CountrySelect from "../components/CountrySelect";
import "./HomePage.css";
import Logo from "../images/etiquette-logo-white.png";
import Footer from "../components/Footer.js";
import PlaneWindow from "../images/plane-window.jpg";
import USerButtons from '../components/UserButtons';
import NavBarMobile from "../components/NavBarMobile";


export default function HomePage() {

  return (
    <div>
    <div className="homepage">
    <div className="app-bar">
    <NavBarMobile/>
      <NavLinks />
      <USerButtons/>
      </div>
      <div className="homepage-container">
      <img src={Logo} className="etiquette-logo" alt="company's logo" />
      <CountrySelect/>
      </div>
      
    </div>
    <div className="homepage-whats-etiquette">
    <div className="homepage-description">
    <h2>WHAT'S ETIQUETTE?</h2>
    <p className="homepage-description-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu tortor a mi congue iaculis. Maecenas quam quam, porttitor vel est a, luctus mattis leo. Pellentesque eu venenatis elit, in volutpat mi. Nam tincidunt non magna eu mollis. Vivamus ornare, nunc id aliquam gravida, metus enim laoreet massa, fringilla tristique risus purus id massa.</p>
    </div>
    <img className="plane-window" src={PlaneWindow}/>
    </div>
    <Footer/>
    </div>
  );
}
