import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { FaUsers } from "react-icons/fa";

const MemberData = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    fetch("/membersData.json")
      .then((res) => res.json())
      .then((data) => setMembersData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Parallax
        bgImage="https://i.ibb.co/1tSQbvFd/b3.png"
        strength={400}
        bgImageStyle={{ objectFit: "cover" }}
      >
        <div className="py-10 bg-black/60 text-white">
          {/* Section Title Alternative */}
          <div>
            <div className="text-center mb-8 mt-8">
              <div className="divider"></div>
              {/* Sub Heading */}
              <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
                IEEE MIST STUDENT BRANCH at a glance
              </p>

              {/* Main Heading */}
              <h1 className="text-white text-2xl md:text-4xl font-bold mt-1">
                MEMBERS COUNT
              </h1>

              {/* Decorative line */}
              <div className="w-32 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
          {/* Section Title Alternative */}

          <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-20 text-center">
            {membersData.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <FaUsers className="text-5xl text-blue-600 mb-2" />
                <h2 className="text-3xl font-bold">{member.count}+</h2>
                <p className="text-sm">{member.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MemberData;
