import React from 'react';
import { Card, CardContent } from './ui/card';
import { Cloud, Server, Database, Lock, Code, GitBranch, Container, Workflow, Box, Layers } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Cloud className="skill-icon" />,
      title: 'AWS',
      description: 'Expertise in EC2, S3, Lambda, RDS, and more.',
      color: '#FF9900'
    },
    {
      icon: <Cloud className="skill-icon" />,
      title: 'Azure',
      description: 'Proficient in Azure services like Virtual Machines, App Services, and Azure DevOps.',
      color: '#0089D6'
    },
    {
      icon: <Cloud className="skill-icon" />,
      title: 'Google Cloud',
      description: 'Proficient in GCP services like Compute Engine, BigQuery, and Kubernetes Engine.',
      color: '#4285F4'
    },
    {
      icon: <Container className="skill-icon" />,
      title: 'Docker & Kubernetes',
      description: 'Skilled in containerization and orchestration with Docker and Kubernetes.',
      color: '#2496ED'
    },
    {
      icon: <GitBranch className="skill-icon" />,
      title: 'Git & CI/CD',
      description: 'Proficient in version control and continuous integration/continuous deployment pipelines.',
      color: '#F05032'
    },
    {
      icon: <Code className="skill-icon" />,
      title: 'Infrastructure as Code',
      description: 'Experience with Terraform and CloudFormation for infrastructure automation.',
      color: '#623CE4'
    },
    {
      icon: <Lock className="skill-icon" />,
      title: 'Security & Compliance',
      description: 'Proficient in AWS GuardDuty, Security Hub, and compliance frameworks like NIST, CIS, and HIPAA.',
      color: '#DD0031'
    },
    {
      icon: <Database className="skill-icon" />,
      title: 'Databases',
      description: 'Experience with Amazon RDS, MySQL, Postgres, DynamoDB, and MongoDB.',
      color: '#336791'
    },
    {
      icon: <Workflow className="skill-icon" />,
      title: 'DevSecOps',
      description: 'Skilled in SonarQube, OWASP, and integrating security into CI/CD pipelines.',
      color: '#00ADD8'
    },
    {
      icon: <Server className="skill-icon" />,
      title: 'JavaScript',
      description: 'Experienced in front-end development and building interactive web applications.',
      color: '#F7DF1E'
    },
    {
      icon: <Code className="skill-icon" />,
      title: 'Python',
      description: 'Skilled in data analysis, machine learning, and backend development with Python.',
      color: '#3776AB'
    }
  ];

  return (
    <section id="skills" className="section-wrapper bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="skill-content">
                <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-description">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
