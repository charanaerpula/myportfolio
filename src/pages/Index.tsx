
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About';
import FallingLeaves from '@/components/FallingLeaves';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <FallingLeaves />
      <Navbar />
      <main className="relative z-10"> {/* Content has z-index 10 */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
