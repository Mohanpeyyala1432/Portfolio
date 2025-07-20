import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        scrollMarginTop: '20px',
        padding: '4rem 2rem',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#64ffda', marginBottom: '1.5rem' }}>
        Contact Me
      </h2>

      

      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#8892b0', fontSize: '1rem' }}>
  I'm currently open to internship or full-time roles as a Java Full Stack Developer. Feel free to contact me through the form or social links below!
</p>

    {/* SOCIAL ICONS */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '1.8rem',
    marginTop: '1rem',      // Reduced
    marginBottom: '1rem',   // Reduced
  }}
>
  <a href="mailto:mohanpeyyala2000@gmail.com" style={{ color: '#64ffda' }}><FaEnvelope /></a>
  <a href="https://linkedin.com/in/mohan-peyyala-in/" target="_blank" rel="noreferrer" style={{ color: '#64ffda' }}><FaLinkedin /></a>
  <a href="https://github.com/Mohanpeyyala1432" target="_blank" rel="noreferrer" style={{ color: '#64ffda' }}><FaGithub /></a>
  <a href="https://x.com/PeyyalaMohan" target="_blank" rel="noreferrer" style={{ color: '#64ffda' }}><FaTwitter /></a>
  <a href="https://instagram.com/software_synthakay" target="_blank" rel="noreferrer" style={{ color: '#64ffda' }}><FaInstagram /></a>
</div>

{/* OR SEPARATOR */}
<p
  style={{
    color: '#8892b0',
    margin: '0.5rem 0 1rem', // Tight spacing top and bottom
    fontWeight: 'bold',
    fontSize: '1rem',
  }}
>
  — or —
</p>

      {/* CONTACT FORM */}
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}
      >
        <label>Name</label>
        <input type="text" name="name" required style={inputStyle} />

        <label>Email</label>
        <input type="email" name="email" required style={inputStyle} />

        <label>Message</label>
        <textarea name="message" rows="5" required style={inputStyle} />

        <button type="submit" style={buttonStyle}>Send Message</button>  
      </form>
      

      
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #64ffda',
  backgroundColor: '#112240',
  color: '#ccd6f6',
  marginBottom: '1rem',
};

const buttonStyle = {
  marginTop: '1rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#64ffda',
  color: '#0a192f',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Contact;
