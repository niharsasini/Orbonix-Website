import React from "react";
import {
  FaStar,
  FaProjectDiagram,
  FaUserFriends,
  FaRedo,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

const Testimonials = () => {
  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <FaStar
          key={i}
          className="text-yellow-400 drop-shadow-lg animate-pulse"
        />
      ));
  };

  const stats = [
    {
      icon: <FaProjectDiagram className="text-green-400 text-4xl mb-2" />,
      value: "99%",
      label: "Project Delivery Success",
    },
    {
      icon: <FaUserFriends className="text-blue-400 text-4xl mb-2" />,
      value: "97%",
      label: "Clients Recommend Us",
    },
    {
      icon: <FaRedo className="text-purple-400 text-4xl mb-2" />,
      value: "94%",
      label: "Repeat Business Rate",
    },
    {
      icon: <FaTools className="text-orange-400 text-4xl mb-2" />,
      value: "100+",
      label: "Technology Expertise",
    },
    {
      icon: <FaHandshake className="text-pink-400 text-4xl mb-2" />,
      value: "96%",
      label: "Client Retention Rate",
    },
  ];

  return (
    <div className=" relative bg-gradient-to-br from-gray-950 via-blue-950 to-black text-white rounded-2xl p-10 text-center shadow-xl overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-20"></div>

      {/* Heading */}
      <h3 className="relative text-4xl font-bold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow">
        Trusted by Global Businesses
      </h3>

      {/* Star Rating */}
      <div className="relative flex justify-center items-center mb-4 space-x-1 text-2xl">
        {renderStars(5)}
      </div>

      {/* Main Score */}
      <p className="relative text-5xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-md">
        4.9/5
      </p>
      <p className="relative opacity-70 text-sm">
        Delivering excellence in 500+ global IT projects
      </p>

      {/* Stats Grid */}
      <div className="relative grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-cyan-400 transition transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] flex flex-col items-center"
          >
            {stat.icon}
            <p className="text-4xl font-extrabold mb-1 text-white">
              {stat.value}
            </p>
            <p className="text-xs opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
