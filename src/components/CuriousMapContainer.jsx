import React, { useEffect, useState } from "react";

import CuriousMap from "./CuriousMap";

const CuriousMapContainer = (props) => {

    const [fetchStatus, updateFetchStatus] = useState("IDLE"); // 'STARTED', 'SUCCEED', 'FAILED'
    const [fetchError, setFetchError] = useState(null);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        updateFetchStatus("STARTED");

        fetch(`http://localhost:1337/countries`)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                updateFetchStatus('SUCCEED');
            })
            .catch((err) => {
                setFetchError(err.message);
                updateFetchStatus("FAILED");
            });
    }, []);
    return (
        <div className="curious-map-container" style={{ height: '500px', width: '80%' }}>
            <CuriousMap
                lng={55.7781} lat={37.517}
                fetchStatus={fetchStatus}
                countries={countries}
                fetchError={fetchError}
            />

        </div>
    );
}

export default CuriousMapContainer;
