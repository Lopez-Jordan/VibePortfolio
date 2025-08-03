import React from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Navigation />
      <Landing />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App
