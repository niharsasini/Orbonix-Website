import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/Topbar";
import OurHotels from "./components/OurHotels";
import Testimonials from "./components/Testimonials";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import WhyOrbonix from "./components/whyOrbonix";
import HowWeWork from "./components/HowWeWork";
import OurSuccessStories from "./components/OurSuccessStories";
import TechStacks from "./components/TechStacks";
import Industries from "./components/Industries";
import Services from "./components/Services";
import BookConsultancy from "./components/BookConsultancy";
import ServicePage from "./pages/ServicePage"; 


function App() {
  return (
    <Router>
      {/* ✅ Top Navbar and Main Navbar */}
      <TopNavbar />
      <Navbar />

      <Routes>
        {/* ✅ Home Page Sections */}
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <WhyOrbonix id="whyOrbonix" />
              <HowWeWork />
              <OurSuccessStories />
              <Testimonials id="testimonials" />
              <TechStacks />
              <Industries />
              <Services />
              <BookConsultancy />
            </>
          }
        />
        <Route path="/hotels" element={<OurHotels />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* ✅ Career Page
        <Route path="/career" element={<Career />} /> */}

        {/* ✅ Dynamic Service Route */}
        <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>

      {/* ✅ Footer */}
      <Footer />
    </Router>
  );
}

export default App;
