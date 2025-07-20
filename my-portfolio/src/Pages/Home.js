import React from 'react';
import profilePic from '../Assets/Profile.JPG';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';


const Home = () => {
  return (
    <div
      id="home"
      style={{
        scrollMarginTop: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4rem 2rem',
        backgroundColor: '#0a192f',
        color: 'white',
        flexWrap: 'wrap',
      }}
    >
      {/* Left – Photo */}
      <div
        style={{
          flex: '1 1 40%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={profilePic}
          alt="Peyyala Mohan"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '20px',
            border: '2px solid #64ffda',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
          }}
        />
      </div>

      {/* Right – Intro */}
      <div
        style={{
          flex: '1 1 55%',
          textAlign: 'left',
          padding: '1rem',
        }}
      >
        {/* Header Typing */}
        <TypeAnimation
          sequence={["Hi, I'm Peyyala Mohan", 1500]}
          wrapper="h1"
          speed={10}
          repeat={0}
          cursor={false}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
          }}
        />

        {/* Paragraph Typing – Starts after delay */}
        <TypeAnimation
          sequence={[
            2500,
            "A passionate Java Full Stack Developer skilled in React.js, Spring Boot, and MySQL. I love building clean, efficient, and scalable web applications.",
          ]}
          wrapper="p"
          speed={50}
          repeat={0}
          cursor={false}
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            marginTop: '1rem',
            maxWidth: '700px',
          }}
        />

       {/* Social Icons */}
<div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
  <a href="https://www.instagram.com/software_synthakay?igsh=MTYwdzQ4c2tjc3JjZQ==" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} color="#E1306C" />
  </a>
  <a href="https://www.linkedin.com/in/mohan-peyyala-in/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} color="#0A66C2" />
  </a>
  <a href="https://github.com/Mohanpeyyala1432" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} color="white" />
  </a>
  <a href="https://www.youtube.com/@software_synthakay" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={30} color="#1DA1F2" />
  </a>
</div>

<div style={{
  marginTop: '2rem',
  padding: '0.75rem 1.5rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#64ffda',
  border: '2px solid #64ffda',
  borderRadius: '8px',
  display: 'inline-block',
}}>
  More About Me
</div>


      </div>
    </div>
  );
};

export default Home;
