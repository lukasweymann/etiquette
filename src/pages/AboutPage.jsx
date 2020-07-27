import React from 'react';
import NavLinks from '../components/NavLinks';
import Footer from '../components/Footer';

import Lukas from '../images/lukas-profile.png';
import Hanna from '../images/hanna.png';
import Tolga from '../images/tolga.jpg';
import Github from '../images/github.png';
import Twitter from '../images/twitter.png';
import Linkedin from '../images/linkedin.png';

import './AboutPage.css'

export default function AboutPage() {
    return (
        <div className="about-page">
            <NavLinks />

            <div className="container">
                <div className="container__headline">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    asperiores mollitia.dolor sit amet, consectetur adipisicing elit. Recusandae
                                            asperiores mollitia.</p>
                </div>

                <div className="team">
                    {/* <div className="team-side-info">
                        <h4>Lukas Weymann / Director</h4>
                    </div> */}
                    <div class="team-member">
                        <figure>
                            <img src={Lukas}
                                alt="" class="img-responsive" />

                        </figure>
                        <h4 className="team-member__name-tag">Lukas Weymann</h4>
                        <p>Creative Director</p>
                        <div className="team-info-social">
                            <a href="#"><img src={Github} /></a>
                            <a href="#"><img src={Twitter} /></a>
                            <a href="#"><img src={Linkedin} /></a>

                        </div>
                        <a href="#">Lukas@etiquette.com</a>
                    </div>
                    <div class="team-member">
                        <figure>
                            <img src={Hanna}
                                alt="" class="img-responsive" />

                        </figure>
                        <h4 className="team-member__name-tag">Hanna Christ</h4>
                        <p>Creative Director</p>
                        <div className="team-info-social">
                            <a href="#"><img src={Github} /></a>
                            <a href="#"><img src={Twitter} /></a>
                            <a href="#"><img src={Linkedin} /></a>

                        </div>
                        <a href="#">hanna@etiquette.com</a>
                    </div>
                    <div class="team-member">
                        <figure>
                            <img src={Tolga}
                                alt="" class="img-responsive" />

                        </figure>
                        <h4 className="team-member__name-tag">Tolga Cengiz</h4>
                        <p>Designer & Jr. Web Developer</p>
                        <div className="team-info-social">
                            <a href="#"><img src={Github} /></a>
                            <a href="#"><img src={Twitter} /></a>
                            <a href="#"><img src={Linkedin} /></a>

                        </div>
                        <a href="#">tolga@etiquette.com</a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    );
}