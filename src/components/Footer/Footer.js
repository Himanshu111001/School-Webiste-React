import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="bg-light text-center text-lg-start">
    <div className="container p-4">
      <p>
        &copy; {new Date().getFullYear()} Springdale Public School. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
