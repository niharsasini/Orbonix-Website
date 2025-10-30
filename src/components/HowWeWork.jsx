import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaSearch,
  FaProjectDiagram,
  FaCode,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaHeadset,
} from "react-icons/fa";

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaComments />,
      title: "Requirement Discussion",
      desc: "We begin with detailed conversations to understand your business vision and goals.",
    },
    {
      icon: <FaSearch />,
      title: "In-Depth Analysis",
      desc: "Our experts conduct research and feasibility checks to shape the perfect solution.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Strategic Planning",
      desc: "We prepare a robust roadmap, system architecture, and resource plan for smooth execution.",
    },
    {
      icon: <FaCode />,
      title: "Agile Development",
      desc: "Our developers build the solution in agile sprints with continuous client feedback.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      desc: "Comprehensive testing ensures high performance, security, and reliability.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deployment",
      desc: "Seamless and secure deployment to your infrastructure or cloud environment.",
    },
    {
      icon: <FaHeadset />,
      title: "Ongoing Support",
      desc: "We offer 24/7 support and proactive maintenance for long-term success.",
    },
  ];

  return (
    <section
      className="py-20 px-6 text-white relative overflow-hidden"
      style={{ backgroundColor: "#2A1B1B" }}
    >
      {/* Heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-500">
          How We Work
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-base">
          Visualizing our workflow as a growing tree—each step branches out to
          deliver scalable, high-quality IT solutions.
        </p>
      </motion.div>

      {/* Tree Container */}
      <div className="relative max-w-6xl mx-auto pt-8">
        {/* Tree trunk */}
        <motion.div
          className="absolute top-0 left-1/2 w-2 bg-gradient-to-b from-green-500 to-lime-600 rounded-full shadow-lg"
          style={{ height: "calc(100% - 20px)" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Leaves */}
        <div className="relative flex flex-col space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } relative`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Branch Connector */}
              <motion.div
                className={`absolute top-1/2 ${
                  index % 2 === 0 ? "left-1/2" : "right-1/2"
                } h-1 bg-green-500`}
                style={{ width: "3rem" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />

              {/* Floating Leaf Card */}
              <motion.div
                className="w-full md:w-5/12 bg-gradient-to-br from-green-600/20 to-lime-700/20 
                backdrop-blur-md rounded-[40px] p-6 border border-green-400/20 shadow-lg 
                hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition"
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -8, 0, 8, 0], // floating effect
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="text-3xl text-green-400 mr-3">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-300">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </motion.div>

              {/* Leaf Dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-green-400 to-lime-500 rounded-full border-4 border-[#2A1B1B] z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.25 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
