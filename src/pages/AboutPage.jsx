import React from "react";
import NavLinks from "../components/NavLinks";
import Footer from "../components/Footer";

import Lukas from "../images/lukas-profile.jpg";
import Hanna from "../images/hanna.png";
import Tolga from "../images/tolga.jpg";
import Github from "../images/github.png";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";
import NavBarMobile from "../components/NavBarMobile";

import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <NavLinks />
      <NavBarMobile />
      <div className="about-page__container">
        <div className="about-page__container__headline">
          <h1 className="aboutpage__container__h1">the team behind it all</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            asperiores mollitia.dolor sit amet, consectetur adipisicing elit.
            Recusandae asperiores mollitia.
          </p>
        </div>

        <div className="team">
          <div class="team-member">
            <figure>
              <img src={Lukas} alt="Lukas" class="img-responsive" />
            </figure>
            <div className="name-title-info-container">
              <h4 className="team-member__name-tag">Lukas Weymann</h4>
              <p className="team-member__title">Creative Director & Web Developer</p>
              <p className="team-member__description">Lukas has worked in various jobs - from plumbing to design. In etiquette, he combines all of his skills to make the project the fantastic experience it is.</p>
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
              <p className="team-member__title">Founder & CEO</p>
              <p className="team-member__description">Hanna Christ, passionate about travelling, saw herself facing the conundrum of people's inability to enjoy their travelling experiences as intended due to a lack of awareness and knowledge of the culture and country people wished to visit. This took her to mix her writing and developing skills to start etiquette.</p>
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
              <p className="team-member__title">Designer & Jr. Web Developer</p>
              <p className="team-member__description">From DJ to designer to developer - Tolga has taken the route to success.</p>
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
