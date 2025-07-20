// src/Pages/HomePage.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Home from './Home';
import About from './About';
import Skills from '../Components/Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
