
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Live Audio Streaming Platform",
    description: "Developed a real-time audio streaming platform using WebRTC technology, enabling high-quality, low-latency audio broadcasts for various use cases.",
    technologies: ["WebRTC", "React", "Node.js", "Socket.io", "TypeScript"],
    featured: true,
  },
  {
    title: "Retail POS System",
    description: "Created a comprehensive point-of-sale system with integrated payment gateway solutions for retail businesses, improving transaction efficiency and inventory management.",
    technologies: ["JavaScript", "React", "Payment Gateways", "Database", "Redux"],
    featured: true,
  },
  {
    title: "Online Learning Platform",
    description: "Developed a virtual classroom environment for schools with live sessions, interactive tools, and content management features for teachers and students.",
    technologies: ["Next.js", "TypeScript", "WebRTC", "Real-time DB", "Authentication"],
    featured: true,
  },
  {
    title: "AI-Powered Chatbots",
    description: "Implemented intelligent conversational agents using Google's Gemini API, providing automated customer support and information retrieval for businesses.",
    technologies: ["Python", "Gemini API", "NLP", "React", "API Integration"],
    featured: true,
  },
  {
    title: "AI Logo Generator",
    description: "Built a tool that leverages AI to generate unique and customized logo designs for businesses based on their industry, preferences, and brand values.",
    technologies: ["React", "TypeScript", "AI APIs", "Canvas", "SVG"],
    featured: true,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-muted/5 border-t border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-luxury mb-3 sm:mb-4 text-foreground">Featured Projects</h2>
          <div className="h-1 w-16 sm:w-24 bg-highlight mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-foreground/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-white border border-border/30 shadow-card transition-all duration-500 overflow-hidden
                ${hoveredProject === index ? 'shadow-hover border-highlight/30 transform -translate-y-1 sm:-translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-r from-highlight/80 to-highlight/30 w-full flex items-center justify-center relative overflow-hidden group">
                <div className={`shimmer absolute inset-0 ${hoveredProject === index ? 'animate-shimmer' : ''}`}></div>
                <span className="text-white text-xl sm:text-2xl font-luxury relative z-10 transform transition-transform duration-300 group-hover:scale-125">{project.title.charAt(0)}</span>
              </div>
              <CardHeader className="pb-1 sm:pb-2 p-3 sm:p-4 md:p-6">
                <CardTitle className="text-sm sm:text-base md:text-xl text-foreground font-luxury">{project.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-foreground/80 mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 sm:pt-1 p-3 sm:p-4 md:p-6">
                <Collapsible open={expandedProject === index} onOpenChange={() => {
                  setExpandedProject(expandedProject === index ? null : index);
                }}>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-white border-highlight/50 text-foreground/80 shadow-sm hover:border-highlight hover:bg-highlight/5 transition-colors cursor-default text-[10px] sm:text-xs py-0 h-5 sm:h-6">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <CollapsibleTrigger asChild>
                        <Badge variant="outline" className="bg-white border-highlight/50 text-foreground/80 shadow-sm hover:border-highlight hover:bg-highlight/5 transition-all cursor-pointer text-[10px] sm:text-xs py-0 h-5 sm:h-6">
                          +{project.technologies.length - 2}
                        </Badge>
                      </CollapsibleTrigger>
                    )}
                  </div>
                  <CollapsibleContent className="animate-accordion-down">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                      {project.technologies.slice(2).map((tech, techIndex) => (
                        <Badge key={techIndex + 2} variant="outline" className="bg-white border-highlight/50 text-foreground/80 shadow-sm text-[10px] sm:text-xs py-0 h-5 sm:h-6">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-1 sm:pt-2 border-t border-border/20 mt-1 sm:mt-2 p-3 sm:p-4 md:p-6">
                <Button variant="ghost" size="sm" className="text-highlight hover:text-highlight/80 hover:bg-highlight/5 font-luxury p-0 h-auto group text-xs sm:text-sm">
                  Details <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <div className="flex space-x-2 sm:space-x-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-highlight transition-colors transform hover:scale-110 transition-transform">
                      <Github size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-highlight transition-colors transform hover:scale-110 transition-transform">
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/5 font-luxury shadow-button hover:shadow-hover transition-all group text-xs sm:text-sm h-8 sm:h-10">
            View All Projects <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
