"use client";

import React from 'react';

interface ResumeProps {
  personalInfo: { name: string; email: string; phone: string };
  education: { degree: string; institution: string; year: string }[];
  experience: { jobTitle: string; company: string; duration: string }[];
  skills: string[];
}

const Resume: React.FC<ResumeProps> = ({ personalInfo, education, experience, skills }) => {
  const headerStyle = {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  };

  const sectionStyle = {
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const sectionTitleStyle = {
    color: '#2c3e50',
    textDecoration: 'underline',
  };

  const itemStyle = {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
  };

  const skillsListStyle = {
    listStyle: 'disc',
    paddingLeft: '20px',
  };

  return (
    <div>
      <h1 style={headerStyle}>{personalInfo.name}</h1>
      <p style={{ fontFamily: 'Arial, sans-serif' }}>Email: {personalInfo.email}</p>
      <p style={{ fontFamily: 'Arial, sans-serif' }}>Phone: {personalInfo.phone}</p>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Education:</h2>
        {education.map((edu, idx) => (
          <div key={idx} style={itemStyle}>
            <p>{edu.degree} from {edu.institution} ({edu.year})</p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Work Experience:</h2>
        {experience.map((exp, idx) => (
          <div key={idx} style={itemStyle}>
            <p>{exp.jobTitle} at {exp.company} - {exp.duration}</p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Skills:</h2>
        <ul style={skillsListStyle}>
          {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Resume;

