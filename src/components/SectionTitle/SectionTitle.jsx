import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-8 mt-8">
      <div className='divider'></div>
      {/* Sub Heading */}
      <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
        {subHeading}
      </p>

      {/* Main Heading */}
      <h1 className="text-gray-800 text-2xl md:text-4xl font-bold mt-1">
        {heading}
      </h1>

      {/* Decorative line */}
      <div className="w-32 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
