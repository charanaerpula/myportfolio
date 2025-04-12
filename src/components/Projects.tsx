
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-typewriter">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border border-border/50 hover:border-highlight/50 transition-all duration-300 hover:shadow-md"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground font-typewriter">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-white border-highlight text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-highlight transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-highlight transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
