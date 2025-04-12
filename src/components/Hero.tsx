
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex items-center py-16 bg-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <p className="text-highlight font-typewriter mb-2 fade-in">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground font-typewriter typewriter">
              Charan Tejayadav
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-6 font-typewriter typewriter-slow">
              Building exceptional digital experiences
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl fade-in-slow leading-relaxed">
              I'm a specialized web developer focused on creating stunning, responsive applications
              and integrating cutting-edge AI technologies for modern business solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 fade-in-slower pt-4">
              <a href="#projects">
                <Button className="bg-white border-2 border-highlight text-highlight hover:bg-highlight/5 font-typewriter">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-highlight text-white hover:bg-highlight/90 font-typewriter">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full border-4 border-highlight/20 overflow-hidden bg-highlight/5 flex items-center justify-center">
                <span className="font-typewriter text-highlight text-4xl">CT</span>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-highlight/10 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-highlight/10 rounded-full z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-highlight hover:text-highlight/80 transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
