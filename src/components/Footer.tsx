
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { useViewportSize } from '@/hooks/use-mobile';

const Footer = () => {
  const { width } = useViewportSize();
  const isMobileView = width < 640;
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white border-t border-border/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-12">
          <div className="md:col-span-5">
            <a href="#home" className="text-lg sm:text-xl font-bold text-foreground font-luxury inline-block mb-3 sm:mb-4">
              <span className="text-highlight">{'<'}</span>
              Charan
              <span className="text-highlight">{'/'}</span>
              <span className="text-highlight">{'>'}</span>
            </a>
            <p className="text-sm sm:text-base text-foreground/70 max-w-md">
              Web developer specializing in building exceptional digital experiences. 
              Currently focused on creating accessible, responsive web applications.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-base sm:text-lg font-luxury mb-3 sm:mb-4 text-foreground">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:block sm:space-y-2 text-sm sm:text-base">
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
            <h3 className="text-base sm:text-lg font-luxury mb-3 sm:mb-4 text-foreground">Get In Touch</h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4">
              Have a question or want to work together?
            </p>
            <a 
              href="mailto:contact@charantejayadav.com" 
              className="text-highlight hover:text-highlight/80 transition-colors font-medium text-sm sm:text-base break-all"
            >
              contact@charantejayadav.com
            </a>
          </div>
        </div>
        
        <div className="py-4 sm:py-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/70 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Charan Tejayadav. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={isMobileView ? 16 : 18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={isMobileView ? 16 : 18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors hover:scale-110 transform duration-200"
              aria-label="Twitter"
            >
              <Twitter size={isMobileView ? 16 : 18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-highlight transition-colors hover:scale-110 transform duration-200"
              aria-label="Instagram"
            >
              <Instagram size={isMobileView ? 16 : 18} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-2 sm:p-3 rounded-full bg-highlight text-white shadow-button hover:shadow-hover hover:bg-highlight/90 transition-all focus:outline-none animate-pulse"
            aria-label="Scroll to top"
          >
            <ArrowUp size={isMobileView ? 16 : 18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
