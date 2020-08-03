import React from 'react';
import NavLinks from '../components/NavLinks';
import Footer from '../components/Footer';
import './MissionPage.css';
import NavBarMobile from "../components/NavBarMobile";

export default function MissionPage() {
    return (
        <div className="mission-page">
            <NavLinks />
            <NavBarMobile />
            <div className="our-mission__main-container">
                <h1 className="our-mission-h1">Our Mission</h1>
                <h3 className="our-mission-h3">Our mission breaks down to three principles:</h3>
                <div className="our-mission-icons">
                    <div className="our-mission-principle connect">
                        <i class="fab fa-connectdevelop"></i>
                        <p className="our-mission-description">We believe in connecting the world out of respect to other cultures. In an era where traveling is the exciting thing we all want to do, preparing you for an awesome experience is our concern.</p>
                    </div>
                    <div className="our-mission-principle respect">
                        <i class="far fa-handshake"></i>
                        <p className="our-mission-description">Respect. This is the core idea of this project. We all want to be respected and need to respect the places where we go and the people we meet. This is how we bring our species a bit higher in terms of human-relationships.</p>
                    </div>
                    <div className="our-mission-principle update">
                        <i class="fas fa-external-link-alt"></i>
                        <p className="our-mission-description">We always keep our information up to date. Our mission is to inform you and keep our data fresh and coherent, picking a mix of federal legislations for behaviour and general agreement from locals we interview regularly.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}