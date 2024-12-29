"use client";

import React from 'react';

interface ResumeProps {
  personalInfo: { name: string; email: string; phone: string };
  education: { degree: string; institution: string; year: string }[];
  experience: { jobTitle: string; company: string; duration: string }[];
  skills: string[];
}

const Resume: React.FC<ResumeProps> = ({ personalInfo, education, experience, skills }) => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    width: '80%',
    margin: '20px auto',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const sectionStyle = {
    marginBottom: '20px',
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
    <div style={containerStyle}>
      <h1 style={headerStyle}>{personalInfo.name}</h1>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>

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
