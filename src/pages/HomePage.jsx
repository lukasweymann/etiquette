import React from 'react';
import NavLinks from '../components/NavLinks';
import GeneralSearch from '../components/SearchInput';
import Logo from '../images/etiquette-logo.png';

export default function HomePage(){
    return(
        <div className="homepage">
        <NavLinks/>
        <img src={Logo} alt="company's logo"/>
        <GeneralSearch/>
        </div>
    );
}