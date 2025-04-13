
import React from 'react';
import { CheckCircle2, Code, Database, Globe, Cpu } from 'lucide-react';

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon?: React.ReactNode;
  iconBg?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: ["JavaScript", "React.js", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "Redux"],
    icon: <Code size={28} />,
    iconBg: "bg-blue-50"
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications",
    skills: ["Node.js", "Python", "RESTful APIs", "GraphQL", "Database Design", "Authentication"],
    icon: <Database size={28} />,
    iconBg: "bg-green-50"
  },
  {
    title: "AI & Tooling",
    description: "Leveraging AI and modern development tools",
    skills: ["Gemini API", "Lovable", "Vercel", "Bolt", "Cursor", "Copilot", "ChatGPT"],
    icon: <Cpu size={28} />,
    iconBg: "bg-purple-50"
  },
  {
    title: "Other Technologies",
    description: "Additional programming languages and concepts",
    skills: ["WebRTC", "C++ (Basic)", "Payment Integrations", "Socket Programming", "Version Control"],
    icon: <Globe size={28} />,
    iconBg: "bg-amber-50"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold font-luxury mb-4 text-foreground">Skills & Technologies</h2>
          <div className="h-1 w-24 bg-highlight mx-auto"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to create exceptional web applications.
            Here are some of the key skills I bring to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-border/30 shadow-card hover:shadow-hover transition-all duration-300 hover:border-highlight/30"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon && (
                  <div className={`p-3 rounded-lg ${category.iconBg} text-highlight shadow-sm`}>
                    {category.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-xl text-foreground font-luxury">{category.title}</h3>
                  <p className="text-foreground/70 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-foreground/80 hover-lift p-1 rounded transition-all">
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
