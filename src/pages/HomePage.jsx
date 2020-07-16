import React from 'react';
import Links from '../components/Links';
import GeneralSearch from '../components/SearchInput';

export default function HomePage(){
    return(
        <div className="homepage">
        <Links/>
        <img src="../../public/images/etiquette.png" alt="company's logo"/>
        <GeneralSearch/>
        </div>
    );
}