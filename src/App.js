import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";
import JobVacancies from "./components/JobVacancies";
import "./styles/GlobalStyles.css";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <JobVacancies/>
      <Footer/>
    
    </div>
  );
};

export default App;
