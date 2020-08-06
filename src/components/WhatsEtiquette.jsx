import React from "react";
import PlaneWindow from "../images/plane-window.jpg";
import "./WhatsEtiquette.css";

const WhatsEtiquette = () => {
  return (
    <div className="homepage-whats-etiquette">
      <div className="whats-description">
        <h2 className="whats-description__h2">WHAT'S ETIQUETTE?</h2>
        <p className="whats-description-paragraph">
          Etiquette is a <b>modern search engine</b> intended to educate everyone
          travelling to other countries about the worldwide cultures and the
           <b> proper behaviour</b> that one should have when visiting them. The
          information provided by Etiquette is actual, accurate and tailored
          following the <b>governamental legislation</b> provided by the concerning
          authorities of each country saved in the database of Etiquette. The
          approach also takes in account the advice given by locals in terms of
          social agreement to certain behaviours.
        </p>
      </div>
      <img className="plane-window" src={PlaneWindow} />
    </div>
  );
};
export default WhatsEtiquette;
