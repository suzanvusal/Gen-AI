import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi! I am</p>
            <h1 className="hero-name">Sujan Bhusal</h1>
            <p className="hero-title">Cloud Engineer | DevOps Enthusiast | AWS Certified</p>
            <p className="hero-description">
              Passionate about designing, implementing, and managing scalable cloud infrastructure.
              Over 5 years of experience in cloud engineering and DevOps practices.
            </p>
            
            <div className="hero-actions">
              <Button onClick={scrollToContact} size="lg" className="cta-button">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <div className="social-links">
                <a
                  href="https://github.com/suzanvusal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujan-bhusal14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
