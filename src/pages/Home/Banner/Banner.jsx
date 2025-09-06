import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative z-0 w-full max-w-full">
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://i.ibb.co/1tSQbvFd/b3.png"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://i.ibb.co/VbxWKfC/b2.png"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://i.ibb.co/VbxWKfC/b3.png"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
