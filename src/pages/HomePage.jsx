import React, { useState } from "react";
import NavLinks from "../components/NavLinks";
import CountrySelect from "../components/SearchInput";
import "./HomePage.css";
import Logo from "../images/etiquette-logo.png";


export default function HomePage() {

  return (
    <div className="homepage">
      <NavLinks />
      <div className="homepage-container">
      <img src={Logo} className="etiquette-logo" alt="company's logo" />
      <CountrySelect/>
      </div>
    </div>
  );
}
