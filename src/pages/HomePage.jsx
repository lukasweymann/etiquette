import React from 'react';
import NavLinks from '../components/NavLinks';
import GeneralSearch from '../components/SearchInput';

export default function HomePage(){
    return(
        <div className="homepage">
        <NavLinks/>
        <img src="../../public/images/etiquette.png" alt="company's logo"/>
        <GeneralSearch/>
        </div>
    );
}