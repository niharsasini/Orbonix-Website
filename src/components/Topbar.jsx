import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

const TopNavbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleLanguageDropdown = () => {
    setLanguageOpen(!languageOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85; // threshold for hero
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-[#201313] shadow-md border-b border-orange-400/30" : ""
      }`}
      style={
        !scrolled
          ? {
              backgroundImage: "url('https://creuto.com/img/top-banner.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-1 md:py-1.5 text-white text-xs sm:text-sm relative gap-1 sm:gap-2">
          <div className="flex w-full flex-col md:flex-row justify-between items-center gap-2 sm:gap-3">
            {/* 🌐 + ☎️ Right group - Desktop only */}
            <div className="hidden md:flex items-center gap-3 order-2">
              {/* Language Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className={`flex items-center gap-1 font-medium transition duration-200 ${
                    scrolled ? "hover:text-orange-300" : "hover:text-cyan-300"
                  }`}
                >
                  <MdLanguage className="text-base" />
                  <span className="hidden sm:inline">English</span>
                  <FiChevronDown
                    className={`text-[15px] transition-transform ${
                      languageOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {languageOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white/90 backdrop-blur border border-gray-200 rounded-xl shadow-xl z-50 animate-fade-in-up">
                    <ul className="py-1.5 text-sm text-gray-800 font-medium space-y-0.5">
                      {["English", "हिन्दी", "বাংলা", "Français"].map(
                        (lang) => (
                          <li
                            key={lang}
                            className="px-4 py-1.5 hover:bg-blue-50 rounded cursor-pointer"
                          >
                            {lang}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Talk to Sales */}
              <div className="shrink-0">
                <button className="px-3 py-[4px] font-semibold text-white text-xs sm:text-sm rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] shadow-md hover:shadow-cyan-500/50 transition duration-300 hover:scale-105">
                  Talk to Sales
                </button>
              </div>
            </div>

            {/* 💡 WhatsApp Message - Desktop only */}
            <div className="hidden md:block flex-1 text-left order-2 md:order-1">
              <a
                href="https://wa.me/9040036886"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col sm:flex-row items-center md:items-start justify-start gap-1 sm:gap-1.5 font-medium transition ${
                  scrolled ? "hover:text-orange-300" : "hover:text-green-300"
                }`}
              >
                <span
                  className={`animate-pulse drop-shadow font-semibold ${
                    scrolled ? "text-orange-300" : "text-yellow-300"
                  }`}
                >
                  💡 Have a vision but not sure where to start?
                </span>
                <span className="text-white underline underline-offset-2 font-semibold text-[15px] animate-bounce">
                  our experts are just a message away!
                </span>
              </a>
            </div>

            {/* 🌐 + 💬 + ☎️ Mobile only - All in a row */}
            <div className="flex md:hidden w-full items-center justify-between gap-2 order-1 flex-row flex-wrap sm:flex-nowrap">
              {/* Left: Language Dropdown */}
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className={`flex items-center gap-1 font-medium transition duration-200 ${
                    scrolled ? "hover:text-orange-300" : "hover:text-cyan-300"
                  }`}
                >
                  <MdLanguage className="text-base" />
                  <span className="hidden sm:inline">English</span>
                  <FiChevronDown
                    className={`text-[15px] transition-transform ${
                      languageOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {languageOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white/90 backdrop-blur border border-gray-200 rounded-xl shadow-xl z-50 animate-fade-in-up">
                    <ul className="py-1.5 text-sm text-gray-800 font-medium space-y-0.5">
                      {["English", "हिन्दी", "বাংলা", "Français"].map(
                        (lang) => (
                          <li
                            key={lang}
                            className="px-4 py-1.5 hover:bg-blue-50 rounded cursor-pointer"
                          >
                            {lang}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Center: WhatsApp Message */}
              <div className="flex-1 text-center">
                <a
                  href="https://wa.me/9040036886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 font-medium transition ${
                    scrolled ? "hover:text-orange-300" : "hover:text-green-300"
                  }`}
                >
                  <span
                    className={`animate-pulse drop-shadow font-semibold text-[11px] sm:text-xs ${
                      scrolled ? "text-orange-300" : "text-yellow-300"
                    }`}
                  >
                    💡 Have a vision but not sure where to start?
                  </span>
                  <span className="text-white underline underline-offset-2 font-semibold animate-bounce text-[13px] sm:text-xs">
                    our experts are just a message away!
                  </span>
                </a>
              </div>

              {/* Right: Talk to Sales */}
              <div className="shrink-0">
                <button className="px-3 py-[4px] font-semibold text-white text-xs sm:text-sm rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] shadow-md hover:shadow-cyan-500/50 transition duration-300 hover:scale-105">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
