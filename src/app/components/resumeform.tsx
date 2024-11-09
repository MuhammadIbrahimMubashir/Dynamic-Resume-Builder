"use client";

import { useState } from 'react';

type PersonalInfo = { name: string; email: string; phone: string };
type Education = { degree: string; institution: string; year: string };
type Experience = { jobTitle: string; company: string; duration: string };

interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState<Education[]>([{ degree: '', institution: '', year: '' }]);
  const [experience, setExperience] = useState<Experience[]>([{ jobTitle: '', company: '', duration: '' }]);
  const [skills, setSkills] = useState<string[]>(['']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ personalInfo, education, experience, skills });
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#d6f5f4' }}>Personal Information:-</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={personalInfo.name} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} 
        style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={personalInfo.email} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} 
        style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input 
        type="tel" 
        placeholder="Phone" 
        value={personalInfo.phone} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} 
        style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      />

      <h2 style={{ color: '#d6f5f4' }}>Education:-</h2>
      {education.map((edu, idx) => (
        <div key={idx} style={{ marginBottom: '15px' }}>
          <input 
            type="text" 
            placeholder="Degree" 
            value={edu.degree} 
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[idx].degree = e.target.value;
              setEducation(newEducation);
            }} 
            style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input 
            type="text" 
            placeholder="Institution" 
            value={edu.institution} 
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[idx].institution = e.target.value;
              setEducation(newEducation);
            }} 
            style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input 
            type="text" 
            placeholder="Year" 
            value={edu.year} 
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[idx].year = e.target.value;
              setEducation(newEducation);
            }} 
            style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      ))}

      <h2 style={{ color: '#d6f5f4' }}>Work Experience:-</h2>
      {experience.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: '15px' }}>
          <input 
            type="text" 
            placeholder="Job Title" 
            value={exp.jobTitle} 
            onChange={(e) => {
              const newExperience = [...experience];
              newExperience[idx].jobTitle = e.target.value;
              setExperience(newExperience);
            }} 
            style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input 
            type="text" 
            placeholder="Company" 
            value={exp.company} 
            onChange={(e) => {
              const newExperience = [...experience];
              newExperience[idx].company = e.target.value;
              setExperience(newExperience);
            }} 
            style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input 
            type="text" 
            placeholder="Duration" 
            value={exp.duration} 
            onChange={(e) => {
              const newExperience = [...experience];
              newExperience[idx].duration = e.target.value;
              setExperience(newExperience);
            }} 
            style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      ))}

      <h2 style={{ color: '#d6f5f4' }}>Skills:-</h2>
      {skills.map((skill, idx) => (
        <input 
          key={idx} 
          type="text" 
          placeholder="Skill" 
          value={skill} 
          onChange={(e) => {
            const newSkills = [...skills];
            newSkills[idx] = e.target.value;
            setSkills(newSkills);
          }} 
          style={{ padding: '8px', margin: '5px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      ))}

      <button 
        type="submit" 
        style={{
          padding: '10px 15px', 
          marginTop: '20px', 
          backgroundColor: '#333', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer'
        }}
      >
        Generate Resume
      </button>
    </form>
  );
};

export default ResumeForm;
