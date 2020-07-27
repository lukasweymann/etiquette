import React from "react";

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
              <h2>{singleFact[0].name}</h2>
              {singleFact[0].topics.map((item) => {
            
                if (item.type === query) {
                  
                  const hello = arrayMaker(item.lines);
                  return (
                    <div className="container">
                      {hello.map((line) => {
                        return <p>{line}</p>;
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
