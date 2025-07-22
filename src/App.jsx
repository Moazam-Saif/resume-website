import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-navy text-cream py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-cormorant-regular">&copy; 2025 Moazam Saif. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;