import React, { useState } from "react";
import { motion } from "framer-motion";
import { PopupModal } from "react-calendly"; // ✅ Using same as Navbar

const Homecomponent = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div className="relative w-full h-[95vh] text-white overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/images/homepagevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* ✅ Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl tracking-tight"
        >
          Your Software Project: <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Designed to Impress, Built to Scale.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-lg max-w-2xl"
        >
          Creating adaptive software solutions to improve operations, providing
          businesses with expert development services from across domains and
          greater profitability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCalendlyOpen(true)} // ✅ Open popup
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Free Consultation
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Portfolio ↗
          </motion.button>
        </motion.div>
      </div>

      {/* ✅ Calendly Popup */}
      <PopupModal
        url="https://calendly.com/niharsasini/free-strategy-call" // same link as Navbar
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default Homecomponent;
