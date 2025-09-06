import React from "react";

const items = [
  {
    title: "LEARNING",
    desc: "Gain exposure to emerging technologies including electronics, robotics, programming, AI, and research activities. IEEE MIST SB fosters innovation through hands-on learning and technical knowledge sharing.",
    icon: "📘",
  },
  {
    title: "NETWORKING",
    desc: "IEEE MIST SB provides opportunities to connect with industry professionals, alumni, and fellow members, creating strong bonds and advancing career opportunities.",
    icon: "🤝",
  },
  {
    title: "COMPETITIONS",
    desc: "Participate in national and international contests, hackathons, and technical challenges organized under IEEE, showcasing your talent and boosting your portfolio.",
    icon: "🏆",
  },
  {
    title: "SKILL BUILDING",
    desc: "Develop leadership, teamwork, and technical skills across multiple domains such as content writing, graphic design, media, and event management.",
    icon: "📈",
  },
  {
    title: "EVENTS",
    desc: "IEEE MIST SB hosts workshops, seminars, industrial visits, and conferences to provide members with real-world exposure and career development opportunities.",
    icon: "📅",
  },
  {
    title: "ACHIEVEMENTS",
    desc: "IEEE MIST SB has earned recognition for impactful activities and projects, establishing its position as one of the most active IEEE Student Branches in Bangladesh.",
    icon: "🎖️",
  },
];

const WhyJoin = () => {
  return (
    <div>
      <section className="py-16 bg-white" id="why-join">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002D62] mb-2 uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoin;
