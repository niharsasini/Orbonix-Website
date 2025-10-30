import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaUserTie,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";

const BookConsultancy = () => {
  useEffect(() => {
    // Add floating particles background effect
    const particles = document.getElementById("particles");
    for (let i = 0; i < 20; i++) {
      const span = document.createElement("span");
      span.className = "particle";
      span.style.left = Math.random() * 100 + "%";
      span.style.top = Math.random() * 100 + "%";
      span.style.animationDelay = Math.random() * 5 + "s";
      particles.appendChild(span);
    }
  }, []);

  return (
    <div className="relative bg-[#201313] text-white py-20 px-4 md:px-20 overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a1818] via-[#201313] to-[#1a1111] animate-pulse opacity-90"></div>

      {/* Floating Particles */}
      <div
        id="particles"
        className="absolute inset-0 pointer-events-none"
      ></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Book Your{" "}
          <span className="text-blue-400 glow-text">IT Consultancy</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Empower your business with next-gen solutions. Our experts craft
          tailored strategies in cloud, AI, cybersecurity, and digital
          transformation.
        </p>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10"
      >
        {[
          {
            icon: <FaUserTie />,
            title: "Expert Consultants",
            desc: "Certified experts driving innovation and success.",
          },
          {
            icon: <FaLaptopCode />,
            title: "Tailored Solutions",
            desc: "Custom strategies aligned with your goals.",
          },
          {
            icon: <FaRegClock />,
            title: "Flexible Scheduling",
            desc: "Book sessions at your convenience.",
          },
        ].map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-500/30 transition-all"
          >
            <div className="text-blue-400 text-4xl mb-4 flex justify-center animate-bounce-slow">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Booking Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Schedule Your Consultation
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="form-field"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="form-field"
            required
          />
          <input type="tel" placeholder="Phone Number" className="form-field" />
          <select className="form-field" required>
            <option value="" className="text-gray-900">
              Select Service
            </option>
            <option className="text-gray-900">Software Development</option>
            <option className="text-gray-900">IT Strategy Consulting</option>
            <option className="text-gray-900">Cloud & DevOps</option>
            <option className="text-gray-900">Cybersecurity</option>
            <option className="text-gray-900">Other</option>
          </select>
          <input type="date" className="form-field" required />
          <input type="time" className="form-field" required />
          <textarea
            placeholder="Additional Details (optional)"
            rows="3"
            className="form-field md:col-span-2"
          ></textarea>
          <div className="md:col-span-2 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="relative bg-blue-500 overflow-hidden group text-white px-8 py-3 rounded-lg flex items-center gap-2 justify-center mx-auto transition-all shadow-lg hover:shadow-blue-500/50"
            >
              <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
              <FaPaperPlane className="relative z-10" />
              <span className="relative z-10">Book Now</span>
            </motion.button>
            <p className="text-sm text-gray-300 mt-3">
              Confirmation will be sent via email or phone within 24 hours.
            </p>
          </div>
        </form>
      </motion.div>

      {/* Custom CSS */}
      <style jsx>{`
        .form-field {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .form-field:focus {
          border-color: #60a5fa;
          box-shadow: 0 0 10px rgba(96, 165, 250, 0.4);
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
        }
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default BookConsultancy;
