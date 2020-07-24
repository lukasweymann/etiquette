import React, { useState } from 'react';
import FactsContainer from '../components/FactsContainer';
import NavLinks from '../components/NavLinks';
import { useHistory } from "react-router-dom";
import Buttons from '../components/Buttons';
import './CountryPage.css';
function CountryPage(){

     //
  const [code, setCode] = useState(null);
  let history = useHistory();

  function countryRoute(value) {
    setCode(value.code);
    history.push(`/countries?=${value.code}`);
  }
  //
    return(
        <div>
        <NavLinks/>
        <Buttons/>
        <FactsContainer countryRoute={countryRoute}/>
        </div>
    )
};

export default CountryPage;