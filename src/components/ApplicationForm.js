import React, { useState } from "react";

const ApplicationForm = ({ job, onFormSubmit, hideForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    skills: "",
    expectedJoiningDate: "",
    noticePeriod: "",
    expectedCTC: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can submit the form data to Firebase Firestore or any other backend for processing
    console.log("Form Data:", formData);
    // After form submission, reset the form data and indicate that registration is completed
    setFormData({
      name: "",
      education: "",
      skills: "",
      expectedJoiningDate: "",
      noticePeriod: "",
      expectedCTC: "",
      location: "",
    });
    onFormSubmit();
  };

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Apply for {job.title}</h5>
          <button type="button" className="close" onClick={hideForm}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expectedJoiningDate">Expected Joining Date</label>
              <input
                type="date"
                id="expectedJoiningDate"
                name="expectedJoiningDate"
                value={formData.expectedJoiningDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="noticePeriod">Notice Period</label>
              <input
                type="text"
                id="noticePeriod"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expectedCTC">Expected CTC</label>
              <input
                type="text"
                id="expectedCTC"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
