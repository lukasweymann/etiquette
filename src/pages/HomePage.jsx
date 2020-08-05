import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import NavLinks from "../components/NavLinks";
import CountrySelect from "../components/CountrySelect";
import CuriousMapContainer from "../components/CuriousMapContainer";
import "./HomePage.css";
import Logo from "../images/etiquette-logo-white.png";
import Footer from "../components/Footer.js";
import USerButtons from "../components/UserButtons";
import NavBarMobile from "../components/NavBarMobile";
import WhatsEtiquette from "../components/WhatsEtiquette";
import WhatsPremium from "../components/WhatsPremium";
import LoggedInButtons from "../components/LoggedInButtons";
import Cookies from "js-cookie";

export default function HomePage() {
  return (
    <div>
      <div className="homepage">
        <div className="app-bar">
          <NavBarMobile />
        </div>
        <div className="homepage-container">
          <img src={Logo} className="etiquette-logo" alt="company's logo" />

          <CountrySelect />
          <Link
            className="homepage__curious-map-link"
            to={{
              pathname: "/",
              hash: "#curious-map",
            }}
          >
            Are you curious?
          </Link>
        </div>
      </div>

      <WhatsEtiquette />
      <WhatsPremium />
      <h1 id="curious-map" className="map-header">
        Curious what it is like in other places?
      </h1>
      <CuriousMapContainer />
      <Footer />
    </div>
  );
}
