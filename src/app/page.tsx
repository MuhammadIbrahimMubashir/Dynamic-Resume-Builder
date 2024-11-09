"use client";

import { useState } from 'react';
import ResumeForm from '../app/components/resumeform';
import Resume from '../app/components/resume';

interface ResumeData {
  personalInfo: { name: string; email: string; phone: string };
  education: { degree: string; institution: string; year: string }[];
  experience: { jobTitle: string; company: string; duration: string }[];
  skills: string[];
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  // Handle form submission to capture and set resume data
  const handleFormSubmit = (data: ResumeData) => {
    setResumeData(data);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }} className='bg-gray-800'>
      <title>Dynamic Resume Builder</title>
      <u><strong><i><b><h1>Dynamic Resume Builder:-</h1></b></i></strong></u>
      <ResumeForm onSubmit={handleFormSubmit} />
      
      {/* Conditionally render the Resume component */}
      {resumeData && (
        <div style={{ marginTop: '40px' }}>
          <u><b><i><h2>Generated Resume</h2></i></b></u>
          <Resume {...resumeData} />
        </div>
      )}
    </div>
  );
}
