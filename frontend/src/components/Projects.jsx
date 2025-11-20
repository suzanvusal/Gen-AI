import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Migration for E-commerce Platform',
      description: 'Led the migration of a monolithic e-commerce platform to AWS, streamlining infrastructure and reducing downtime by 30%. Successfully implemented cloud-native solutions to enhance system scalability, reliability, and performance.',
      tags: ['AWS', 'EC2', 'S3', 'RDS', 'Migration']
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Designed and implemented an efficient CI/CD pipeline using Jenkins and Docker to automate the software delivery process, reducing deployment time by 50%. Integrated automated testing and continuous deployment.',
      tags: ['Jenkins', 'Docker', 'CI/CD', 'Automation']
    },
    {
      title: 'Serverless Data Processing',
      description: 'Developed a highly scalable serverless data processing system using AWS Lambda and S3, handling millions of records daily with minimal latency. Implemented event-driven triggers for efficient operations.',
      tags: ['AWS Lambda', 'S3', 'Serverless', 'Event-Driven']
    },
    {
      title: 'Centralized Logging & Monitoring',
      description: 'Designed and implemented a centralized logging and monitoring solution using AWS CloudTrail, CloudWatch, and Splunk to provide real-time visibility into system performance and security.',
      tags: ['CloudTrail', 'CloudWatch', 'Splunk', 'Monitoring']
    },
    {
      title: 'Heart Disease Prediction ML Model',
      description: 'Developed a hybrid machine learning model for cardiovascular disease prediction using algorithms like Linear Regression, Decision Trees, Random Forest, and KNN. Implemented a Voting Classifier to enhance accuracy.',
      tags: ['Python', 'Machine Learning', 'Healthcare', 'Data Science']
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <CardHeader>
                <CardTitle className="project-title">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="project-tag">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
