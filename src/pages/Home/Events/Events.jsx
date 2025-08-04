import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Events = () => {
  const [filterYear, setFilterYear] = useState("");
  const [filterType, setFilterType] = useState("");
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch("/eventsData.json")
      .then((res) => res.json())
      .then((data) => setEventsData(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredEvents = eventsData.filter((event) => {
    const yearMatch = filterYear ? event.date.startsWith(filterYear) : true;
    const typeMatch = filterType ? event.type === filterType : true;
    return yearMatch && typeMatch;
  });

  return (
    <div className="px-4 md:px-16 py-10 bg-gray-200">
      <SectionTitle>
        heading="IEEE MIST Events"
        subHeading="Explore our latest and past events with ease"
      </SectionTitle>

      <div className="flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-3 mt-4 mb-6 px-44">
        <select
          onChange={(e) => setFilterYear(e.target.value)}
          className="select select-xs w-28 text-black bg-[#F1F6FA] border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
        >
          <option value="">All Years</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        <select
          onChange={(e) => setFilterType(e.target.value)}
          className="select select-xs w-28 text-black bg-[#F1F6FA] border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
        >
          <option value="">All Types</option>
          <option value="Webinar">Webinar</option>
          <option value="Workshop">Workshop</option>
          <option value="Competition">Competition</option>
          <option value="Tour">Tour</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-44">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            style={{ boxShadow: "0 4px 6px rgba(0, 98, 155, 0.4), 0 0 15px 5px rgba(2, 146, 230, 0.3)"}}
            className="card bg-[#F1F6FA] hover:bg-gradient-to-tr from-[#e0f1ff] to-[#f4faff] border border-gray-200 shadow-md hover:shadow-xl transition duration-300 h-[450px] flex flex-col justify-between"
          >
            <figure>
              <img
                src={event.poster}
                alt={`${event.name} poster`}
                className="h-48 w-full object-cover rounded-t"
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h3 className="card-title text-[#00447C]">{event.name}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} • {event.type}
                </p>
                <p className="text-gray-700 line-clamp-3">
                  {event.description}
                </p>
              </div>
              <div>
                {event.isUpcoming ? (
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-[#00629B] hover:bg-[#00447C] text-white w-full mt-2"
                  >
                    Register
                  </a>
                ) : (
                  <p className="text-sm text-green-600">
                    Outcome: {event.outcome}
                  </p>
                )}
                <div className="card-actions justify-end mt-2">
                  <Link to={`/events/${event.id}`}>
                    <button className="btn btn-outline btn-sm border-[#00629B] text-[#00629B] hover:bg-[#00629B] hover:text-white transition duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
