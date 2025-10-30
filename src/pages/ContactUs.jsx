import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    alert("Form submitted successfully!");
  };

  const servicesList = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Cloud Solutions",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Contact Section */}
      <div className="pt-32 min-h-screen px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left: Company Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-indigo-400">
              Get in Touch with Orbonix
            </h2>
            <p className="text-gray-300 text-lg">
              Discuss your project, request a quote, or simply bounce around
              ideas — we're all ears. Our team brings deep industry and domain
              expertise.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>
                🚀 We use the latest technology for building innovative
                products.
              </li>
              <li>
                🎨 We create designs and user interfaces that are both beautiful
                and scalable.
              </li>
              <li>
                ⚡ We follow agile methods for fast and flexible delivery.
              </li>
              <li>
                👨‍💼 Experienced Senior Project & Product Managers lead your
                projects.
              </li>
            </ul>

            {/* Contact details */}
            <div className="space-y-4 mt-8">
              <p className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-400" />
                <span>contact@orbonix.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaPhoneAlt className="text-indigo-400" />
                <span>+1 (234) 567-890</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span>123 Tech Street, Innovation City</span>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-4">
            <h3 className="text-lg font-bold mb-3 text-indigo-400 text-center">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div>
                <label className="block mb-0.5 font-semibold text-xs">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-1.5 rounded-lg bg-gray-900 text-white border border-gray-700 
                     focus:border-indigo-400 focus:ring focus:ring-indigo-500/30 outline-none text-xs"
                  placeholder="Enter your name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block mb-0.5 font-semibold text-xs">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-1.5 rounded-lg bg-gray-900 text-white border border-gray-700 
                     focus:border-indigo-400 focus:ring focus:ring-indigo-500/30 outline-none text-xs"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-0.5 font-semibold text-xs">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-1.5 rounded-lg bg-gray-900 text-white border border-gray-700 
                     focus:border-indigo-400 focus:ring focus:ring-indigo-500/30 outline-none text-xs"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-0.5 font-semibold text-xs">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="w-full p-1.5 rounded-lg bg-gray-900 text-white border border-gray-700 
                     focus:border-indigo-400 focus:ring focus:ring-indigo-500/30 outline-none text-xs"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block mb-1 font-semibold text-xs">
                  Select Services Needed *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {servicesList.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-1.5 p-1.5 bg-gray-800/50 rounded-lg 
                         border border-gray-700 hover:border-indigo-400 cursor-pointer 
                         transition text-xs"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="h-3.5 w-3.5 text-indigo-500 focus:ring-indigo-500 rounded"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-0.5 font-semibold text-xs">
                  Message *
                </label>
                <textarea
                  required
                  className="w-full p-1.5 rounded-lg bg-gray-900 text-white border border-gray-700 
                     focus:border-indigo-400 focus:ring focus:ring-indigo-500/30 outline-none text-xs"
                  rows="2"
                  placeholder="Describe your project or requirements"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white 
                     font-semibold text-xs transition duration-300 shadow-lg 
                     hover:shadow-indigo-500/50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 px-6 lg:px-16 overflow-hidden">
        {/* Background accents */}
        <div className="absolute -top-20 -left-20 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-purple-500/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10 items-center"
          >
            {/* Left: Company Intro */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white leading-tight">
                Our <span className="text-indigo-400">Global Presence</span>
              </h2>
              <p className="text-gray-300">
                Orbonix is an IT consulting & services company with headquarters
                in Innovation City and clients worldwide. Our mission is to
                deliver innovative, scalable, and future-ready solutions to help
                businesses thrive in a rapidly evolving digital world.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>🌍 Serving clients across 20+ countries</li>
                <li>💼 Specialized in cloud, AI, and enterprise solutions</li>
                <li>⚡ Agile, client-focused, and result-driven</li>
              </ul>
            </motion.div>

            {/* Middle: Map Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                <iframe
                  title="Orbonix Headquarters"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.879162624564!2d90.412518!3d23.780777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzUwLjgiTiA5MMKwMjQnNDIuOSJF!5e0!3m2!1sen!2sbd!4v1612312321321!5m2!1sen!2sbd"
                  width="100%"
                  height="350"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>

              {/* Floating "Get Directions" Button with pulse */}
              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=123+Tech+Street,+Innovation+City"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Get Directions
              </motion.a>
            </motion.div>

            {/* Right: Orbonix Contact Hub - Compact & Aligned */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {[
                {
                  title: "Main Office",
                  text: "123 Tech Street, Innovation City",
                  icon: "🏢",
                  link: "https://www.google.com/maps/dir/?api=1&destination=123+Tech+Street,+Innovation+City",
                },
                {
                  title: "Call Us",
                  text: "+1 (234) 567-890",
                  icon: "📞",
                  link: "tel:+1234567890",
                },
                {
                  title: "Email",
                  text: "contact@orbonix.com",
                  icon: "✉️",
                  link: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@orbonix.com&su=Inquiry%20from%20Website&body=Hello%20Orbonix%20Team,%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about...",
                },
                {
                  title: "Travel Guide",
                  text: "15 min from Airport, 5 min from Metro, Free Parking",
                  icon: "🗺️",
                  link: "https://www.google.com/maps/place/Innovation+City",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative group p-4 min-h-[140px] flex flex-col justify-between 
                 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 
                 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30 
                 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 
                      opacity-0 group-hover:opacity-100 transition duration-500"
                  ></div>

                  {/* Top Row: Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <h4 className="text-white font-semibold text-base">
                      {item.title}
                    </h4>
                  </div>

                  {/* Middle: Text */}
                  <p className="text-gray-300 text-sm mt-2 flex-1">
                    {item.text}
                  </p>

                  {/* Bottom: Hover CTA */}
                  <div className="mt-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition duration-300 text-xs">
                    → Click to open
                  </div>
                </motion.a>
              ))}

              {/* Big CTA */}
              <motion.a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#appointment")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sm:col-span-2 flex items-center justify-center px-5 py-4 rounded-xl 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white 
               font-semibold text-base shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 
               transition-all duration-300"
              >
                🚀 Book an Appointment
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
