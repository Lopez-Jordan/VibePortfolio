import React from 'react';
import '../styles/Projects.css';
import projectImage from '../assets/UCshot.png';
import flowDiagram from '../assets/flow.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Retrieval Augmented Generation AI",
      github: "https://github.com/Lopez-Jordan/UC-Chatbot",
      liveUrl: "https://www.ucadmissionsai.com/",
      image: projectImage,
      description: "An AI-powered chatbot platform designed to assist with UC admissions, featuring advanced language processing and interactive essay feedback capabilities.",
      technologies: [
        "Supabase vector DB",
        "React.js",
        "Node.js",
        "MySQL",
        "Express.js",
        "LangChain.js",
        "Google OAuth2.0",
        "Stripe.js",
        "OpenAI GPT models"
      ],
      features: [
        "Login/Signup functionality",
        "OpenAI Chatbot integration",
        "AI essay feedback",
        "In-app purchases",
        "Prompt engineering",
        "Similarity search",
        "Few-shot learning",
        "Chain of thought reasoning"
      ]
    },
    {
      title: "AWS Reconciliation Dashboard",
      description: "A sophisticated dashboard system for data reconciliation and visualization using AWS services, automating the monitoring of data integrity between external vendor files and internal systems.",
      image: flowDiagram,
      technologies: [
        "AWS S3",
        "AWS Lambda",
        "AWS CloudWatch",
        "AWS EventBridge",
        "SharePoint",
        "Splunk"
      ],
      features: [
        "Automated file processing via MFT",
        "Serverless data reconciliation",
        "Real-time monitoring & alerts",
        "CloudWatch logging integration",
        "Splunk dashboard visualization",
        "Automated error detection"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-content">
                {project.image && (
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                )}
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                      Visit Live Site
                    </a>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="technologies">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
