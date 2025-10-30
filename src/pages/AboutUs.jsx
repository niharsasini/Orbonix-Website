import React from "react";
import {
  FaLaptopCode,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const AboutUs = () => {
  const navigate = useNavigate(); // ✅ Create navigation function

  const handleContactClick = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0); // ✅ Ensures scroll resets after page change
  };

  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 bg-gradient-to-br from-[#1a1a1a] via-[#201313] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              About Orbonix
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a modern Software IT Services & Consultancy company helping
              businesses transform digitally. From web and mobile applications
              to enterprise solutions, we deliver innovative, scalable, and
              secure technology services tailored to your needs.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg border border-[#3a2a2a]">
              <img
                src="/assets/images/about-hero.jpg"
                alt="About Orbonix"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 
                              bg-[linear-gradient(135deg,_rgba(255,255,255,0.05)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.05)_50%,_rgba(255,255,255,0.05)_75%,_transparent_75%,_transparent)] 
                              bg-[length:20px_20px] opacity-20 pointer-events-none"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div className="bg-[#2a1b1b] p-8 rounded-2xl border border-[#3b2a2a] shadow-lg hover:shadow-blue-500/20 transition">
          <FaBullseye className="text-4xl text-blue-400 mb-4 mx-auto md:mx-0" />
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To empower businesses with cutting-edge technology solutions,
            fostering innovation and delivering exceptional value through
            reliable, scalable, and user-friendly software systems.
          </p>
        </div>

        <div className="bg-[#2a1b1b] p-8 rounded-2xl border border-[#3b2a2a] shadow-lg hover:shadow-cyan-500/20 transition">
          <FaRocket className="text-4xl text-cyan-400 mb-4 mx-auto md:mx-0" />
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To be a global leader in IT services and consultancy by delivering
            future-ready solutions and becoming a trusted technology partner for
            businesses worldwide.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[#201313] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#2a1b1b] p-8 rounded-2xl shadow-lg border border-[#3b2a2a] hover:shadow-blue-500/20 transition">
            <FaLaptopCode className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Software Development</h3>
            <p className="text-gray-300">
              High-quality, scalable web and mobile applications built with
              modern technologies.
            </p>
          </div>
          <div className="bg-[#2a1b1b] p-8 rounded-2xl shadow-lg border border-[#3b2a2a] hover:shadow-cyan-500/20 transition">
            <FaHandshake className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">IT Consultancy</h3>
            <p className="text-gray-300">
              Expert guidance and digital strategy planning to drive your
              business transformation.
            </p>
          </div>
          <div className="bg-[#2a1b1b] p-8 rounded-2xl shadow-lg border border-[#3b2a2a] hover:shadow-blue-500/20 transition">
            <MdOutlineSupportAgent className="text-4xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-300">
              Continuous monitoring and technical support to keep your systems
              running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Years of Experience", value: "5+" },
          { label: "Projects Delivered", value: "120+" },
          { label: "Happy Clients", value: "90+" },
          { label: "Team Members", value: "30+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-[#2a1b1b] p-6 rounded-2xl border border-[#3b2a2a] shadow-lg hover:shadow-blue-500/20 transition"
          >
            <h3 className="text-3xl font-bold text-blue-400">{stat.value}</h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#201313] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Innovation",
              desc: "We bring creativity and advanced technologies to deliver future-proof solutions.",
            },
            {
              title: "Integrity",
              desc: "We value transparency, ethics, and honesty in all our dealings.",
            },
            {
              title: "Excellence",
              desc: "We aim for the highest quality in every service we provide.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-[#2a1b1b] p-8 rounded-2xl shadow-lg border border-[#3b2a2a] hover:shadow-cyan-500/20 transition"
            >
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
          Let's Build the Future Together
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with Orbonix to transform your ideas into innovative software
          solutions. Let's take your business to the next level with
          cutting-edge technology.
        </p>
        <button
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full shadow-lg hover:scale-105 transition"
          onClick={handleContactClick} // ✅ Scroll fix
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
