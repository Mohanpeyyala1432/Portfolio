import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Employee Management System',
    description:
      'A full-stack web app to manage employee data with CRUD operations. Built using Spring Boot and React.js.',
    tech: 'React.js, Spring Boot, MySQL, REST APIs',
    github: 'https://github.com/your-username/employee-management-system',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Responsive and animated portfolio website built to showcase my skills, projects, and contact details.',
    tech: 'React.js, CSS3, Framer Motion, React Icons',
    github: 'https://github.com/Mohanpeyyala1432',
    live: 'https://your-portfolio.netlify.app',
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      style={{
        scrollMarginTop: '120px',
        padding: '4rem 2rem',
        backgroundColor: '#0a192f',
        color: '#ccd6f6',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          color: '#64ffda',
          textAlign: 'center',
          marginBottom: '2.5rem',
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#112240',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#64ffda', fontSize: '1.5rem', marginBottom: '1rem' }}>
              {project.title}
            </h3>

            <p>{project.description}</p>

            <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <div style={{ marginTop: '1rem' }}>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    marginRight: '1rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: '#64ffda',
                    color: '#0a192f',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.6rem 1.2rem',
                  backgroundColor: '#0a192f',
                  color: '#64ffda',
                  border: '1px solid #64ffda',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
