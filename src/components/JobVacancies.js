import React, { useState } from "react";
import ApplicationForm from "./ApplicationForm";

const JobVacancies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  const toggleVacancies = (companyId) => {
    setSelectedCompany((prevSelectedCompany) =>
      prevSelectedCompany === companyId ? null : companyId
    );
  };

  const showApplyForm = (jobId) => {
    setSelectedJob(jobId);
    setShowForm(true);
  };

  const hideApplyForm = () => {
    setSelectedJob(null);
    setShowForm(false);
  };

  const handleFormSubmit = () => {
    setRegistrationCompleted(true);
  };

  const companies = [
    {
      id: 1,
      name: "Company A",
      description: "Company A is a leading IT company.",
    },
    {
      id: 2,
      name: "Company B",
      description: "Company B is a global tech startup.",
    },
  ];

  const vacancies = [
    {
      id: 1,
      companyId: 1,
      title: "Software Engineer",
      description: "We are hiring a Software Engineer for our backend team.",
      requiredSkills: ["JavaScript", "Node.js", "MongoDB"],
      vacanciesCount: 3,
      experienceYears: 3,
      salaryEstimate: "₹10,00,000 - ₹15,00,000 per annum",
      joiningDays: "Immediate",
      location: "Bangalore",
    },
    {
      id: 2,
      companyId: 1,
      title: "Frontend Developer",
      description: "We are looking for a Frontend Developer with experience in React.",
      requiredSkills: ["React", "HTML", "CSS"],
      vacanciesCount: 2,
      experienceYears: 2,
      salaryEstimate: "₹8,00,000 - ₹12,00,000 per annum",
      joiningDays: "30 days",
      location: "Hyderabad",
    },
    {
      id: 3,
      companyId: 2,
      title: "Data Scientist",
      description: "Join our data science team to work on exciting projects.",
      requiredSkills: ["Python", "Machine Learning", "Statistics"],
      vacanciesCount: 4,
      experienceYears: 4,
      salaryEstimate: "₹12,00,000 - ₹18,00,000 per annum",
      joiningDays: "60 days",
      location: "Mumbai",
    },
  ];

  return (
    <section className="job-vacancies-section" id="job-vacancies">
      <div className="container">
        <h2>Job Vacancies</h2>
        <div className="row">
          {companies.map((company) => (
            <div key={company.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{company.name}</h4>
                  <p className="card-text">{company.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleVacancies(company.id)}
                  >
                    View Job Vacancies
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCompany !== null && (
          <div className="mt-4">
            <h3>Job Vacancies at {companies[selectedCompany - 1].name}</h3>
            {vacancies
              .filter((vacancy) => vacancy.companyId === selectedCompany)
              .map((vacancy) => (
                <div key={vacancy.id} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{vacancy.title}</h5>
                    <p className="card-text">{vacancy.description}</p>
                    <p><strong>Required Skills:</strong> {vacancy.requiredSkills.join(", ")}</p>
                    <p><strong>Vacancies:</strong> {vacancy.vacanciesCount}</p>
                    <p><strong>Experience:</strong> {vacancy.experienceYears} years</p>
                    <p><strong>Salary:</strong> {vacancy.salaryEstimate}</p>
                    <p><strong>Joining Days:</strong> {vacancy.joiningDays}</p>
                    <p><strong>Location:</strong> {vacancy.location}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => showApplyForm(vacancy.id)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {showForm && selectedJob !== null && !registrationCompleted && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="btn btn-close" onClick={hideApplyForm}>
              <i className="fas fa-times"></i>
            </button>
            <ApplicationForm
              job={vacancies.find((vacancy) => vacancy.id === selectedJob)}
              onFormSubmit={handleFormSubmit}
              hideForm={hideApplyForm}
            />
          </div>
        </div>
      )}
      {registrationCompleted && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-body">
              <h3>Registration completed successfully!</h3>
              <p>We will contact you soon.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobVacancies;
