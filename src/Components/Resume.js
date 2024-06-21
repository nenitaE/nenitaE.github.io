import React from 'react';
import { saveAs } from 'file-saver';
import './Resume.css'

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = 'https://nespinosaportfoliobucket.s3.amazonaws.com/Espinosa_Nenita_resume.pdf';
    saveAs(pdfUrl, 'Espinosa_Nenita_Resume.pdf');
  };

  return (
    <button className='resume_button' onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default ResumeDownloadButton;