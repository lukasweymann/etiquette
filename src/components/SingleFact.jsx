import React from "react";

const SingleFact = (props) => {
  const { fetchStatus, singleFact, fetchError } = props;
  console.log(singleFact);

  const arrayMaker = (string) => {
    return string.split("\n");
  };

  if (fetchStatus === "IDLE" || fetchStatus === "STARTED") {
    return <div className="single-fact">Loading...</div>;
  }

  if (fetchStatus === "SUCCEED") {
    return (
      <div className="single-fact__wrapper">
        {/*<div className='single-fact'>
                   <h2>{singleFact[0] && singleFact[0].name}</h2>  <br/>
                    {singleFact[0] && singleFact[0].topics.lines.map(dont => <p>{dont}</p>)} 
                    {singleFact[0] && singleFact[0].topics.lines}
        </div> */}
        <div className="single-fact">
          {singleFact[0] && (
            <>
              <h2>{singleFact[0].name}</h2>
              {singleFact[0].topics.map((item) => {
                if (item.type === "donts" || item.type === "dos") {
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
