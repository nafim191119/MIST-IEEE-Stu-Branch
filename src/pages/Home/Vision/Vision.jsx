import React from 'react';

const Vision = () => {
    return (
        <div>
            <section className="bg-[#002D62] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Vision Text */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-gray-200 leading-relaxed text-justify">
            To be a distinguished IEEE Student Branch that drives innovation,
            knowledge-sharing, and leadership among engineering students. Our
            vision is to cultivate a collaborative environment where members
            enhance their technical expertise, broaden their networks, and
            prepare to become future leaders in academia, industry, and society.
            Through dedication, integrity, and innovation, IEEE MIST SB aspires
            to empower students to make meaningful contributions to technology
            and humanity.
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://i.ibb.co.com/bRRcyJC1/IEEE-2-removebg-preview.png"
            alt="IEEE MIST SB Logo"
            className="w-72 lg:w-80 "
          />
        </div>
      </div>
    </section>
        </div>
    );
};

export default Vision;