import React from "react";
import ImageSlider from "./ImageSlider";
import "./SingleFact.css";

import "./SingleFact.css";

const SingleFact = (props) => {
  const { fetchStatus, singleFact, fetchError, query } = props;
  console.log(query);

  const arrayMaker = (string) => {
    return string.split("\n");
  };

  if (fetchStatus === "IDLE" || fetchStatus === "STARTED") {
    return <div className="single-fact">Loading...</div>;
  }

  if (fetchStatus === "SUCCEED") {
    return (
      <div className="single-fact__wrapper">
        <div className="single-fact">
          {singleFact[0] && (
            <>
              <div>
                <ImageSlider photos={singleFact[0].banner} />
              </div>
              <div className="country-name__container">
              <h2 className="country-name">{singleFact[0].name}</h2>
              <hr />
              </div>

              {singleFact[0].topics.map((item) => {
                if (item.type === query) {
                  const hello = arrayMaker(item.lines);
                  const goodbye = arrayMaker(item.lines);
                  const goodbyeTitle = goodbye.slice(1, goodbye.length);
                  return (
                    <div className="single-topic__container">
                      <h4 className="single-topic__header">{hello[0]}</h4>

                      {goodbyeTitle.map((line) => {
                        return (
                          <p className="single-topic__paragraph">{line}</p>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="single-fact">
      Something went wrong.
      <pre>{fetchError}</pre>
    </div>
  );
};

export default SingleFact;
