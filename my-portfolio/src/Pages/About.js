import React from 'react';
import profilePic from '../Assets/Profile.JPG'; // ✅ make sure the path is correct

const About = () => {
  return (
    <div
      id="about"
      style={{
        scrollMarginTop: '80px',
        padding: '4rem 2rem',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Left – About Text */}
      <div style={{ flex: '1 1 55%', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#64ffda', marginBottom: '1.5rem' }}>
          About Me
        </h2>

        <p>
          As a passionate Java Full Stack Developer with a strong foundation in building web applications using Java, Spring Boot, React.js, and MySQL.
        </p>

        

        <p style={{ marginTop: '1rem' }}>
          My academic project focused on an IIoT-based smart grid energy management system, integrating smart technology with sustainable solutions.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Although my internships were in electrical and industrial domains, they helped shape my discipline, teamwork, and problem-solving mindset — all of which I bring into software development.
        </p>

        <p style={{ marginTop: '1rem' }}>
          I’m currently focused on improving my backend development skills and contributing to innovative full-stack projects in a collaborative environment.
        </p>
      </div>

      {/* Right – Profile Image */}
      <div
        style={{
          flex: '1 1 35%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
        }}
      >
        <img
          src={profilePic}
          alt="Peyyala Mohan"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '15px',
            border: '2px solid #64ffda',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          }}
        />
      </div>
    </div>
  );
};

export default About;
