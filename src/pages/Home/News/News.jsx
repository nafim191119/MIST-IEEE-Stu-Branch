import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-20px] z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-500 transition"
    onClick={onClick}
  >
    <FaChevronRight size={18} />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-20px] z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-500 transition"
    onClick={onClick}
  >
    <FaChevronLeft size={18} />
  </div>
);

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("../../../../public/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Recent News</h2>
          <a href="#" className="text-yellow-500 hover:underline">
            Read All News
          </a>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {news.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2">
                    {item.date} / By {item.author}
                  </p>
                  <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default News;
