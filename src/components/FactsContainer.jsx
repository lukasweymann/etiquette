import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FactsContainer.css";
import SingleFact from "./SingleFact";

function FactsContainer(props) {
  const { id } = useParams();

  const [fetchStatus, updateFetchStatus] = useState("IDLE"); // 'STARTED', 'SUCCEED', 'FAILED'
  const [fetchError, setFetchError] = useState(null);
  const [singleFact, setSingleFact] = useState({});

  useEffect(() => {
    console.log("YES", singleFact);
  }, [singleFact]);
  useEffect(() => {
    updateFetchStatus("STARTED");

    fetch(`https://etiquette-backend.herokuapp.com/countries`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data", data);
        //console.log("id", id);
        console.log("HEZ", data);
        setSingleFact(
          data.filter((singleCountry) => singleCountry.country_code === id)
        );
        console.log("wow", singleFact);
        updateFetchStatus("SUCCEED");
      })
      .catch((err) => {
        setFetchError(err.message);
        updateFetchStatus("FAILED");
      });
  }, [id]);
  return (
    <div className="facts-container">
      {props.children}
      <SingleFact
        fetchStatus={fetchStatus}
        singleFact={singleFact}
        fetchError={fetchError}
        query={props.query}
        id={id}
      />
    </div>
  );
}

export default FactsContainer;
