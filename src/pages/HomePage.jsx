import React from 'react';
import NavLinks from '../components/NavLinks';
import GeneralSearch from '../components/SearchInput';
<<<<<<< HEAD
import './HomePage.css'
=======
import Logo from '../images/etiquette-logo.png';
>>>>>>> master

export default function HomePage(){
    return(
        <div className="homepage">
<<<<<<< HEAD
        <Links/>
        <img className="etiquette-logo" src={require("../images/etiquette.png")} alt="company's logo"/>
=======
        <NavLinks/>
        <img src={Logo} alt="company's logo"/>
>>>>>>> master
        <GeneralSearch/>
        </div>
    );
}