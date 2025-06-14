import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      observer.observe(projectsElement);
    }

    return () => {
      if (projectsElement) {
        observer.unobserve(projectsElement);
      }
    };
  }, []);

  const projects = [
    
    {
      id: 2,
      title: 'Conference Day Management System',
      description: 'Web system for managing international conference activities including schedules, speaker profiles, and session registrations.',
      image: '🎤',
      technologies: ['React', 'Express', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/Dj0083/conferenceday-website.git',
      
    },
    {
      id: 3,
      title: 'Blood Donation App',
      description: 'Mobile app with dashboards for users and admins, allowing appointment scheduling, donor registration, and calendar slot tracking.',
      image: '🩸',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      category: 'fullstack',
      github: 'https://github.com/Dj0083/blood-unity.git',
      live: '#'
    },
    
    
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Responsive app using OpenWeather API and Chart.js to display real-time weather stats in a sleek dashboard.',
      image: '🌦️',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API'],
      category: 'frontend',
      github: 'https://github.com/Dj0083/weatherApp.git',
      
    },
    {
      id: 7,
      title: 'Task Management App',
      description: 'A Kanban-style task management app with team collaboration, drag-and-drop UI, and real-time updates.',
      image: '📝',
      technologies: ['React', 'Firebase', 'Material UI'],
      category: 'frontend',
      github: 'https://github.com/Dj0083/task-tracker.git',
     
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                border: 'none',
                background: filter === filterItem.id 
                  ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                  : 'var(--bg-secondary)',
                color: filter === filterItem.id ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div className="project-image">
                {project.image}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
  href={project.github} 
  className="project-link"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>📁</span>
  Code
</a>

                  <a 
                    href={project.live} 
                    className="project-link"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Live demo would open here');
                    }}
                  >
                    <span>🚀</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.6s ease 0.8s'
        }}>
          <p style={{ 
            color: 'var(--text-secondary)', 
            marginBottom: '1.5rem',
            fontSize: '1.1rem'
          }}>
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/dj-creation"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              alert('Redirecting to GitHub...');
            }}
          >
            View All Projects on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
