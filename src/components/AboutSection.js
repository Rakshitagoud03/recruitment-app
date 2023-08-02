import React, { useState } from "react";
import "../styles/AboutSection.css"; // Import the CSS file

const AboutSection = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h1 className="section-heading">About Us</h1>
        {showContent ? (
          <div className="about-content">
            <p>
              We are a leading recruitment startup dedicated to helping companies in India and worldwide find the best talent for their technical positions. Our platform connects skilled software engineers, product managers, data scientists, and other tech professionals with top companies.
            </p>
            <p>
              With our user-friendly interface and advanced algorithms, we match candidates with the perfect job opportunities, making the hiring process efficient and effective for both employers and job seekers. Our team of experts ensures that only the most qualified candidates are presented to companies, saving time and resources in the recruitment process.
            </p>
            <p>
              Whether you are a company searching for the ideal candidate or a job seeker looking for your dream job, we are here to make the process seamless and successful. Join our community today and take the next step towards your professional goals!
            </p>
          </div>
        ) : null}
        <button onClick={toggleContent} className={`btn ${showContent ? "btn-less" : "btn-more"}`}>
          {showContent ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
