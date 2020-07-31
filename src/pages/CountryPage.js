import React, { useState } from "react";
import FactsContainer from "../components/FactsContainer";
import NavLinks from "../components/NavLinks";
import { useHistory } from "react-router-dom";

import "./CountryPage.css";
import LeftSideBar from "../components/LeftSideBar.jsx";
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
    <div>
      <NavLinks />
      <LeftSideBar currentId={currentId}  handleQuery={handleQuery} />
     
      <FactsContainer countryRoute={countryRoute} query={query} />
    </div>
  );
}

export default CountryPage;


//<Buttons handleQuery={handleQuery} />