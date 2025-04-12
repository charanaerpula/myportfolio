
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-slideUp">
          <p className="text-highlight font-mono mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Charan Tejayadav
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
            I build exceptional web experiences.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            I'm a web developer specialized in creating stunning digital experiences. 
            Currently, I'm focused on building accessible, responsive web applications
            and integrating cutting-edge AI technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10">
                View My Work <ArrowRight size={16} className="ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button className="bg-highlight text-navy-950 hover:bg-highlight/90">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
