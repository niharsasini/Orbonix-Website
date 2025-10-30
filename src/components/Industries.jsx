import React from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaDumbbell,
  FaShoppingCart,
  FaUniversity,
  FaUsers,
  FaBuilding,
  FaPlane,
  FaVideo,
} from "react-icons/fa";

const industries = [
  {
    name: "Healthcare",
    icon: <FaHospital />,
    description:
      "Smart solutions for hospitals, clinics, and medical startups.",
  },
  {
    name: "Fitness",
    icon: <FaDumbbell />,
    description:
      "Gym management systems, fitness apps, and wearable integrations.",
  },
  {
    name: "E-commerce & Retail",
    icon: <FaShoppingCart />,
    description:
      "High-performing online stores, retail POS, and marketplace solutions.",
  },
  {
    name: "Education",
    icon: <FaUniversity />,
    description:
      "E-learning platforms, school portals, and training management systems.",
  },
  {
    name: "Social Media & Wellness",
    icon: <FaUsers />,
    description:
      "Social networking apps and wellness platforms for community growth.",
  },
  {
    name: "Enterprise Resource Planning (ERP)",
    icon: <FaBuilding />,
    description:
      "Comprehensive ERP solutions for seamless business operations.",
  },
  {
    name: "Travel & Hospitality",
    icon: <FaPlane />,
    description:
      "Booking engines, hospitality management, and travel assistance apps.",
  },
  {
    name: "Streaming & Entertainment",
    icon: <FaVideo />,
    description:
      "Live streaming platforms, OTT apps, and entertainment solutions.",
  },
];

const Industries = () => {
  return (
    <section
      className="relative py-20 px-6 text-white overflow-hidden"
      style={{ backgroundColor: "#201313" }}
    >
      {/* Background Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400">
            Industries We Specialize In
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Delivering tailored solutions across multiple industries with
          cutting-edge technology to empower businesses and drive digital
          transformation.
        </p>
      </motion.div>

      {/* Industries Grid */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto z-10">
        {industries.map((industry, i) => (
          <motion.div
            key={i}
            className="group bg-[#2A1B1B]/80 backdrop-blur-md p-8 rounded-2xl shadow-md border border-orange-400/30 
            hover:border-orange-400/60 hover:shadow-orange-400/20 transition-transform hover:scale-105
            flex flex-col items-center text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Icon Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Icon */}
            <div className="text-5xl mb-5 text-orange-400 group-hover:scale-110 transition-transform duration-300">
              {industry.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3 text-orange-300 relative z-10">
              {industry.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 relative z-10">
              {industry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
