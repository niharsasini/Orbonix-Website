import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../components/ServicesDropdown";
import {
  ArrowLeft,
  CheckCircle,
  ClipboardList,
  Layout,
  Code,
  Bug,
  Rocket,
} from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Send } from "lucide-react";


const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="text-center py-24 bg-[#201313] text-white min-h-screen">
        <h2 className="text-3xl font-bold mb-6">🚫 Service not found</h2>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    );
  }

  const taglines = {
    "mobile-app-development":
      "We build modern mobile apps that are fast, reliable, and easy to use. Whether it’s Android, iOS, or both, our apps are customized to your goals, ensuring smooth performance and an engaging user experience.",
    "web-development":
      "From sleek landing pages to enterprise-grade platforms, we develop scalable web solutions with modern technologies, ensuring speed, security, and an exceptional user journey.",
    "ui-ux-design":
      "We craft human-centered designs that blend aesthetics and usability, ensuring your product delights users and drives engagement.",
    "digital-marketing":
      "Our marketing experts deliver SEO, paid ads, and content strategies that increase visibility, attract customers, and grow your brand online.",
    "cloud-services":
      "With AWS, Azure, and GCP expertise, we help businesses transition to the cloud securely, ensuring scalability, cost efficiency, and high availability.",
    "e-commerce":
      "We build robust, high-converting online stores with smooth navigation, secure payments, and optimized performance to maximize sales.",
  };

  const steps = [
    {
      title: "Discovery & Strategy",
      desc: `We begin with an in-depth analysis of your goals, users, and market trends to craft a tailored strategy for ${service.title}.`,
      icon: ClipboardList,
    },
    {
      title: "Wireframing & Design",
      desc: "Our designers create interactive wireframes and stunning UI/UX layouts that put user experience first.",
      icon: Layout,
    },
    {
      title: "Agile Development",
      desc: "Using modern frameworks, we develop scalable and secure solutions with iterative improvements.",
      icon: Code,
    },
    {
      title: "Testing & Quality Assurance",
      desc: "We run extensive testing to ensure a flawless, high-performing, and secure final product.",
      icon: Bug,
    },
    {
      title: "Launch & Post-Launch Support",
      desc: "After launch, we provide ongoing monitoring, updates, and support to ensure long-term success.",
      icon: Rocket,
    },
  ];

  return (
    <div
      className="min-h-screen text-white 
                bg-gradient-to-br from-white/90 via-white/80 to-white/70 
                backdrop-blur-sm"
    >
      {/* Hero Section */}
      <section className="relative pt-36 md:pt-40 pb-20 px-6 bg-gradient-to-br from-[#1a1a1a] via-[#201313] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Icon */}
            <div className="flex justify-center md:justify-start mb-8">
              <div
                className="text-5xl w-24 h-24 flex items-center justify-center rounded-full 
                        bg-[#2b1d1d] border border-[#3a2a2a] shadow-xl"
              >
                <div className="text-blue-400">{service.icon}</div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg leading-snug">
              {service.title}
            </h1>

            {/* Tagline */}
            <p
              className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed 
                    px-5 py-4 bg-black/20 backdrop-blur-sm rounded-lg 
                    border border-[#3a2a2a] shadow-md"
            >
              {taglines[service.id] || service.description}
            </p>
          </div>

          {/* Right Image with Glow Divider */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Glow Divider Line */}
            <div
              className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 
                      w-1 h-40 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 
                      rounded-full shadow-[0_0_20px_rgba(0,200,255,0.6)] animate-pulse"
            ></div>

            {/* Dynamic Image */}
            <div className="relative w-72 h-72 md:w-[420px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-[#3a2a2a]">
              <img
                src={
                  service.id === "mobile-app-development"
                    ? "/assets/images/MobileAppDev.jpg"
                    : service.id === "ui-ux-design"
                    ? "/assets/images/Ui-UxDev.jpg"
                    : "/assets/images/WebDev.jpg"
                }
                alt={
                  service.id === "mobile-app-development"
                    ? "Mobile App Development"
                    : service.id === "ui-ux-design"
                    ? "UI/UX Design"
                    : "Web Development"
                }
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay Pattern */}
              <div
                className="absolute inset-0 
                        bg-[linear-gradient(135deg,_rgba(255,255,255,0.03)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.03)_50%,_rgba(255,255,255,0.03)_75%,_transparent_75%,_transparent)] 
                        bg-[length:20px_20px] opacity-20 pointer-events-none"
              ></div>
            </div>
          </div>
        </div>

        {/* Subtle Overlay */}
        <div
          className="absolute inset-0 
                  bg-[linear-gradient(135deg,_rgba(255,255,255,0.03)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.03)_50%,_rgba(255,255,255,0.03)_75%,_transparent_75%,_transparent)] 
                  bg-[length:20px_20px] opacity-20 pointer-events-none"
        ></div>
      </section>

      {/* Features Section */}
      <section
        className="w-full px-4 md:px-12 lg:px-20 py-20 
             bg-[#2a1b1b] shadow-inner"
      >
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 
               text-white drop-shadow-md tracking-tight"
        >
          What’s Included
        </h2>

        {/* Grid Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {service.subPoints.map((point, index) => (
            <div
              key={index}
              className="group relative flex items-center bg-[#201313]/90 
                   backdrop-blur-md border border-[#3b2a2a] rounded-xl 
                   p-6 shadow-md hover:shadow-red-500/30 
                   hover:-translate-y-1 transition-all duration-300 w-full"
            >
              {/* Accent Border */}
              <div
                className="absolute inset-0 rounded-xl border border-transparent 
                     bg-gradient-to-r from-red-500/20 to-pink-500/20 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300"
              ></div>

              {/* Icon */}
              <div
                className="relative z-10 flex items-center justify-center 
                     w-12 h-12 rounded-full 
                     bg-gradient-to-br from-red-500/90 to-pink-500/90 
                     shadow-lg group-hover:scale-105 
                     transition-transform duration-300"
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <span
                className="relative z-10 ml-4 text-base md:text-lg 
                     text-gray-100 font-medium leading-relaxed"
              >
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Timeline Section */}
      <section className="bg-[#201313] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
          >
            How We Build {service.title}
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 
                      bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 
                      opacity-70 transform -translate-x-1/2 rounded-full"
            ></div>

            {/* Steps */}
            {[
              {
                title: "Quick Intro Call",
                desc: "We start with a detailed introduction call to understand your goals, vision, challenges, and expectations. This helps us align our approach with your business objectives before moving forward.",
                icon: ClipboardList,
              },
              {
                title: "Deep Dive & Proposal",
                desc: "Our team conducts an in-depth analysis of your requirements, competitors, and market trends. We then prepare a detailed proposal covering scope, technology choices, and cost estimation.",
                icon: Layout,
              },
              {
                title: "UI/UX Design",
                desc: "We design modern, user-focused interfaces with interactive wireframes and prototypes. You’ll review and provide feedback before we finalize the polished design system for development.",
                icon: Layout,
              },
              {
                title: "Development Kickoff",
                desc: "Using agile methodologies, we start the development process with sprint planning, code reviews, and continuous integration to ensure scalability and maintainability.",
                icon: Code,
              },
              {
                title: "Quality Assurance",
                desc: "Our QA engineers perform comprehensive testing—unit tests, integration tests, and automated checks—to deliver a secure, high-performance solution without bugs.",
                icon: Bug,
              },
              {
                title: "Deployment & Launch",
                desc: "We handle all aspects of deployment including server setup, CI/CD pipelines, and monitoring tools to ensure a smooth and successful launch.",
                icon: Rocket,
              },
              {
                title: "Ongoing Support",
                desc: "Post-launch, we provide continuous support, updates, and performance optimizations to keep your system reliable and up to date.",
                icon: CheckCircle,
              },
              {
                title: "Growth Partnership",
                desc: "We help you scale through data analytics, SEO, cloud optimizations, and strategic enhancements, acting as your long-term technology partner.",
                icon: Rocket,
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`mb-8 flex w-full ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="relative w-full md:w-1/2 px-4">
                  {/* Step Number instead of dot */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-4 
                            w-8 h-8 flex items-center justify-center 
                            rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 
                            shadow-md border-4 border-[#201313] z-20 
                            text-white text-sm font-bold"
                  >
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div
                    className="ml-8 md:ml-0 bg-[#262020] border border-[#3a2a2a] 
                            rounded-xl shadow-md p-5 transition 
                            hover:shadow-blue-500/30 hover:-translate-y-1 
                            w-full relative z-10"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon className="w-5 h-5 text-blue-400" />
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Launch Badge */}
          <div className="text-center mt-10">
            <span
              className="inline-flex items-center px-6 py-3 
                       bg-gradient-to-r from-blue-500 to-cyan-600 
                       text-white rounded-full shadow-lg 
                       text-sm md:text-base font-medium animate-pulse"
            >
              🚀 Product Launch – We stay with you for success
            </span>
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="relative py-16 bg-[#2a1b1b] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            Our Tech Stack
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            We leverage cutting-edge technologies to deliver scalable, secure,
            and high-performing solutions. Our layered architecture ensures
            seamless integration from frontend to backend, database, and DevOps
            tools.
          </p>

          {(() => {
            const stacks = {
              "mobile-app-development": {
                Frontend: [
                  { name: "React Native", logo: "⚛️" },
                  { name: "Flutter", logo: "💙" },
                  { name: "Swift", logo: "🍎" },
                  { name: "Kotlin", logo: "🤖" },
                ],
                Backend: [
                  { name: "Node.js", logo: "🟩" },
                  { name: "Express.js", logo: "🚀" },
                  { name: "Firebase", logo: "🔥" },
                ],
                Database: [
                  { name: "MongoDB", logo: "🍃" },
                  { name: "PostgreSQL", logo: "🐘" },
                ],
                Tools: [
                  { name: "Docker", logo: "🐳" },
                  { name: "GitHub Actions", logo: "⚙️" },
                ],
              },
              "web-development": {
                Frontend: [
                  { name: "React.js", logo: "⚛️" },
                  { name: "Next.js", logo: "⬛" },
                  { name: "Tailwind CSS", logo: "🎨" },
                ],
                Backend: [
                  { name: "Node.js", logo: "🟩" },
                  { name: "Express.js", logo: "🚀" },
                  { name: "GraphQL", logo: "🔺" },
                ],
                Database: [
                  { name: "MongoDB", logo: "🍃" },
                  { name: "MySQL", logo: "🐬" },
                ],
                Tools: [
                  { name: "Docker", logo: "🐳" },
                  { name: "Nginx", logo: "🌐" },
                ],
              },
            };

            const currentStacks = stacks[service.id] || {};

            return (
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                {Object.entries(currentStacks).map(([category, techs], idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center"
                  >
                    {/* Connecting Arrow */}
                    {idx > 0 && (
                      <div className="hidden lg:block absolute -left-12 top-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                    )}

                    {/* Category Card */}
                    <div className="bg-[#262020] border border-[#3b2a2a] rounded-xl shadow-lg px-6 py-8 w-52 min-h-[250px] flex flex-col items-center justify-start hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                        {category}
                      </h3>
                      <div className="space-y-4">
                        {techs.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition"
                          >
                            <span className="text-xl">{tech.logo}</span>
                            <span className="text-sm font-medium">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-[#201313] text-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-4 
                   text-transparent bg-clip-text bg-gradient-to-r 
                   from-blue-400 to-cyan-500"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-14 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our{" "}
            <span className="text-blue-400 font-semibold">{service.title}</span>
            . We’ve gathered answers to help you understand our process better
            and make informed decisions.
          </p>

          {(() => {
            const faqs = {
              "mobile-app-development": [
                {
                  q: "How long does it take to build a mobile app?",
                  a: "Typically, 8–16 weeks depending on complexity, features, and platform.",
                },
                {
                  q: "Do you develop apps for both Android and iOS?",
                  a: "Yes, we build native apps for both platforms or cross-platform solutions.",
                },
                {
                  q: "Can you handle app store deployment?",
                  a: "Absolutely! We manage the full deployment process to Google Play and App Store.",
                },
                {
                  q: "Do you offer post-launch support?",
                  a: "Yes, we offer maintenance and feature updates even after launch.",
                },
                {
                  q: "What tech stacks do you use for mobile development?",
                  a: "We use React Native, Flutter, Swift, Kotlin, and Firebase for backend support.",
                },
              ],
              "web-development": [
                {
                  q: "How long does it take to develop a website?",
                  a: "Basic sites take 4–6 weeks; enterprise platforms can take 12+ weeks.",
                },
                {
                  q: "Will my website be mobile responsive?",
                  a: "Yes, we build fully responsive websites optimized for all devices.",
                },
                {
                  q: "Do you offer SEO optimization?",
                  a: "Our development includes SEO best practices and speed optimization.",
                },
                {
                  q: "Can you integrate payment gateways?",
                  a: "Yes, we integrate PayPal, Stripe, Razorpay, and other gateways.",
                },
                {
                  q: "Which frameworks do you use for web projects?",
                  a: "We use React.js, Next.js, Tailwind, Node.js, and Express.js.",
                },
              ],
              "ui-ux-design": [
                {
                  q: "What tools do you use for design?",
                  a: "We use Figma, Adobe XD, and Sketch for UI/UX design.",
                },
                {
                  q: "Do you create interactive prototypes?",
                  a: "Yes, we deliver clickable prototypes for testing user experience.",
                },
                {
                  q: "Can you design for both web and mobile?",
                  a: "Absolutely! We create adaptive designs for all screen sizes.",
                },
                {
                  q: "Do you conduct user testing?",
                  a: "Yes, we validate designs with real users before development.",
                },
                {
                  q: "Do you create design systems?",
                  a: "We build scalable design systems for consistent branding.",
                },
              ],
            };

            const currentFaqs = faqs[service.id] || [];

            return (
              <div className="space-y-4">
                {currentFaqs.map((item, i) => (
                  <details
                    key={i}
                    className="group bg-[#252020] border border-[#3a2a2a] rounded-lg 
                         shadow-md hover:shadow-blue-500/20 
                         hover:border-blue-400/40 transition-all"
                  >
                    {/* Question */}
                    <summary
                      className="flex justify-between items-center px-6 py-4 
                                  cursor-pointer select-none 
                                  text-sm md:text-base font-medium 
                                  text-gray-200 group-hover:text-blue-400 
                                  transition"
                    >
                      <span className="flex items-center gap-2">
                        ❓ {item.q}
                      </span>
                      <span className="text-gray-400 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>

                    {/* Answer */}
                    <div
                      className="px-6 pb-4 text-gray-300 text-sm md:text-base leading-relaxed 
                              animate-fadeIn border-t border-[#3a2a2a]"
                    >
                      💡 {item.a}
                    </div>
                  </details>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Animation */}
        <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.4s ease-out;
    }
  `}</style>
      </section>
      <section className="flex justify-center px-6 py-12">
        {/* Outer gradient ring to create a 'badge' look */}
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 shadow-xl">
          {/* Inner card (glass / dark) */}
          <div className="w-full max-w-md bg-[#151212] backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl">
            {/* Top badge header */}
            <div className="flex items-center gap-5">
              <div className="relative">
                {/* glowing ring */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-0.5 shadow-[0_6px_24px_rgba(56,189,248,0.18)]">
                  <div className="w-full h-full rounded-full bg-[#1b1414] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 11c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1zm8 0c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1zM12 7c1.1 0 2 .9 2 2 0 .35-.09.68-.24.97-.63 1.19-1.76 2.03-2.76 2.03s-2.13-.84-2.76-2.03C10.09 9.68 10 9.35 10 9c0-1.1.9-2 2-2z" />
                    </svg>
                  </div>
                </div>
                {/* tiny badge label */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs bg-[#111010] px-3 py-0.5 rounded-full border border-[#2c2222] text-gray-300">
                  Contact
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Talk to us</h3>
                <p className="text-sm text-gray-300">
                  Quick replies — friendly team
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-[#2b2323]" />

            {/* Contact chips */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#241818] border border-[#332727] px-4 py-2 rounded-full text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+919876543210" className="text-xs text-gray-200">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-2 bg-[#241818] border border-[#332727] px-4 py-2 rounded-full text-sm">
                <Mail className="w-4 h-4 text-pink-400" />
                <a
                  href="mailto:contact@yourcompany.com"
                  className="text-xs text-gray-200"
                >
                  contact@yourcompany.com
                </a>
              </div>

              <div className="flex items-center gap-2 bg-[#241818] border border-[#332727] px-4 py-2 rounded-full text-sm">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-200">
                  Infocity, Bhubaneswar
                </span>
              </div>
            </div>

            {/* Minimal inline form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-[#161212] border border-[#2a2222] rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <div className="flex gap-3">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-[#161212] border border-[#2a2222] rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md text-sm font-medium hover:scale-[1.02] transform transition"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                We'll reply within 24 hours. No spam — just helpful answers.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-flex items-center px-7 py-3 
               bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 
               text-white rounded-full 
               shadow-lg shadow-blue-900/40 border border-blue-400/30
               hover:scale-105 hover:shadow-blue-400/50 hover:-translate-y-0.5
               transition-all duration-300 ease-in-out"
        >
          <ArrowLeft className="mr-2 w-5 h-5 text-white" />
          <span className="font-semibold tracking-wide">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ServicePage;
