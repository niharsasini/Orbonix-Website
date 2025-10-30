import React from "react";
import {
  FaCloud,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaPaintBrush,
  FaCode,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    icon: <FaUsers className="text-green-600 text-2xl" />,
    name: "CRM Solutions",
    description: "Build strong customer relationships with smart tools.",
  },
  {
    icon: <FaCloud className="text-blue-600 text-2xl" />,
    name: "Cloud Consulting",
    description:
      "Scale securely and efficiently with cloud migration & management.",
  },
  {
    icon: <FaChartLine className="text-purple-600 text-2xl" />,
    name: "Business Analytics",
    description: "Make data-driven decisions with customized dashboards.",
  },
  {
    icon: <FaCogs className="text-orange-500 text-2xl" />,
    name: "Automation Solutions",
    description: "Streamline workflows through intelligent automation.",
  },
  {
    icon: <FaShieldAlt className="text-red-600 text-2xl" />,
    name: "Cybersecurity",
    description: "Secure systems with modern threat prevention & audits.",
  },
  {
    icon: <FaRobot className="text-pink-500 text-2xl" />,
    name: "AI Chatbots",
    description: "Engage users with smart AI-powered conversations.",
  },
  {
    icon: <FaPaintBrush className="text-indigo-500 text-2xl" />,
    name: "UI/UX Design",
    description: "Craft stunning, user-first digital interfaces and journeys.",
  },
  {
    icon: <FaCode className="text-gray-700 text-2xl" />,
    name: "Custom Development",
    description: "Tailored web & mobile apps to power your digital vision.",
  },
  {
    icon: <FaSearch className="text-yellow-500 text-2xl" />,
    name: "SEO & Marketing",
    description: "Boost online presence through optimized strategies.",
  },
];

const ProductDropdown = () => {
  return (
    <div className="w-full py-12 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
            }}
            className="group backdrop-blur-lg bg-white/80 shadow-md hover:shadow-xl border border-gray-200 rounded-xl p-5 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-3">
              {product.icon}
              <h4 className="text-lg font-semibold group-hover:text-green-600 transition">
                {product.name}
              </h4>
            </div>
            <p className="text-sm text-gray-600 group-hover:text-gray-800">
              {product.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductDropdown;
