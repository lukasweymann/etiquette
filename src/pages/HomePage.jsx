import React, { useState } from "react";
import NavLinks from "../components/NavLinks";
import CountrySelect from "../components/CountrySelect";
import "./HomePage.css";
import Logo from "../images/etiquette-logo-white.png";
import Footer from "../components/Footer.js";
import USerButtons from "../components/UserButtons";
import NavBarMobile from "../components/NavBarMobile";
import WhatsEtiquette from "../components/WhatsEtiquette";

export default function HomePage() {
  return (
    <div>
      <div className="homepage">
        <div className="app-bar">
          <NavBarMobile />
          <NavLinks />
          <USerButtons />
        </div>
        <div className="homepage-container">
          <img src={Logo} className="etiquette-logo" alt="company's logo" />
          <CountrySelect />
        </div>
      </div>
      <WhatsEtiquette />

      <Footer />
    </div>
  );
}
