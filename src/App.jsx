import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const App = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="bg-gray-900 text-white">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;