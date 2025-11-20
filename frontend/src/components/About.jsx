import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to my Professional Hub!',
      content: "Hello! I'm Sujan Bhusal, a passionate Cloud Engineer with over 5 years of experience in designing, implementing, and managing cloud infrastructure. I specialize in building scalable, secure, and efficient cloud solutions that drive business growth."
    },
    {
      title: 'Cloud Engineering Expertise',
      content: 'I specialize in AWS, Google Cloud Platform, and Azure. My expertise includes cloud architecture design, infrastructure automation, and implementing best practices for security and compliance across multi-cloud environments.'
    },
    {
      title: 'DevOps Excellence',
      content: "I've worked extensively on CI/CD pipelines, containerization with Docker and Kubernetes, and infrastructure as code using Terraform and CloudFormation. I'm passionate about automating workflows and improving deployment efficiency."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <Card className="about-card">
          <CardContent className="about-content">
            <div className="carousel-content">
              <h3 className="carousel-title">{slides[currentSlide].title}</h3>
              <p className="carousel-text">{slides[currentSlide].content}</p>
            </div>
            
            <div className="carousel-controls">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="carousel-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
