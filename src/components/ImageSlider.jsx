import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ImageSlider extends React.Component {
  render() {
    const { photos } = this.props;
    return (
      <div>
        <Slider
          dots={true}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          speed={2000}
          autoplaySpeed={5000}
          cssEase={"linear"}
        >
          {photos.map((photo) => {
            return <img src={photo.url} />;
          })}
        </Slider>
      </div>
    );
  }
}
