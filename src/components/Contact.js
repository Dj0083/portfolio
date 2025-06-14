import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'dulanijayakody596@gmail.com',
      href: 'dulanijayakody596@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '0711960738',
      href: 'tel:+94 711960738'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'No.443, Bellapitiya Junction,Horana',
      
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/feed/',
      href: 'https://www.linkedin.com/feed/'
    }
  ];

  return (
    <section className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease'
            }}>
              <h3>Let's Work Together</h3>
              <p>
                I'm always excited to work on new projects and collaborate with 
                passionate people. Whether you have a project in mind or just want 
                to say hello, feel free to reach out!
              </p>
              <p>
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can bring your ideas to life.
              </p>
            </div>

            <div style={{
              marginTop: '2rem'
            }}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="contact-item"
                  style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.1 + 0.3}s`
                  }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {info.label}
                    </div>
                    <a 
                      href={info.href}
                      style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none'
                      }}
                      onClick={(e) => {
                        if (info.href === '#') {
                          e.preventDefault();
                        }
                      }}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <form 
              onSubmit={handleSubmit}
              style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease 0.3s'
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or just say hello!"
                  rows="5"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{ 
                      display: 'inline-block',
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      marginRight: '0.5rem'
                    }}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;