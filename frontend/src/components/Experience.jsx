import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cloud Engineer',
      company: 'Treadmill Factory Inc.',
      duration: 'Nov 2021 – Present',
      location: 'Toronto, CA',
      responsibilities: [
        'Designed and implemented AWS Organizations and Control Tower for scalable multi-account structures',
        'Developed Service Control Policies (SCPs) for security and compliance',
        'Integrated AWS Security services like AWS Config, CloudTrail, GuardDuty, and Security Hub',
        'Automated infrastructure provisioning using Terraform and AWS CloudFormation',
        'Designed CI/CD pipelines with GitHub Actions and Jenkins for multi-account deployments',
        'Implemented centralized logging and monitoring using AWS CloudTrail, CloudWatch, and Splunk',
        'Hardened web applications with AWS WAF and Azure Application Gateway',
        'Conducted performance optimization and cost management using AWS Cost Explorer and Budgets'
      ]
    },
    {
      title: 'Cloud Infrastructure Engineer',
      company: 'Mphasis Tech Foundation',
      duration: 'Oct 2019 – Oct 2021',
      location: 'Kathmandu, NP',
      responsibilities: [
        'Designed and implemented secure, scalable cloud architectures using AWS services',
        'Automated infrastructure provisioning using Terraform and AWS CloudFormation',
        'Set up centralized logging using ELK Stack and AWS CloudWatch',
        'Established CI/CD pipelines using Jenkins for infrastructure deployment',
        'Migrated servers and databases from on-premises to AWS using AWS Migration Services',
        'Automated ML model deployment using Kubeflow, MLflow, and SageMaker Pipelines'
      ]
    },
    {
      title: 'Computer Teacher',
      company: 'Amar Ma. Bhidhyalaya',
      duration: 'April 2020 - Jan 2021',
      location: 'Butwal-19, NP',
      responsibilities: [
        'Participated in the USAID Project for Rural Schools, teaching computer science and coding to government school children',
        'Enhanced digital literacy and technical skills of students',
        'Provided personalized support to ensure students grasp key concepts and thrive in coding',
        'Created engaging, interactive learning experiences promoting a collaborative and growth-oriented classroom'
      ]
    }
  ];

  return (
    <section id="experience" className="section-wrapper bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Card key={index} className="experience-card">
              <CardHeader>
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="experience-title">{exp.title}</CardTitle>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-meta">
                      {exp.duration} • {exp.location}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
