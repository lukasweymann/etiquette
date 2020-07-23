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
                    <a href="/"><img src={Logo} /></a>
                </div>
                <div className="footer-links">
                    <p href="/"> Copyright © 2020 etiquette</p>

                </div>

                <div className="footer-social-media">
                    <a href="#" className="footer-social-media-item"><img src={Github} /></a>
                    <a href="#" className="footer-social-media-item"><img src={Twitter} /></a>
                    <a href="#" className="footer-social-media-item"><img src={Linkedin} /></a>
                </div>

            </div>
        </div>
    );
}
