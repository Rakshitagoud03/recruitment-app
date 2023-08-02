import React from "react";
import HiringPartners from "./HiringPartners";

const ServiceSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p>
          We specialize in hiring software engineers, product managers, data scientists, and more.
          We place eligible candidates in top companies like GOOGLE,IBM,AMAZON,MICROSOFT 1000+ companies
        </p>
      </div>
      <h1><strong>Our Hiring Partners</strong></h1>
      <HiringPartners /> {/* Add HiringPartners component */}
    </section>
  );
};

export default ServiceSection;

