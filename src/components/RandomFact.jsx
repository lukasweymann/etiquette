import React from "react";
import './RandomFact.css';

const RandomFact = (props) => {
    const { fetchStatus, randomFact, fetchError } = props;


    if (fetchStatus === "IDLE" || fetchStatus === "STARTED") {
        return <div className="random-fact">Loading...</div>;
    }

    if (fetchStatus === "SUCCEED") {
        return (
            <div className="random-fact__wrapper">
                <div className="random-fact">
                    {randomFact && (<div>{randomFact.lines}</div>)}
                </div>
            </div>
        );
    }

    return (
        <div className="random-fact">
            Something went wrong.
            <pre>{fetchError}</pre>
        </div>
    );
};

export default RandomFact;
