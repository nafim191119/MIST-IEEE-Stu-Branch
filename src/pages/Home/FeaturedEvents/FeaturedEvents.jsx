import React from 'react';


const events = [
    {
      title: "𝐒𝐞𝐦𝐢𝐧𝐚𝐫 𝐨𝐧 𝐑𝐞𝐜𝐞𝐧𝐭 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬 𝐢𝐧 𝐆𝐍𝐒𝐒-𝐁𝐚𝐬𝐞𝐝 𝐈𝐨𝐧𝐨𝐬𝐩𝐡𝐞𝐫𝐢𝐜 𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐧𝐠 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐒𝐨𝐮𝐭𝐡𝐞𝐚𝐬𝐭 𝐀𝐬𝐢𝐚𝐧 𝐑𝐞𝐠𝐢𝐨𝐧",
      img: "https://i.ibb.co.com/BVCDftCb/518293649-1290797559712149-4046300908547718469-n.jpg",
    },
    {
      title: "Nanotechnology-enhanced AI: Unlocking the Power of Light for Precision Healthcare and Cybersecurity Innovations",
      img: "https://i.ibb.co.com/Lz6YMTqT/514423295-1288600039931901-1740819954417813934-n.jpg",
    },
    {
      title: "𝐂𝐚𝐫𝐞𝐞𝐫 𝐏𝐥𝐚𝐧𝐧𝐢𝐧𝐠 𝐚𝐧𝐝 𝐉𝐨𝐛 𝐏𝐫𝐨𝐬𝐩𝐞𝐜𝐭𝐬 𝐚𝐭 𝐇𝐨𝐦𝐞 𝐚𝐧𝐝 𝐀𝐛𝐫𝐨𝐚𝐝",
      img: "https://i.ibb.co.com/gb8gtf53/509149562-1275985914526647-2339816477647515677-n.jpg",
    },
    {
      title: "Additive Manufacturing: Emerging Opportunities for Microwave Components",
      img: "https://i.ibb.co.com/39Gwh40S/491475927-1221316896660216-1570078887743726687-n.jpg",
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-52 object-fit"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 hover:opacity-100 flex items-center justify-center transition duration-300">
                <h3 className="text-white text-xs font-semibold px-4">
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