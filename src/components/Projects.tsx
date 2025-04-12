
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  
  return (
    <section id="projects" className="py-24 bg-muted/5 border-t border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-typewriter mb-4 text-foreground">Featured Projects</h2>
          <div className="h-1 w-24 bg-highlight mx-auto"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white border border-border/30 hover:shadow-xl transition-all duration-300 hover:border-highlight/30 overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="h-3 bg-highlight w-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-foreground font-typewriter">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-white border-highlight/50 text-foreground/80">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="bg-white border-highlight/50 text-foreground/80">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2">
                <Button variant="ghost" size="sm" className="text-highlight hover:text-highlight/80 hover:bg-highlight/5 font-typewriter p-0 h-auto">
                  View Details <ArrowRight size={14} className="ml-1" />
                </Button>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-highlight transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-highlight transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/5 font-typewriter">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
