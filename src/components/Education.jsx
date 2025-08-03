import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: "B.S. Mathematics & Economics",
      institution: "University of California, Santa Cruz",
      type: "Degree"
    },
    {
      degree: "Full Stack Software Development",
      institution: "University of California, Berkeley",
      type: "Professional Certification"
    },
    {
      degree: "AWS Solutions Architect - Associate",
      institution: "Amazon Web Services",
      type: "Professional Certification",
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-content">
                <span className="education-type">{edu.type}</span>
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                {edu.details && (
                  <div className="certification-details">
                    <ul>
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
