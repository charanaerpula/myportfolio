
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          <div className="md:col-span-5">
            <a href="#home" className="text-xl font-bold text-foreground font-typewriter inline-block mb-4">
              <span className="text-highlight">{'<'}</span>
              Charan
              <span className="text-highlight">{'/'}</span>
              <span className="text-highlight">{'>'}</span>
            </a>
            <p className="text-foreground/70 max-w-md">
              Web developer specializing in building exceptional digital experiences. 
              Currently focused on creating accessible, responsive web applications.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-typewriter mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-highlight transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-highlight transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-highlight transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/70 hover:text-highlight transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-highlight transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-typewriter mb-4 text-foreground">Get In Touch</h3>
            <p className="text-foreground/70 mb-4">
              Have a question or want to work together?
            </p>
            <a 
              href="mailto:contact@charantejayadav.com" 
              className="text-highlight hover:text-highlight/80 transition-colors font-medium"
            >
              contact@charantejayadav.com
            </a>
          </div>
        </div>
        
        <div className="py-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm font-typewriter mb-4 md:mb-0">
            © {new Date().getFullYear()} Charan Tejayadav. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-highlight text-white shadow-lg hover:bg-highlight/90 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
