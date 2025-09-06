import React from 'react';


const events = [
    {
      title: "Tech Carnival 2024",
      img: "/events/tech-carnival.jpg",
    },
    {
      title: "SPAC Conference",
      img: "/events/spac.jpg",
    },
    {
      title: "Robotics Challenge",
      img: "/events/robotics.jpg",
    },
    {
      title: "Distinguished Lecture",
      img: "/events/lecture.jpg",
    },
    {
      title: "Sports & Cultural Fiesta",
      img: "/events/football.jpg",
    },
    {
      title: "Renewable Energy Workshop",
      img: "/events/renewable.jpg",
    },
  ];

const FeaturedEvents = () => {
    return (
        <div>
            <section className="py-16 bg-white" id="events">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#002D62] mb-2">
          Featured Events
        </h2>
        <div className="w-24 h-1 bg-[#FDB913] mx-auto mb-10"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition duration-300">
                <h3 className="text-white text-lg font-semibold px-4">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default FeaturedEvents;