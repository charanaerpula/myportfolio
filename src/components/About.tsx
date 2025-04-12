
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="section-heading font-typewriter mb-8">About Me</h2>
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                I'm Charan Tejayadav, a passionate web developer with expertise in building modern, 
                responsive, and functional web applications. I specialize in creating exceptional 
                digital experiences using cutting-edge technologies.
              </p>
              <p className="leading-relaxed">
                With a background in full-stack development, I've helped businesses transform their 
                ideas into reality through clean code, intuitive design, and innovative solutions. 
                My approach combines technical expertise with creative problem-solving to deliver 
                products that exceed expectations.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, I'm continuously learning about new technologies and 
                exploring ways to integrate AI into web development workflows to create more 
                intelligent and efficient applications.
              </p>
            </div>
            <div className="mt-8">
              <a href="#projects" className="flex items-center gap-2 text-highlight hover:text-highlight/80 transition-colors font-typewriter">
                View my work <ArrowDownCircle size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white shadow-lg rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all">
                <h3 className="font-typewriter text-lg mb-2 text-foreground">Frontend Development</h3>
                <p className="text-sm text-foreground/70">Creating responsive, interactive user interfaces with modern frameworks</p>
              </div>
              
              <div className="p-6 bg-white shadow-lg rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all">
                <h3 className="font-typewriter text-lg mb-2 text-foreground">Backend Development</h3>
                <p className="text-sm text-foreground/70">Building robust server-side applications and APIs</p>
              </div>
              
              <div className="p-6 bg-white shadow-lg rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all">
                <h3 className="font-typewriter text-lg mb-2 text-foreground">AI Integration</h3>
                <p className="text-sm text-foreground/70">Leveraging AI technologies to enhance web applications</p>
              </div>
              
              <div className="p-6 bg-white shadow-lg rounded-lg border border-highlight/10 hover:border-highlight/30 transition-all">
                <h3 className="font-typewriter text-lg mb-2 text-foreground">Consulting</h3>
                <p className="text-sm text-foreground/70">Providing technical guidance and solutions for businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
