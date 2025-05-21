
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
      <FallingLeaves /> {/* Leaves now have z-index 5, which is behind content but above background */}
      <Navbar /> {/* Navbar has its own z-index that should be higher */}
      <main className="relative z-10"> {/* Content has z-index 10, which is higher than leaves */}
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
