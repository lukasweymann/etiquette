import React from "react";
import PlaneWindow from "../images/plane-window.jpg";

const WhatsEtiquette = () => {
  return (
    <div className="homepage-whats-etiquette">
      <div className="homepage-description">
        <h2>WHAT'S ETIQUETTE?</h2>
        <p className="homepage-description-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          tortor a mi congue iaculis. Maecenas quam quam, porttitor vel est a,
          luctus mattis leo. Pellentesque eu venenatis elit, in volutpat mi. Nam
          tincidunt non magna eu mollis. Vivamus ornare, nunc id aliquam
          gravida, metus enim laoreet massa, fringilla tristique risus purus id
          massa.
        </p>
      </div>
      <img className="plane-window" src={PlaneWindow} />
    </div>
  );
};
export default WhatsEtiquette;
