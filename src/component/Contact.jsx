import React from 'react';
import '../styling/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <p className="location">
          📍 Location: Westlands, Karen, Town
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="map-link"
        >
          View Location on Map
        </a>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Enter your name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="tel"
            placeholder="Enter your phone number"
          />

          <textarea
            placeholder="Write your message"
            rows="5"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;