import React from "react";
import "./ContactUs.css";

const ContactUs = () => (
  <div className="contact-us">
    <h1>Contact Us</h1>
    <section>
      <h2>Address</h2>
      <p>
        Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
      </p>
      <div className="map-container">
        <iframe
          title="School Location"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.172348870827!2d-122.0818319846811!3d37.38605197982547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f3b63f9b6b%3A0x1cf9f0f9f44f6f5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1622518402132!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
    <section>
      <h2>Phone</h2>
      <p>+1 (123) 456-7890</p>
    </section>
    <section>
      <h2>Email</h2>
      <p>info@springdale.edu</p>
    </section>
    <section>
      <h2>Contact Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  </div>
);

export default ContactUs;
