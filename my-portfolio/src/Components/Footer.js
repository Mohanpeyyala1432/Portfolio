import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0a192f', color: 'white', textAlign: 'center', padding: '1rem' }}>
      <p>&copy; {new Date().getFullYear()} Peyyala Mohan. All rights reserved.</p>
      <div style={{ marginTop: '0.5rem' }}>
        <a
          href="https://github.com/Mohanpeyyala1432"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#64ffda', marginRight: '1rem' }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mohan-peyyala-in"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#64ffda' }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
