import React from "react";
import "./Contact.css";   // ✔ This file must exist in same folder

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="Prince">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
