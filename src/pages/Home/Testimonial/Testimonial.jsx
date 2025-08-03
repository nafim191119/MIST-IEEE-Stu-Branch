import React, { useState } from "react";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

const testimonials = [
  {
    name: "Dr. Jane Doe",
    title: "IEEE Fellow, Professor at MIT",
    quote:
      "IEEE has empowered me to contribute to cutting-edge research and connect with global innovators.",
    img: "https://i.ibb.co/prB726vt/IMG-3267.jpg",
  },
  {
    name: "Engr. John Smith",
    title: "Chair, IEEE Student Branch",
    quote:
      "Being a part of IEEE gave me leadership skills and a professional network that changed my career.",
    img: "https://i.ibb.co/GxKfKbW/person2.jpg",
  },
  {
    name: "Nadia Rahman",
    title: "IEEE Member, Software Engineer",
    quote:
      "From technical webinars to international exposure, IEEE has truly been a growth journey for me.",
    img: "https://i.ibb.co/5vR9Wzg/person3.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 md:px-20 overflow-hidden">
      <Sectiontitle heading="TESTIMONIALS" subHeading="Voices from our IEEE community" />

      <div className="relative w-full max-w-3xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-blue-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-32 rounded-full overflow-hidden ring-2 ring-blue-500 mx-auto">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
                <p className="text-black text-lg italic mb-4 text-sm">
                  “{item.quote}”
                </p>
                <h3 className="text-blue-800 font-semibold text-xl">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
          <button
            onClick={prevSlide}
            className="btn btn-circle bg-blue-100 text-blue-700 border-none hover:bg-blue-200"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle bg-blue-100 text-blue-700 border-none hover:bg-blue-200"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
