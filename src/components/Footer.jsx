import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaCloud,
  FaRobot,
  FaLock,
  FaCode,
  FaUserTie,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-300 pt-10 pb-6 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#38BDF8] mb-4">Orbonix</h2>
          <p className="text-sm leading-6">
            Driving digital transformation with innovative IT solutions, cloud
            services, and enterprise consulting. We empower businesses with
            secure, scalable, and future-ready technology.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-[#1E293B] hover:bg-[#38BDF8] hover:text-white p-3 rounded-full shadow-md transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#1E293B] hover:bg-[#38BDF8] hover:text-white p-3 rounded-full shadow-md transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-[#1E293B] hover:bg-[#38BDF8] hover:text-white p-3 rounded-full shadow-md transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-[#1E293B] hover:bg-[#38BDF8] hover:text-white p-3 rounded-full shadow-md transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaCloud className="text-[#38BDF8]" /> Cloud Solutions
            </li>
            <li className="flex items-center gap-2">
              <FaRobot className="text-[#38BDF8]" /> AI & Data Analytics
            </li>
            <li className="flex items-center gap-2">
              <FaLock className="text-[#38BDF8]" /> Cybersecurity
            </li>
            <li className="flex items-center gap-2">
              <FaCode className="text-[#38BDF8]" /> Software Development
            </li>
            <li className="flex items-center gap-2">
              <FaUserTie className="text-[#38BDF8]" /> IT Consulting
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="hover:text-[#38BDF8] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:text-[#38BDF8] transition">
                Industries
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-[#38BDF8] transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-[#38BDF8] transition">
                Partners
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#38BDF8] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>
            Email: <span className="text-[#38BDF8]">info@orbonix.com</span>
          </p>
          <p>
            Phone: <span className="text-[#38BDF8]">+91 98765 43210</span>
          </p>
          <p>Location: Bhubaneswar, India</p>
          {/* Google Map mini embed */}
          <iframe
            title="Map"
            src="https://maps.google.com/maps?q=bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="mt-4 w-full h-24 rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-8 bg-[#1E293B] p-6 rounded-2xl text-center shadow-lg max-w-3xl mx-auto relative z-10">
        <h3 className="text-xl font-semibold mb-3 text-white">Stay Updated</h3>
        <p className="text-sm text-gray-400 mb-4">
          Subscribe to get the latest tech insights, trends, and solutions from
          Orbonix delivered to your inbox.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-gray-800 shadow-md"
          />
          <button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white px-6 py-3 rounded-lg font-semibold transition shadow-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p>© {new Date().getFullYear()} Orbonix. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#38BDF8]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#38BDF8]">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#38BDF8]">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
