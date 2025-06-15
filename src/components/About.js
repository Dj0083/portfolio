import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  

  return (
    <section className="section" id="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <img
  src={`${process.env.PUBLIC_URL}/profile.jpg`}
  alt="Profile"
  className="about-image"
  style={{
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.6s ease'
  }}
/>

          </div>

          <div className="about-text">
            
            <p>
              Hello! I’m <strong>J. Dulani</strong>, an aspiring Front-End Developer with a passion for building clean,
              modern, and user-friendly web experiences. I’m currently studying Information Technology, where I’ve developed
              a solid foundation in both design and development.
              <br /><br />
              I love transforming ideas into real, interactive websites and applications that are not just functional but visually
              engaging and intuitive. My main tools include <strong>HTML5, CSS3, JavaScript, React.js</strong>, and <strong>Tailwind CSS</strong>.
              I enjoy working with design tools like <strong>Figma</strong> and <strong>Adobe XD</strong>.
              <br /><br />
              In addition to coding, I have a strong creative side. I enjoy designing layouts, creating visual elements,
              and working on projects that let me blend logic with design. I always aim to create interfaces that make a lasting impression.
              <br /><br />
              I'm currently preparing for internship opportunities where I can apply what I've learned, gain hands-on experience,
              and grow both technically and professionally. I'm excited to join a collaborative team, take on new challenges,
              and contribute to meaningful projects.
              <br /><br />
              <strong>Let’s connect and create something awesome together!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
