
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useViewportSize } from '@/hooks/use-mobile';

const Hero = () => {
  const { width } = useViewportSize();
  const isMobileView = width < 768;
  
  return (
    <section 
      id="home" 
      className="min-h-[80vh] sm:min-h-[90vh] flex items-center py-8 sm:py-12 md:py-16 bg-white relative"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center">
          <div className="md:col-span-7 space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-highlight mb-1 sm:mb-2 fade-in font-luxury italic text-sm sm:text-base">Hi, my name is</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-foreground font-luxury animate-fadeIn">
              Charan Tejayadav
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mb-4 sm:mb-6 font-luxury animate-slideUp">
              Building exceptional digital experiences
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl fade-in-slow leading-relaxed">
              I'm a specialized web developer focused on creating stunning, responsive applications
              and integrating cutting-edge AI technologies for modern business solutions.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 fade-in-slower pt-3 sm:pt-4">
              <a href="#projects" className="group">
                <Button className="bg-white border-2 border-highlight text-highlight hover:bg-highlight/5 font-luxury shadow-button hover:shadow-hover transition-all group-hover:translate-x-1 duration-300 text-sm sm:text-base">
                  View My Work <ArrowRight size={isMobileView ? 14 : 16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
              <a href="#contact" className="group">
                <Button className="bg-highlight text-white hover:bg-highlight/90 font-luxury shadow-button hover:shadow-hover transition-all group-hover:translate-y-[-2px] duration-300 text-sm sm:text-base">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 mt-6 md:mt-0">
            <div className="relative animate-float">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full border-4 border-highlight/20 overflow-hidden bg-highlight/5 flex items-center justify-center shadow-soft hover:shadow-hover transition-all transform hover:scale-105 duration-300 cursor-pointer">
                <span className="font-luxury text-highlight text-2xl sm:text-3xl md:text-4xl transform hover:scale-110 transition-all duration-300">CT</span>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-highlight/10 rounded-full z-[-1] animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 bg-highlight/10 rounded-full z-[-1] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-highlight hover:text-highlight/80 transition-colors group">
          <ChevronDown size={isMobileView ? 20 : 24} className="group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
