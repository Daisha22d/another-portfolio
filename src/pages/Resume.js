import React from 'react';
import resumePDF from '../../src/res08.pdf';
import '../pages/Resume.css';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <embed src={resumePDF} type="application/pdf" width="150%" height="600px" />
    </div>
  );
}
