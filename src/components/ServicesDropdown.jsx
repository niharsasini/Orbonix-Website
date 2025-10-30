import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites, portals & web apps tailored to your business goals.",
    icon: "🌐",
    subPoints: [
      "Customized Web Development",
      "Enterprise Web Portals",
      "Cross-Platform Web Apps",
      "PWA (Progressive Web Apps)",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "iOS & Android apps built with performance & user experience in mind.",
    icon: "📱",
    subPoints: [
      "Native iOS Apps",
      "Native Android Apps",
      "Cross-Platform Mobile Apps",
      "Mobile UI/UX Design",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Pixel-perfect UI designs focused on intuitive user experiences.",
    icon: "🎨",
    subPoints: [
      "User Research & Wireframing",
      "High-Fidelity Prototypes",
      "Responsive Web Design",
      "Design System Creation",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, PPC, social & content marketing strategies that get results.",
    icon: "📢",
    subPoints: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Campaigns",
      "Social Media Advertising",
      "Content Creation & Strategy",
    ],
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Secure, scalable cloud infrastructure & DevOps solutions.",
    icon: "☁️",
    subPoints: [
      "AWS / Azure / GCP Management",
      "Cloud Migration Services",
      "Serverless Architecture",
      "Cloud Security & Compliance",
    ],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    description: "Robust online stores with seamless customer experiences.",
    icon: "🛒",
    subPoints: [
      "Custom E-commerce Platforms",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Multi-Vendor Marketplace",
    ],
  },
];

const ServicesDropdown = () => {
  return (
    <div className="w-full py-10 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-fadeIn">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.id}`}
              key={index}
              className="relative bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-green-500/30 animate-fadeInUp flex flex-col justify-between min-h-[180px]"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg shadow-md mb-3 animate-bounce-slow">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold mb-1 text-white">
                {service.title}
              </h3>
              <p className="text-xs text-gray-300 leading-snug mb-2">
                {service.description}
              </p>
              <ul className="text-[11px] text-gray-400 list-disc list-inside space-y-0.5">
                {service.subPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.9s ease-in-out; }
        .animate-bounce-slow { animation: bounceSlow 2s infinite; }
      `}</style>
    </div>
  );
};

export default ServicesDropdown;
export { services }; // ✅ Export for ServicePage
