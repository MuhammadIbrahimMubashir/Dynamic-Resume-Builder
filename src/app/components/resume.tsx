"use client";

import React from 'react';

interface ResumeProps {
  personalInfo: { name: string; email: string; phone: string };
  education: { degree: string; institution: string; year: string }[];
  experience: { jobTitle: string; company: string; duration: string }[];
  skills: string[];
}

const Resume: React.FC<ResumeProps> = ({ personalInfo, education, experience, skills }) => {
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>

      <u><h2>Education:-</h2></u>
      {education.map((edu, idx) => (
        <div key={idx}>
          <p>{edu.degree} from {edu.institution} ({edu.year})</p>
        </div>
      ))}

      <u><h2>Work Experience:-</h2></u>
      {experience.map((exp, idx) => (
        <div key={idx}>
          <p>{exp.jobTitle} at {exp.company} - {exp.duration}</p>
        </div>
      ))}

      <u><h2>Skills:-</h2></u>
      <ul>
        {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default Resume;
