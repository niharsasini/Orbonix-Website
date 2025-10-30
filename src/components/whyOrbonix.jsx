import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: "🚀",
    title: "Digital Transformation",
    desc: "Empowering businesses with modern strategies and automation.",
  },
  {
    icon: "💻",
    title: "Custom Software",
    desc: "Tailored applications designed to deliver scalable results.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Seamless migrations, CI/CD pipelines, and DevOps services.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Protecting assets with enterprise-grade security and compliance.",
  },
  {
    icon: "🏭",
    title: "Industry Experience",
    desc: "Decades of expertise delivering domain-specific IT solutions.",
  },
  {
    icon: "🎨",
    title: "Uncompromising Design",
    desc: "Modern, user-focused designs ensuring great experiences.",
  },
  {
    icon: "🛠️",
    title: "Latest Tech Stacks",
    desc: "Leveraging cutting-edge tools and frameworks for innovation.",
  },
  {
    icon: "⚡",
    title: "Agile Delivery",
    desc: "Flexible, fast, and collaborative project delivery models.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyOrbonix = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-start justify-between px-8 md:px-20 py-20 text-white bg-no-repeat bg-right overflow-hidden"
      style={{
        backgroundColor: "#201313",
        backgroundImage: "url('/assets/images/circuitImg.svg')",
        backgroundSize: "35%",
        backgroundPosition: "95% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:w-3/5 space-y-6 z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Why <span className="text-red-500">Orbonix?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          At <span className="text-red-400 font-semibold">Orbonix</span>, we
          deliver intelligent IT solutions that combine innovation, strategic
          thinking, and flawless execution—transforming businesses for the
          digital era.
        </motion.p>

        {/* Dynamic Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(239, 68, 68, 0.3)",
              }}
              className="bg-[#2a1b1b] p-4 rounded-xl shadow-md hover:shadow-red-500/30 
                         transition-all flex flex-col items-center text-center min-h-[160px]"
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="text-base font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(220,38,38,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-base shadow-xl transition-all"
          onClick={() => window.open("https://wa.me/919040036886", "_blank")}
        >
          Let’s Talk
        </motion.button>
      </motion.div>

      {/* Decorative Right Section */}
      <div className="hidden md:block md:w-2/5"></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#201313] via-[#201313]/90 to-transparent"></div>

      {/* Floating Decorative Circles */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 right-1/4 w-6 h-6 bg-red-500 rounded-full opacity-40 blur-md"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-28 right-1/3 w-10 h-10 bg-red-400 rounded-full opacity-30 blur-md"
      ></motion.div>
    </section>
  );
};

export default WhyOrbonix;
