import React from "react";
import { Parallax } from "react-parallax";
import { FaUsers } from "react-icons/fa";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

const MemberData = () => {
  const membersData = [
    { year: 2019, count: 200 },
    { year: 2020, count: 280 },
    { year: 2021, count: 270 },
    { year: 2022, count: 330 },
    { year: 2023, count: 200 },
    { year: 2024, count: 230 },
  ];
  return (
    <div>
      <Parallax
        bgImage="https://i.ibb.co/1tSQbvFd/b3.png"
        strength={400}
        bgImageStyle={{ objectFit: "full" }}
      >
        <div className="py-10 bg-black/60 text-white">
          <Sectiontitle heading="MEMBERS COUNT" subHeading="" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white px-8">
            {membersData.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <FaUsers className="text-5xl text-blue-600 mb-2" />
                <h2 className="text-3xl font-bold">{member.count}+</h2>
                <p className="text-sm">{member.year}</p>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MemberData;
