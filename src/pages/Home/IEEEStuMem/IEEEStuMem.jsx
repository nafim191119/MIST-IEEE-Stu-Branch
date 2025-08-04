import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const IEEEStuMem = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mx-10 md:mx-40">
      <SectionTitle
        heading="IEEE MIST STUDENT BRANCH"
        subHeading="Meet Our Core Team"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="group card w-full rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
          >
            {/* Image */}
            <figure className="relative overflow-hidden rounded-t-2xl">
              <img
                src={member.pic}
                alt={member.name}
                className="h-48 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </figure>

            {/* Card Body */}
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-gray-800 group-hover:text-blue-600 transition">
                {member.name}
              </h2>
              <p className="text-blue-500 font-semibold">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.dept}</p>

              {/* Hover Links (Optional) */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300 mt-2">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <i className="fab fa-facebook text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IEEEStuMem;
