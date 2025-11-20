import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Shield, Cloud } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      description: 'Demonstrates expertise in designing distributed systems on AWS',
      level: 'Professional'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'AWS Certified Security',
      issuer: 'Amazon Web Services',
      description: 'Validates ability to secure AWS workloads and implement security controls',
      level: 'Specialty'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'AWS Certified DevOps Engineer',
      issuer: 'Amazon Web Services',
      description: 'Demonstrates technical expertise in provisioning, operating, and managing AWS environments',
      level: 'Professional'
    }
  ];

  return (
    <section id="certifications" className="section-wrapper">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <Card key={index} className="certification-card">
              <CardContent className="certification-content">
                <div className="certification-icon">
                  {cert.icon}
                </div>
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-description">{cert.description}</p>
                <Badge variant="outline" className="certification-badge">
                  {cert.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
