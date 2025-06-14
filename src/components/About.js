import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/profile.jpg" 
              alt="About me"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease'
              }}
            />
          </div>

          <div className="about-text">
            <h3>Crafting Digital Excellence</h3>
            <p>
              Hello! I’m <strong>J. Dulani</strong>, an aspiring Front-End Developer with a passion for building clean,
      modern, and user-friendly web experiences. I’m currently studying Information Technology, where I’ve developed
      a solid foundation in both design and development.<br /><br />

      I love transforming ideas into real, interactive websites and applications that are not just functional but visually
      engaging and intuitive. My main tools include <strong>HTML5, CSS3, JavaScript, React.js</strong>, and <strong>Tailwind CSS</strong>.
       I enjoy working with design tools like
      <strong> Figma</strong> and <strong>Adobe XD</strong>.<br /><br />

      In addition to coding, I have a strong creative side. I enjoy designing layouts, creating visual elements,
      and working on projects that let me blend logic with design. I always aim to create interfaces that make a lasting impression.<br /><br />

      I'm currently preparing for internship opportunities where I can apply what I've learned, gain hands-on experience,
      and grow both technically and professionally. I'm excited to join a collaborative team, take on new challenges,
      and contribute to meaningful projects.<br /><br />

      <strong>Let’s connect and create something awesome together!</strong></p>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;