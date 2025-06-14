import React, { useState, useEffect } from 'react';

const Skills = () => {
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

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🌐',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 92 },
        
        
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Django', level: 78 },
        
        
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🛠️',
      skills: [
        { name: 'MongoDB', level: 85 },
        
        { name: 'Git', level: 92 },
        
        { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 82 }
      ]
    }
  ];

  return (
    <section className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-category"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease ${categoryIndex * 0.2}s`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
              </div>

              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.6s ease 0.8s'
        }}>
          <h3 style={{ 
            color: 'var(--primary-color)', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            Always Learning
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Technology evolves rapidly, and I'm committed to staying current with the latest 
            trends and best practices. I regularly explore new frameworks, attend tech conferences, 
            and contribute to open-source projects to expand my skill set.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;