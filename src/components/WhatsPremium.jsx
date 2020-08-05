import React from "react";
import Premium from "../images/premium.jpg";
import { HashLink } from "react-router-hash-link";

import "./WhatsPremium.css";

const WhatsPremium = () => {
  return (
    <div className="homepage-premium-etiquette">
    <img className="plane-window" src={Premium} />
      <div className="premium-description">
        
        <h2 className="premium-description__h2">WHAT'S ETIQUETTE PREMIUM?</h2>
        <p className="premium-description-paragraph">
          Etiquette Premium is an extension of the normal functionalities
          Etiquette offers to users for free. Etiquette organizes the
          information about countries in categories like: Dos and Donts,
          Punctuality, COVID19 etc. <br />
          So Etiquette Premium is a tool for people who want to brush up their
          business skills in international markets, so that they can have an
          edge when working with international customers. Etiquette Premium
          provides them extensive information on international business.
        </p>
        <HashLink
          className="premium-cta"
          to={{ pathname: "my-account", hash: "#premium-register" }}
        >
          GET YOUR MEMBERSHIP
        </HashLink>
      </div>
    </div>
  );
};
export default WhatsPremium;
