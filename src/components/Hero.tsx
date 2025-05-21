
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useViewportSize } from '@/hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const {
    width
  } = useViewportSize();
  const isMobileView = width < 768;
  return <section id="home" className="min-h-[80vh] sm:min-h-[90vh] flex items-center py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-12 w-16 h-16 bg-highlight/5 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/4 right-12 w-24 h-24 bg-highlight/5 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-12 left-1/3 w-12 h-12 bg-highlight/5 rounded-full animate-pulse hidden md:block"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-7 space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-highlight mb-1 sm:mb-2 fade-in font-luxury italic text-xs sm:text-sm">
          </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground font-luxury animate-fadeIn">
              Charan Tejayadav
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground mb-3 sm:mb-4 font-luxury animate-slideUp">
              Building exceptional digital experiences
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 max-w-2xl fade-in-slow leading-relaxed">
              I'm a specialized web developer focused on creating stunning, responsive applications
              and integrating cutting-edge AI technologies for modern business solutions.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 fade-in-slower pt-2 sm:pt-3">
              <a href="#projects" className="group">
                <Button className="bg-white border-2 border-highlight text-highlight hover:bg-highlight/5 font-luxury shadow-button hover:shadow-hover transition-all group-hover:translate-x-1 duration-300 text-xs sm:text-sm p-2 sm:p-3 h-auto">
                  View My Work <ArrowRight size={isMobileView ? 12 : 14} className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
              <a href="#contact" className="group">
                <Button className="bg-highlight text-white hover:bg-highlight/90 font-luxury shadow-button hover:shadow-hover transition-all group-hover:translate-y-[-2px] duration-300 text-xs sm:text-sm p-2 sm:p-3 h-auto">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
          
          <div className="col-span-5">
            <div className="relative animate-float">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto border-2 sm:border-4 border-highlight/20 overflow-hidden bg-highlight/5 flex items-center justify-center shadow-soft hover:shadow-hover transition-all transform hover:scale-105 duration-300 cursor-pointer">
                <AvatarImage 
                  src="/lovable-uploads/7d9b026a-a53d-4396-984a-beddf31a57ee.png" 
                  alt="Charan Tejayadav" 
                  className="object-cover w-full h-full"
                />
                <AvatarFallback className="font-luxury text-highlight text-xl sm:text-2xl md:text-3xl transform hover:scale-110 transition-all duration-300">CT</AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-highlight/10 rounded-full z-[-1] animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-3 sm:-left-3 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-highlight/10 rounded-full z-[-1] animate-pulse"></div>
              
              {/* Additional decorative elements around avatar */}
              <div className="absolute top-1/2 right-[-20px] w-3 h-3 bg-highlight rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 left-[-15px] w-4 h-4 bg-highlight/30 rounded-full animate-ping" style={{animationDelay: "0.5s"}}></div>
              <div className="absolute top-1/4 left-[-10px] w-2 h-2 bg-highlight/60 rounded-full animate-ping" style={{animationDelay: "1s"}}></div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-dashed border-highlight/10 rounded-full -m-4 sm:-m-6 md:-m-8 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-highlight hover:text-highlight/80 transition-colors group">
          <ChevronDown size={isMobileView ? 16 : 20} className="group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>;
};
export default Hero;
