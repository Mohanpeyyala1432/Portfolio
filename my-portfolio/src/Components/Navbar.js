// src/Components/Navbar.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const scrollToSection = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); // Slight delay for page render
};

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ textDecoration: 'none', color: '#64ffda' }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => handleNavClick('about')}
            style={{ textDecoration: 'none', color: '#64ffda' }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => handleNavClick('skills')}
            style={{ textDecoration: 'none', color: '#64ffda' }}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => handleNavClick('projects')}
            style={{ textDecoration: 'none', color: '#64ffda' }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            style={{ textDecoration: 'none', color: '#64ffda' }}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => handleNavClick('contact')}
            style={{ textDecoration: 'none', color: '#64ffda' }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
