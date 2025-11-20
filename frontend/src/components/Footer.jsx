import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Sujan Bhusal</h3>
            <p className="footer-tagline">Cloud Engineer | DevOps Enthusiast</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/suzanvusal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sujan-bhusal14/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:najussalvu@gmail.com"
              className="footer-social-link"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Separator className="footer-separator" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Sujan Bhusal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
