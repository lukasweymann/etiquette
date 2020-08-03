import React, { useEffect, useState } from "react";

import RandomFact from "./RandomFact";

const RandomFactContainer = (props) => {

    const [fetchStatus, updateFetchStatus] = useState("IDLE"); // 'STARTED', 'SUCCEED', 'FAILED'
    const [fetchError, setFetchError] = useState(null);
    const [randomFact, setRandomFact] = useState({});

    useEffect(() => {
        updateFetchStatus("STARTED");

        fetch(`http://localhost:1337/topics?type_eq=random_fact&country=${props.country.id}`)
            .then((response) => response.json())
            .then((data) => {
                let singleFact = data[Math.floor(Math.random() * data.length)];
                setRandomFact(singleFact);
                updateFetchStatus('SUCCEED');
            })
            .catch((err) => {
                setFetchError(err.message);
                updateFetchStatus("FAILED");
            });
    }, [props.country]);
    return (
        <div className="random-fact-container">
            <RandomFact
                fetchStatus={fetchStatus}
                randomFact={randomFact}
                fetchError={fetchError}
            />
        </div>
    );
}

export default RandomFactContainer;
