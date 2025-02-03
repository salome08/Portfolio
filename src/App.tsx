import React from 'react';
import { Background } from './components/Background';
import { Hero, Projects, Skills, Contact } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen">
      <Background />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}