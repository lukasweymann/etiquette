import React from 'react';
import Links from '../components/Links';
import GeneralSearch from '../components/SearchInput';
import './HomePage.css'

export default function HomePage(){
    return(
        <div className="homepage">
        <Links/>
        <img className="etiquette-logo" src={require("../images/etiquette.png")} alt="company's logo"/>
        <GeneralSearch/>
        </div>
    );
}