import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Members = () => {
  const [membersData, setMembersData] = useState({});
  const [activeYear, setActiveYear] = useState("2025");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../../../public/allIEEEMembers.json")
      .then((res) => res.json())
      .then((data) => {
        setMembersData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load members:", err));
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading Members...</p>;
  }

  const years = Object.keys(membersData);

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-300 justify-center">
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setActiveYear(yr)}
              className={`px-4 py-2 font-semibold transition-all ${
                activeYear === yr
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
        {/* Members Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(membersData[activeYear] || {})
            .flat()
            .map((m, index) => (
              <div
                key={m.id || index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 p-6 flex flex-col items-center text-center"
              >
                {/* Profile Image */}
                <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-blue-600">
                  <img
                    src={m.photo || "/default-avatar.png"}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {m.role} – {m.position}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {m.dept || "N/A"}
                </p>

                {/* Social Icons */}
                <div className="flex space-x-3 mt-auto text-lg">
                  {m.fb && (
                    <a
                      href={m.fb}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaFacebookF />
                    </a>
                  )}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-blue-900 transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                  {m.gmail && (
                    <a
                      href={`mailto:${m.gmail}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FaEnvelope />
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
