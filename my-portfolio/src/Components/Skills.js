import React from 'react';
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiBootstrap,
} from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'Java', icon: <FaJava />, level: 90 },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 85 },
  { name: 'React.js', icon: <FaReact />, level: 80 },
  { name: 'MySQL', icon: <SiMysql />, level: 85 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
  { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
  { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
  { name: 'Git & GitHub', icon: <FaGithub />, level: 80 },
];

const Skills = () => {
  return (
    <div
      id="skills"
      style={{
        scrollMarginTop: '60px',
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
          marginBottom: '2rem',
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          justifyItems: 'center',
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#112240',
              padding: '1.2rem',
              borderRadius: '12px',
              width: '150px',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ width: '80px', margin: '0 auto' }}>
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: '#64ffda',
                  pathColor: '#64ffda',
                  trailColor: '#233554',
                })}
              />
            </div>
            <div style={{ fontSize: '1.5rem', color: '#64ffda', marginTop: '1rem' }}>
              {skill.icon}
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
