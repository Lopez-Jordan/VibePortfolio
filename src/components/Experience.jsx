import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Solutions Engineer I - II",
      company: "Capital Group",
      period: "2023 - Present",
      achievements: [
        "Led 36+ development teams through 3+ ETF launches by coordinating end-to-end delivery, helping expand into global markets and increase assets under management.",
        "Resolved 5+ critical production incidents through root-cause analysis and custom analytics tools, averting costly legal risks and protecting the company's reputation.",
        "Collaborated with business stakeholders to gather requirements, built critical software solutions, and trained team members—eliminating 100+ hours of manual work per week",
        "Designed and deployed a high-visibility reconciliation dashboard to monitor critical data integrity, provisioning the team's first AWS and Splunk environments"
      ]
    },
    {
      title: "Program Manager Intern",
      company: "Digital Motors",
      period: "2020 - 2021",
      achievements: [
        "Led software team stand-ups (scrum) and wrote 50+ development JIRA user stories w/ acceptance criteria which optimized workflows",
        "Worked with development teams to build underlying logic of application with user-stories and wireframing which led to successful deployment",
        "Pitched product to 5 potential investors which led to increased subscriptions and overall revenue"
      ]
    },
    {
      title: "Tech Consultant",
      company: "Gesher Group Consulting",
      period: "2020 - 2023",
      achievements: [
        "Managed teams of 5-10 with Agile practices at high professional standard leading to quality deliverables",
        "Made improvements in SEO, company website (WordPress), customer acquisition, overall market reach",
        "Implemented Google analytics, SWOT analysis, Porters 5 forces, etc. for general market research"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
