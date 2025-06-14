import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">J.Dulani</span>
            <br />
            <h1>Welcome to my portfolio!</h1>
            <span className="typewriter">{currentText}</span>
            <span className="cursor">|</span>
          </h1>
          <p>
            I’m an aspiring Front-End Developer passionate about building creative, user-friendly, and accessible web experiences that not only look great but also provide intuitive and meaningful interactions for users across all devices.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <span>→</span>
            </button>

            {/* ✅ Replaces old fake download function */}
            <a 
              href="/CV.pdf" 
              download="Dulani-Jayakody-CV.pdf"
              className="btn btn-secondary"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typewriter {
          display: inline-block;
          min-height: 1.2em;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .highlight {
          color: #007BFF;
        }

        .btn {
          padding: 12px 24px;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-primary {
          background-color: #007BFF;
          color: white;
          margin-right: 12px;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .btn-secondary {
          background-color: #28a745;
          color: white;
        }

        .btn-secondary:hover {
          background-color: #1e7e34;
        }

        .hero {
          padding: 60px 20px;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: auto;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .hero-text p {
          font-size: 1.1rem;
          margin: 20px 0;
        }

        .hero-buttons {
          margin-top: 30px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
