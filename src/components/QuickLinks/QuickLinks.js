import React from "react";
import { Link } from "react-router-dom";
import "./QuickLinks.css";

const QuickLinks = () => (
  <div className="quick-links">
    <h2>Quick Links</h2>
    <div className="links-container">
      <Link to="/about-us" className="link-item">
        About Us
      </Link>
      <Link to="/academics" className="link-item">
        Academics
      </Link>
      <Link to="/admissions" className="link-item">
        Admissions
      </Link>
      <Link to="/faculty" className="link-item">
        Faculty
      </Link>
      <Link to="/students" className="link-item">
        Students
      </Link>
      <Link to="/gallery" className="link-item">
        Gallery
      </Link>
      <Link to="/contact-us" className="link-item">
        Contact Us
      </Link>
    </div>
  </div>
);

export default QuickLinks;
