import React, { useState, useEffect } from "react";
import "../styles/Herosection.css"; // Import the CSS file

const Herosection = () => {
  const [showReviews, setShowReviews] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("left");

  const candidates = [
    {
      id: 1,
      name: "John Doe",
      review: "I found my dream job through this portal. It was an amazing experience!",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "The portal has a wide range of job vacancies to choose from. Highly recommended!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      review: "The application process was smooth, and the team provided great support.",
    },
  ];

  const handleFindJobClick = () => {
    setShowReviews(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollDirection((prevDirection) => (prevDirection === "left" ? "right" : "left"));
    };

    const scrollInterval = setInterval(handleScroll, 3000); // Change the interval time as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h1>Find Your Dream Job</h1>
            <p>
              Join thousands of successful candidates who found their dream jobs through our portal.
            </p>
            <button className="btn btn-primary" onClick={handleFindJobClick}>
              Find Your Dream Job
            </button>
          </div>
        </div>
        {showReviews && (
          <div className="reviews-container">
            <div className={`reviews-content ${scrollDirection}`}>
              {candidates.map((candidate) => (
                <div key={candidate.id} className="review-card">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{candidate.name}</h5>
                      <p className="card-text">{candidate.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Herosection;
