import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaStethoscope,
  FaGraduationCap,
  FaMoneyBillWave,
  FaPlane,
  FaShoppingCart,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

const industries = [
  {
    title: "Finance & Banking",
    icon: <FaMoneyBillWave className="text-3xl text-green-500" />,
    description: "Digital transformation and fintech solutions.",
  },
  {
    title: "Healthcare",
    icon: <FaStethoscope className="text-3xl text-red-400" />,
    description: "EHR systems, patient portals, and health analytics.",
  },
  {
    title: "Education",
    icon: <FaGraduationCap className="text-3xl text-blue-400" />,
    description: "E-learning platforms and LMS systems.",
  },
  {
    title: "Retail & E-commerce",
    icon: <FaShoppingCart className="text-3xl text-purple-500" />,
    description: "Seamless online shopping and inventory systems.",
  },
  {
    title: "Travel & Hospitality",
    icon: <FaPlane className="text-3xl text-indigo-400" />,
    description: "Booking engines, CRM, and customer portals.",
  },
  {
    title: "Energy & Utilities",
    icon: <FaBolt className="text-3xl text-yellow-400" />,
    description: "Smart grid software and asset management tools.",
  },
  {
    title: "Real Estate",
    icon: <FaBuilding className="text-3xl text-pink-500" />,
    description: "Listing platforms, property management systems.",
  },
  {
    title: "Telecom",
    icon: <FaGlobe className="text-3xl text-cyan-500" />,
    description: "Billing, OSS/BSS, and network monitoring solutions.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const IndustriesDropdown = () => {
  return (
    <div className="w-full py-12 backdrop-blur-lg bg-white/80 border-t border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 text-white rounded-xl p-6 shadow-md border border-gray-700 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover={{
              rotate: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {industry.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1">{industry.title}</h3>
            <p className="text-gray-300 text-sm">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesDropdown;
