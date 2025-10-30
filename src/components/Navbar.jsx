import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ServicesDropdown from "./ServicesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ProductDropdown from "./ProductDropdown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [industriesTimeout, setIndustriesTimeout] = useState(null);
  const [productTimeout, setProductTimeout] = useState(null);

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (hideTimeout) clearTimeout(hideTimeout);
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200);
    setHideTimeout(timeout);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeout) clearTimeout(industriesTimeout);
    setShowIndustriesDropdown(true);
  };

  const handleIndustriesLeave = () => {
    const timeout = setTimeout(() => {
      setShowIndustriesDropdown(false);
    }, 200);
    setIndustriesTimeout(timeout);
  };

  const handleProductEnter = () => {
    if (productTimeout) clearTimeout(productTimeout);
    setShowProductDropdown(true);
  };

  const handleProductLeave = () => {
    const timeout = setTimeout(() => {
      setShowProductDropdown(false);
    }, 200);
    setProductTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinkStyle = `transition duration-200 ${
    scrolled ? "hover:text-blue-600" : "hover:text-blue-400"
  }`;

  return (
    <header
      className={`fixed top-[60px] sm:top-[50px] md:top-[36px] left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/Orbonix Logo.png"
            alt="Logo"
            className="h-8 w-auto sm:h-9"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-sm">
          <Link to="/" className={navLinkStyle}>
            Home
          </Link>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center gap-1 ${navLinkStyle}`}>
              Services <span className="text-xs">▾</span>
            </button>
            {showServicesDropdown && (
              <div className="fixed left-1/2 top-[105px] transform -translate-x-1/2 z-50 bg-black border border-green-500 rounded-xl shadow-xl w-full md:w-[100%] lg:w-[90%]">
                <div className="max-w-full mx-auto">
                  <ServicesDropdown />
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
          >
            <button className={`flex items-center gap-1 ${navLinkStyle}`}>
              Industries <span className="text-xs">▾</span>
            </button>
            {showIndustriesDropdown && (
              <div className="fixed left-1/2 top-[105px] transform -translate-x-1/2 z-50 bg-black border border-green-500 rounded-xl shadow-xl w-full md:w-[100%] lg:w-[90%]">
                <div className="max-w-full mx-auto">
                  <IndustriesDropdown />
                </div>
              </div>
            )}
          </div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={handleProductEnter}
            onMouseLeave={handleProductLeave}
          >
            <button className={`flex items-center gap-1 ${navLinkStyle}`}>
              Products <span className="text-xs">▾</span>
            </button>
            {showProductDropdown && (
              <div className="fixed left-1/2 top-[105px] transform -translate-x-1/2 z-50 bg-black border border-green-500 rounded-xl shadow-xl w-full md:w-[100%] lg:w-[90%]">
                <div className="max-w-full mx-auto">
                  <ProductDropdown />
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className={navLinkStyle}>
            About Us
          </Link>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex space-x-3">
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-full border text-sm transition duration-300 ${
              scrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Contact Us
          </Link>
          <button
            onClick={() => navigate("/career")}
            className={`px-4 py-2 rounded-full text-sm transition duration-300 ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Career
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <nav className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
            <Link to="/" onClick={toggleMobileMenu} className={navLinkStyle}>
              Home
            </Link>
            <button className={`flex items-center gap-1 ${navLinkStyle}`}>
              Services <span className="text-xs">▾</span>
            </button>
            <button className={`flex items-center gap-1 ${navLinkStyle}`}>
              Industries <span className="text-xs">▾</span>
            </button>
            <button className={`flex items-center gap-1 ${navLinkStyle}`}>
              Products <span className="text-xs">▾</span>
            </button>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className={navLinkStyle}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className={`w-11/12 text-center px-4 py-2 rounded-full border transition duration-300 ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                toggleMobileMenu();
                navigate("/career");
              }}
              className={`w-11/12 text-center px-4 py-2 rounded-full transition duration-300 ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Career
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
