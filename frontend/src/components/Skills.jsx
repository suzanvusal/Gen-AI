import React, { useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Box, Layers } from 'lucide-react';
import WireEffect from './WireEffect';

const Skills = () => {
  useEffect(() => {
    // Initialize wire effect after component mounts
    const timer = setTimeout(() => {
      const event = new Event('skillsLoaded');
      window.dispatchEvent(event);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  const skills = [
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      title: 'AWS',
      description: 'Expertise in EC2, S3, Lambda, RDS, and more.',
      color: '#FF9900'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      title: 'Azure',
      description: 'Proficient in Azure services like Virtual Machines, App Services, and Azure DevOps.',
      color: '#0089D6'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      title: 'Google Cloud',
      description: 'Proficient in GCP services like Compute Engine, BigQuery, and Kubernetes Engine.',
      color: '#4285F4'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      title: 'Docker',
      description: 'Skilled in containerization and orchestration with Docker and Kubernetes.',
      color: '#2496ED'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      title: 'Git & CI/CD',
      description: 'Proficient in version control and continuous integration/continuous deployment pipelines.',
      color: '#F05032'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      title: 'Infrastructure as Code',
      description: 'Experience with Terraform and CloudFormation for infrastructure automation.',
      color: '#623CE4'
    },
    {
      logo: 'https://www.svgrepo.com/show/374167/terraform.svg',
      title: 'Security & Compliance',
      description: 'Proficient in AWS GuardDuty, Security Hub, and compliance frameworks like NIST, CIS, and HIPAA.',
      color: '#0066CC'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      title: 'Databases',
      description: 'Experience with Amazon RDS, MySQL, Postgres, DynamoDB, and MongoDB.',
      color: '#336791'
    },
    {
      logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      title: 'DevSecOps',
      description: 'Skilled in SonarQube, OWASP, and integrating security into CI/CD pipelines.',
      color: '#00ADD8'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      title: 'JavaScript',
      description: 'Experienced in front-end development and building interactive web applications.',
      color: '#F7DF1E'
    },
    {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      title: 'Python',
      description: 'Skilled in data analysis, machine learning, and backend development with Python.',
      color: '#3776AB'
    }
  ];

  return (
    <section id="skills" className="section-wrapper bg-gray-50">
      {/* DevOps Background Elements */}
      <div className="skills-background-elements">
        <Box className="bg-element element-1" />
        <Layers className="bg-element element-2" />
      </div>
      
      {/* Connection Lines Canvas */}
      <canvas id="wire-canvas" className="wire-canvas"></canvas>
      
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="skill-card" 
              data-skill-index={index}
            >
              <CardContent className="skill-content">
                <div className="skill-logo-wrapper">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.title} logo`}
                    className="skill-logo"
                  />
                  {/* Wire connection points */}
                  <div className="wire-point wire-point-1"></div>
                  <div className="wire-point wire-point-2"></div>
                  <div className="wire-point wire-point-3"></div>
                  <div className="wire-point wire-point-4"></div>
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
