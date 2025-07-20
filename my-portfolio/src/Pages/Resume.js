// src/Pages/Resume.js
import React from 'react';
import Navbar from '../Components/Navbar';

const Resume = () => {
  return (
    <div style={{ backgroundColor: '#0a192f', minHeight: '100vh', color: '#64ffda' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <h2 style={{ color: '#64ffda' }}>Resume</h2>
        <p style={{ color: '#a8b2d1' }}>
          Here is my updated resume. You can view or download below.
        </p>
        <a
          href="/assets/Mohan_Resume.pdf" // Adjust path as needed
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            backgroundColor: '#64ffda',
            color: '#0a192f',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '8px',
          }}
        >
          View Resume PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
