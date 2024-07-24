import React from "react";
import "./Admissions.css";

const Admissions = () => (
  <div className="admissions">
    <h1>Admissions</h1>
    <section>
      <h2>Process</h2>
      <p>
        Admission forms are available for download. Submit the completed form
        along with required documents at the school office.
      </p>
      <a
        href="/path/to/admission-form.pdf"
        className="btn btn-primary"
        download
      >
        Download Admission Form
      </a>
    </section>
    <section>
      <h2>Criteria</h2>
      <p>
        Admission is based on merit and availability of seats. Entrance tests
        may be conducted for certain grades.
      </p>
    </section>
    <section>
      <h2>Important Dates</h2>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </section>
  </div>
);

export default Admissions;
