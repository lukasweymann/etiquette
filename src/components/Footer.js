import React from "react";

import Logo from '../images/etiquette-logo-white.png';
import Github from '../images/github-white.png';
import Twitter from '../images/twitter-white.png';
import Linkedin from '../images/linkedin-white.png';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="footer-logo">
                    <a className="footer-logo__link" href="/"><img className="footer-logo__image" src={Logo} /></a>
                </div>
                <div className="footer-links">
                    <p className="footer-links__text" href="/404"> Copyright © 2020 etiquette</p>

                </div>

                <div className="footer-social-media">
                    <a href="/qwertz" className="footer-social-media-item"><img src={Github} /></a>
                    <a href="#" className="footer-social-media-item"><img src={Twitter} /></a>
                    <a href="#" className="footer-social-media-item"><img src={Linkedin} /></a>
                </div>

            </div>
        </div>
    );
}
