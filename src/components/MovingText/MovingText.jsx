import React from "react";
import Marquee from "react-fast-marquee";

const MovingText = () => {
  return (
    <div className="flex items-center rounded bg-white">
      <span className="font-semibold text-black bg-blue-600 px-4 text-white">News:</span>
      <div className="flex-1">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className="text-black cursor-pointer text-sm bg-gray-200 h-6"
        >
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            📢 Coming Soon!!! Big announcement ahead... Stay tuned for updates! 📢
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default MovingText;
