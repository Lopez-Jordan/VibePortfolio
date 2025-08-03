import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import Typewriter from 'typewriter-effect';
import profilePic from '../assets/profile.jpg';
import '../styles/Landing.css';

const Landing = () => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [springProps, api] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "Technical", items: ["HTML/CSS", "JavaScript/Node.js", "SQL & NoSQL DB's", "React.js", "AWS", "LangChain.js", "Splunk"] },
    { category: "Product Delivery", items: ["Agile/Scrum", "Jira", "Testing", "QA", "Solutions Architecture", "End to End Project Management"] },
    { category: "Client/Business Facing", items: ["Product Demos", "Solution Scoping & Architecture", "Translating Tech to Business Value"] }
  ];

  return (
    <div className="landing-container" ref={containerRef}>
      <div className="background-gradient"></div>
      <div className="hero-section">
        <div className="profile-content animate">
          <Tilt
            className="profile-image-container"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <img 
              src={profilePic} 
              alt="Jordan Lopez" 
              className="profile-image"
              onLoad={() => setIsLoaded(true)}
            />
            <div className="image-overlay"></div>
          </Tilt>
          <animated.div className="intro-text" style={springProps}>
            <h1>Jordan Lopez</h1>
            <h2>
              <Typewriter
                options={{
                  strings: ['Solutions Engineer', 'Full Stack Developer', 'Tech Innovator'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </h2>
            <p className="tagline">Building innovative solutions with cutting-edge technology</p>
            <div className="cta-buttons">
              <button className="primary-btn">View Projects</button>
              <button className="secondary-btn">Contact Me</button>
            </div>
          </animated.div>
        </div>
        
        <div className="skills-preview animate">
          {skills.map((skillGroup, index) => (
            <animated.div 
              key={index} 
              className="skill-group"
              style={{
                ...springProps,
                delay: index * 100,
              }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
