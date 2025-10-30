import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./flipCard.css";

const OurSuccessStories = () => {
  const caseStudies = [
    {
      title: "Karma Attendance System",
      desc: "Developed a smart, AI-driven attendance management system for corporate enterprises.",
      tech: "React, Node.js, MongoDB, AI-based face recognition",
      impact: "Boosted employee tracking accuracy by 95%",
    },
    {
      title: "Lazystay Hotel Management",
      desc: "A complete hotel booking, staff management, and payment integration platform.",
      tech: "MERN Stack, Cloudinary, WebSockets",
      impact: "Enabled 4-star hotels to manage 1000+ bookings daily with ease",
    },
    {
      title: "The Aura Hospitality Solution",
      desc: "Built a scalable platform for luxury hospitality chains with event and banquet management.",
      tech: "Next.js, Express.js, PostgreSQL, AWS",
      impact: "Automated 80% of manual operations for multi-branch hotels",
    },
    {
      title: "Bindz Legal Agreements Platform",
      desc: "Developed a secure and automated platform for creating and managing legal agreements between parties in Dubai.",
      tech: "Angular.js, .NET Core, SQL Server, Azure Cloud, JWT Authentication",
      impact:
        "Streamlined legal processes, reducing manual paperwork by 70% and enabling 24/7 digital agreement signing.",
    },
  ];

  const testimonials = [
    {
      name: "John Carter",
      company: "FinTech Solutions",
      feedback:
        "Orbonix transformed our legacy system into a scalable cloud platform, improving efficiency by 70%.",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      company: "HealthFirst",
      feedback:
        "Their healthcare ERP solution automated patient management and increased ROI drastically.",
      rating: 5,
    },
    {
      name: "David Kim",
      company: "E-Shop Global",
      feedback:
        "With Orbonix’s e-commerce modernization, we scaled to 1M+ users seamlessly.",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section
      className="py-16 px-6 text-white"
      style={{ backgroundColor: "#201313" }}
    >
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
          Our Success Stories
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          From smart attendance systems to full-scale hotel management
          solutions, we’ve helped businesses transform digitally with scalable
          IT services.
        </p>
      </motion.div>

      {/* Case Studies */}
      <div className="w-full max-w-7xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-400">
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((caseStudy, i) => (
            <motion.div
              key={i}
              className="flip-card-container min-h-[420px] flex"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flip-card-inner flex flex-col w-full">
                {/* Front */}
                <div className="flip-card-front flex flex-col rounded-2xl bg-gradient-to-br from-[#2A1B1B] to-[#3a2222] border border-orange-400/20 shadow-lg flex-grow">
                  <div className="h-40 overflow-hidden rounded-t-2xl">
                    <img
                      src={`/images/projects/${i + 1}.jpg`}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2">
                      {caseStudy.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 flex-grow">
                      {caseStudy.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {caseStudy.tech.split(",").map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-orange-400/10 text-orange-300 rounded-full border border-orange-400/20"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-blue-400 font-medium">
                      Impact: {caseStudy.impact}
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back relative rounded-2xl bg-white/10 backdrop-blur-lg border border-orange-400/20 text-orange-200 flex flex-col items-center justify-center shadow-lg p-6 flex-grow">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl blur-2xl opacity-40"></div>

                  <h4 className="text-lg font-bold mb-3 z-10">
                    {caseStudy.title}
                  </h4>
                  <p className="text-sm text-gray-200 mb-3 text-center px-3 z-10 flex-grow">
                    {caseStudy.impact}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-300 mb-4 z-10">
                    <div className="bg-white/5 px-3 py-2 rounded-lg text-center border border-white/10">
                      <span className="block text-lg font-bold text-orange-400">
                        99.9%
                      </span>
                      Uptime
                    </div>
                    <div className="bg-white/5 px-3 py-2 rounded-lg text-center border border-white/10">
                      <span className="block text-lg font-bold text-green-400">
                        40%
                      </span>
                      Cost Reduction
                    </div>
                    <div className="bg-white/5 px-3 py-2 rounded-lg text-center border border-white/10">
                      <span className="block text-lg font-bold text-blue-400">
                        1M+
                      </span>
                      Users
                    </div>
                    <div className="bg-white/5 px-3 py-2 rounded-lg text-center border border-white/10">
                      <span className="block text-lg font-bold text-pink-400">
                        24/7
                      </span>
                      Support
                    </div>
                  </div>

                  <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white text-xs rounded-full shadow-lg z-10 transition-transform hover:scale-105">
                    View Full Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400">
          Client Testimonials
        </h3>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-3">
              <motion.div
                className="flex flex-col justify-between p-6 bg-[#2A1B1B] rounded-xl shadow-md text-center min-h-[220px]"
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-gray-300 italic mb-4 text-sm flex-grow">
                  “{t.feedback}”
                </p>
                <div>
                  <h4 className="text-lg font-medium text-purple-300">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">{t.company}</p>
                  <div className="flex justify-center mt-2 text-yellow-400">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurSuccessStories;
