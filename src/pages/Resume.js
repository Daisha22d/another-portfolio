import React from 'react';
import resumePDF from '../../src/entryres.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <embed src={resumePDF} type="application/pdf" width="100%" height="600px" />
    </div>
  );
} 
