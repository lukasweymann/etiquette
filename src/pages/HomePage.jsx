import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import NavLinks from "../components/NavLinks";
import CountrySelect from "../components/CountrySelect";
import CuriousMapContainer from '../components/CuriousMapContainer';
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
          <Link
            className="homepage__curious-map-link"
            to={{
              pathname: '/',
              hash: "#curious-map",
            }}
          >
            Are you curious?
        </Link>
        </div> 
      </div>   
        
      <WhatsEtiquette />
      <CuriousMapContainer />
      <Footer />
    </div>
  );
}
