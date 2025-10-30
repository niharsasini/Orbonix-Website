import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaLock,
  FaCogs,
  FaProjectDiagram,
  FaSearchDollar,
} from "react-icons/fa";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: <FaLaptopCode />,
    description: "Custom, scalable websites with modern UI/UX.",
    subServices: [
      "Customized Web Development",
      "Enterprise Web Development",
      "Cross-Platform Development",
      "PWA (Progressive Web App)",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    description: "Native and cross-platform apps for iOS and Android.",
    subServices: [
      "iOS Native Apps",
      "Android Native Apps",
      "Hybrid Mobile Apps",
      "UI/UX for Mobile",
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    icon: <FaCloud />,
    description: "Secure deployment and scaling with cloud infrastructure.",
    subServices: [
      "AWS / Azure / GCP",
      "Cloud Migration",
      "Serverless Architecture",
      "Cloud Security",
    ],
  },
  {
    id: "database-management",
    title: "Database Management",
    icon: <FaDatabase />,
    description: "Optimized database design and management services.",
    subServices: [
      "Database Design",
      "Performance Optimization",
      "Backup & Recovery",
      "NoSQL / SQL Expertise",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: <FaLock />,
    description: "Protect applications with robust cybersecurity practices.",
    subServices: [
      "Penetration Testing",
      "Data Encryption",
      "Security Audits",
      "Compliance (GDPR, ISO)",
    ],
  },
  {
    id: "devops-services",
    title: "DevOps Services",
    icon: <FaCogs />,
    description: "CI/CD automation for seamless software delivery.",
    subServices: [
      "Continuous Integration",
      "Continuous Deployment",
      "Infrastructure as Code",
      "Monitoring & Logging",
    ],
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    icon: <FaProjectDiagram />,
    description: "Design scalable architectures for complex systems.",
    subServices: [
      "Microservices Architecture",
      "Monolithic to Microservices",
      "Scalable API Design",
      "Event-Driven Systems",
    ],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    icon: <FaSearchDollar />,
    description: "Strategic guidance for business technology transformation.",
    subServices: [
      "Digital Transformation",
      "IT Strategy & Roadmap",
      "Technology Audits",
      "Cost Optimization",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    const particles = document.getElementById("services-particles");
    for (let i = 0; i < 30; i++) {
      const span = document.createElement("span");
      span.className = "dot-particle";
      span.style.left = Math.random() * 100 + "%";
      span.style.top = Math.random() * 100 + "%";
      span.style.animationDelay = Math.random() * 10 + "s";
      span.style.width = span.style.height = Math.random() * 4 + 2 + "px";
      particles.appendChild(span);
    }
  }, []);

  return (
    <section
      className="relative py-20 px-6 text-white overflow-hidden"
      style={{ backgroundColor: "#2A1B1B" }}
    >
      {/* Background Particles */}
      <div id="services-particles" className="absolute inset-0 z-0"></div>

      {/* Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="uppercase tracking-widest text-orange-400 text-sm font-semibold">
          What We Offer
        </span>
        <h2 className="text-4xl font-extrabold mt-3 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400">
          Our Professional Services
        </h2>
        <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
          End-to-end IT solutions with cutting-edge technology and innovative
          strategies tailored for your success.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {services.map((service, index) => (
          <Link to={`/services/${service.id}`} key={index}>
            <motion.div
              className="p-6 rounded-xl shadow-md bg-gradient-to-br from-[#3a2222] to-[#2A1B1B] 
                       border border-orange-400/20 hover:border-orange-400 hover:shadow-orange-400/30 
                       transition-transform flex flex-col text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="relative w-16 h-16 mb-4 mx-auto flex items-center justify-center 
                            bg-[#2A1B1B] rounded-full border-2 border-orange-400 
                            shadow-md shadow-orange-500/20"
              >
                <div className="text-3xl text-orange-400">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {service.description}
              </p>

              {/* Sub-Services */}
              <ul className="text-gray-400 text-xs space-y-1 text-left mx-auto list-disc list-inside">
                {service.subServices.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Styles for Dots */}
      <style jsx>{`
        .dot-particle {
          position: absolute;
          background: rgba(255, 165, 0, 0.3);
          border-radius: 50%;
          animation: floatDots 12s infinite ease-in-out;
        }
        @keyframes floatDots {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
export { services }; // ✅ Export for ServicePage
