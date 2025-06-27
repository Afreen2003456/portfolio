import React from 'react';
import './App.css';

// Import all the portfolio sections
import { Navigation } from './components/ui/navigation';
import { HeroSection } from './components/ui/hero-section';
import { AboutSection } from './components/ui/about-section';
import { SkillsSection } from './components/ui/skills-section';
import { ExperienceSection } from './components/ui/experience-section';
import { ContactSection } from './components/ui/contact-section';
import { Footer } from './components/ui/footer';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
