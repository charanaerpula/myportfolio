
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon?: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: ["JavaScript", "React.js", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications",
    skills: ["Node.js", "Python", "RESTful APIs", "GraphQL", "Database Design", "Authentication"],
  },
  {
    title: "AI & Tooling",
    description: "Leveraging AI and modern development tools",
    skills: ["Gemini API", "Lovable", "Vercel", "Bolt", "Cursor", "Copilot", "ChatGPT"],
  },
  {
    title: "Other Technologies",
    description: "Additional programming languages and concepts",
    skills: ["WebRTC", "C++ (Basic)", "Payment Integrations", "Socket Programming", "Version Control"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/10 border-y border-border/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-typewriter mb-12">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-border/30 hover:border-highlight/30 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <h3 className="text-xl text-foreground font-typewriter mb-2">{category.title}</h3>
              <p className="text-foreground/70 mb-6">{category.description}</p>
              <div className="grid grid-cols-2 gap-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 size={14} className="text-highlight flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
