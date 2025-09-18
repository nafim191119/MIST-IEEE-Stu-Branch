import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("../../../../public/banner.json")
          .then((res) => res.json())
          .then((data) => setBanners(data));
  }, []);

  return (
    <div className="relative z-0 w-full max-w-full">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
      >
        {banners.map((item) => (
          <div key={item.id}>
            <img
              className="w-full h-[500px] object-cover"
              src={item.image}
              alt={item.caption}
            />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
