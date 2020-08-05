import React, { useState, useEffect } from "react";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";

import Lukas from "../images/lukas-profile.jpg";
import Hanna from "../images/hanna.png";
import Tolga from "../images/tolga.jpg";
import Github from "../images/github.png";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";
import NavBarMobile from "../components/NavBarMobile";
import USerButtons from "../components/UserButtons";
import LoggedInButtons from "../components/LoggedInButtons";
import Cookies from "js-cookie";

import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <NavBarMobile />
      <div className="about-page__container">
        <div className="about-page__container__headline">
          <h1 className="aboutpage__container__h1">the team behind it all</h1>
          <p className="aboutpage__container__text">
            Etiquette is here to make travelling a better experience. We are a
            team of developers from different backgrounds - professionally as
            well as culturally - and we believe that being aware of cultural
            differences and showing respect for the customs of our travel
            destinations is vital to enjoy being abroad. If you know what
            pitfalls to avoid, it can be a smooth and enjoyable experience for
            you and for the locals that you get in touch with.
          </p>
        </div>

        <div className="team">
          <div class="team-member">
            <figure>
              <img src={Lukas} alt="Lukas" class="img-responsive" />
            </figure>

            <div className="name-title-info-container">
              <h4 className="team-member__name-tag">Lukas Weymann</h4>
              <p className="team-member__title">
                Creative Director & Web Developer
              </p>
              <p className="team-member__description">
                Lukas has worked various jobs - from plumber to designer. In
                etiquette, he combines all of his skills to make the project the
                fantastic experience it is.
              </p>
              <div className="team-info-social">
                <a href="#">
                  <img src={Github} />
                </a>
                <a href="#">
                  <img src={Twitter} />
                </a>
                <a href="#">
                  <img src={Linkedin} />
                </a>
              </div>
              <a href="#">Lukas@etiquette.com</a>
            </div>
          </div>

          <div class="team-member">
            <figure>
              <img src={Hanna} alt="Hanna" class="img-responsive" />
            </figure>
            <div className="name-title-info-container">
              <h4 className="team-member__name-tag">Hanna Christ</h4>
              <p className="team-member__title">Founder, CEO & Web Developer</p>
              <p className="team-member__description">
                Hanna, passionate about travelling, saw herself facing the
                conundrum of people's inability to enjoy their travelling
                experiences as intended due to a lack of awareness and knowledge
                of the culture and country people wished to visit. This took her
                to mix her writing and developing skills to start etiquette.
              </p>
              <div className="team-info-social">
                <a href="#">
                  <img src={Github} />
                </a>
                <a href="#">
                  <img src={Twitter} />
                </a>
                <a href="#">
                  <img src={Linkedin} />
                </a>
              </div>
              <a href="#">hanna@etiquette.com</a>
            </div>
          </div>

          <div class="team-member">
            <figure>
              <img src={Tolga} alt="Tolga" class="img-responsive" />
            </figure>
            <div className="name-title-info-container">
              <h4 className="team-member__name-tag">Tolga Cengiz</h4>
              <p className="team-member__title">Designer & Web Developer</p>
              <p className="team-member__description">
                From DJ to designer to developer - Tolga has taken the road of
                success. He is passionate about creating easy, intuitive UI and
                UX that speak to the needs of travellers.
              </p>
              <div className="team-info-social">
                <a href="#">
                  <img src={Github} />
                </a>
                <a href="#">
                  <img src={Twitter} />
                </a>
                <a href="#">
                  <img src={Linkedin} />
                </a>
              </div>
              <a href="#">tolga@etiquette.com</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
