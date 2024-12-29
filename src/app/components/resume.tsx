"use client";

import React, { CSSProperties } from 'react';

interface ResumeProps {
  personalInfo: { name: string; email: string; phone: string };
  education: { degree: string; institution: string; year: string }[];
  experience: { jobTitle: string; company: string; duration: string }[];
  skills: string[];
}

const Resume: React.FC<ResumeProps> = ({ personalInfo, education, experience, skills }) => {
  const containerStyle: CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '800px',
    margin: '30px auto',
  };

  const headerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  const nameStyle: CSSProperties = {
    fontSize: '2.5rem',
    margin: '0',
  };

  const contactInfoStyle: CSSProperties = {
    color: '#e0e0e0',
    fontSize: '1rem',
    marginTop: '5px',
  };

  const sectionStyle: CSSProperties = {
    margin: '20px 0',
  };

  const sectionTitleStyle: CSSProperties = {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '15px',
    fontWeight: '600',
    borderBottom: '2px solid #6a11cb',
    display: 'inline-block',
    paddingBottom: '5px',
  };

  const cardStyle: CSSProperties = {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
  };

  const skillsListStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '0',
    padding: '0',
    listStyle: 'none',
  };

  const skillChipStyle: CSSProperties = {
    backgroundColor: '#6a11cb',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '16px',
    fontSize: '0.9rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={nameStyle}>{personalInfo.name}</h1>
        <p style={contactInfoStyle}>Email: {personalInfo.email}</p>
        <p style={contactInfoStyle}>Phone: {personalInfo.phone}</p>
      </header>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Education</h2>
        {education.map((edu, idx) => (
          <div key={idx} style={cardStyle}>
            <p>
              <strong>{edu.degree}</strong> from {edu.institution} ({edu.year})
            </p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Work Experience</h2>
        {experience.map((exp, idx) => (
          <div key={idx} style={cardStyle}>
            <p>
              <strong>{exp.jobTitle}</strong> at {exp.company} - {exp.duration}
            </p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Skills</h2>
        <ul style={skillsListStyle}>
          {skills.map((skill, idx) => (
            <li key={idx} style={skillChipStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;

