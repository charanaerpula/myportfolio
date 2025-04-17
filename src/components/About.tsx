
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 animate-fadeIn">
            <h2 className="section-heading font-luxury mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl">About Me</h2>
            <div className="space-y-2 sm:space-y-4 text-foreground/80">
              <p className="text-sm sm:text-base leading-relaxed">
                I'm Charan Tejayadav, a passionate web developer with expertise in building modern, 
                responsive, and functional web applications. I specialize in creating exceptional 
                digital experiences using cutting-edge technologies.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                With a background in full-stack development, I've helped businesses transform their 
                ideas into reality through clean code, intuitive design, and innovative solutions.
              </p>
            </div>
            <div className="mt-4 sm:mt-6">
              <a href="#projects" className="flex items-center gap-1 sm:gap-2 text-highlight hover:text-highlight/80 transition-colors font-luxury text-sm sm:text-base">
                View my work <ArrowDownCircle size={16} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 md:p-6 bg-white shadow-card hover:shadow-hover rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-luxury text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-foreground">Frontend Development</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Creating responsive, interactive user interfaces</p>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 bg-white shadow-card hover:shadow-hover rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-luxury text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-foreground">Backend Development</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Building robust server-side applications</p>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 bg-white shadow-card hover:shadow-hover rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-luxury text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-foreground">AI Integration</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Leveraging AI technologies</p>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 bg-white shadow-card hover:shadow-hover rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-luxury text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-foreground">Consulting</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Providing technical guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
