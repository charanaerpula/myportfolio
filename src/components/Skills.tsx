
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    skills: ["Gemini API", "Lovable", "Versel", "Bolt", "Cursor", "Copilot", "ChatGPT"],
  },
  {
    title: "Other Technologies",
    description: "Additional programming languages and concepts",
    skills: ["WebRTC", "C++ (Basic)", "Payment Integrations", "Socket Programming", "Version Control"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-typewriter">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-white backdrop-blur-sm border border-border/50 hover:border-highlight/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground font-typewriter">{category.title}</CardTitle>
                <CardDescription className="text-foreground/70">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 size={16} className="text-highlight" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
