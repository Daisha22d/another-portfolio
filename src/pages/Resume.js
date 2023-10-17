import React from 'react';
import resumePDF from '../assets/DDD.pdf';
import '../pages/Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <div className="pdf-container">
        <embed src={resumePDF} type="application/pdf" width="100%" height="450px" />
      </div>
    </div>
  );
}
