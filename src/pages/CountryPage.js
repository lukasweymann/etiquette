import React, { useState } from "react";
import FactsContainer from "../components/FactsContainer";
import NavLinks from "../components/NavLinks";
import { useHistory } from "react-router-dom";

import "./CountryPage.css";

import LeftSideBar from "../components/LeftSideBar.jsx";
function CountryPage() {
  //
  const [code, setCode] = useState(null);
  let history = useHistory();

  function countryRoute(value) {
    setCode(value.code);
    history.push(`/countries?=${value.code}`);
  }
  //
  const [query, setQuery] = useState();

  function handleQuery(name) {
    setQuery(name);
  }
  return (
    <div>
      <NavLinks />
      <LeftSideBar handleQuery={handleQuery} />
      <FactsContainer countryRoute={countryRoute} query={query} />
    </div>
  );
}

export default CountryPage;


//<Buttons handleQuery={handleQuery} />