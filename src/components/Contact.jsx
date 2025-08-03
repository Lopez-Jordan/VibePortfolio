import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const contactInfo = {
    email: "jordanlopezemail@gmail.com",
    phone: "(949) 278-4478",
    linkedin: "www.linkedin.com/in/jordanlopez123"
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </div>
              <div className="contact-item">
                <h3>LinkedIn</h3>
                <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
