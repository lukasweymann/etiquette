import React, { useState } from "react";
import FactsContainer from "../components/FactsContainer";
import NavLinks from "../components/NavLinks";
import { useHistory } from "react-router-dom";
import "./CountryPage.css";
import LeftSideBar from "../components/LeftSideBar.jsx";
import CountrySelect from "../components/CountrySelect";
import UserButtons from "../components/UserButtons";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

function CountryPage() {
  //
  const [code, setCode] = useState(null);
  const [currentId, setCurrentId] = useState(0);
  const [query, setQuery] = useState("dos and donts");

  let history = useHistory();

  function countryRoute(value) {
    setCode(value.code);
    history.push(`/countries?=${value.code}`);
  }
  //

  function handleQuery(name, id) {
    setQuery(name);
    setCurrentId(id);
  }
  return (
    <div className="country-page">
      <div className="countrypage-navbar">
        
      </div>
      <div className="main-container__countrypage">
        <LeftSideBar currentId={currentId} handleQuery={handleQuery} />

        <FactsContainer countryRoute={countryRoute} query={query} >
        <CountrySelect />
        </FactsContainer>
      </div>
      <Footer />
    </div>
  );
}

export default CountryPage;

//<Buttons handleQuery={handleQuery} />
