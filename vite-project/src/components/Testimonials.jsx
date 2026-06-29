

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";

const testimonials = [
  {
    image: Ellipse1,
    name: "Anna Williams",
    role: "Model",
    color: "bg-green-900",
    text: "They delivered exactly when they promised to deliver and that's rare.",
  },
  {
    image: Ellipse2,
    name: "Jack Kruger",
    role: "Dancer",
    color: "bg-[#D70404]",
    text: "I bought their furniture and I have been using it for a long time.",
  },
  {
    image: Ellipse3,
    name: "Ian Xavi",
    role: "Comedian",
    color: "bg-blue-900",
    text: "I benefitted from a promo held last Easter and I got a big discount.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 px-6 md:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 transition-transform duration-300 hover:-translate-y-2"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />


              <p className="text-center text-gray-700 mt-6 leading-7 flex-grow">
                <span className="text-3xl font-bold text-[#D70404]">"</span>
                {item.text}
              </p>


              <div
                className={`${item.color} text-white rounded-xl w-full mt-8 py-4 text-center`}
              >
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
