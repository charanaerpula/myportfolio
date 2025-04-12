
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    console.log('Form submitted');
    alert('Thanks for reaching out! This form is not connected to a backend in this demo.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-typewriter">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <p className="text-foreground mb-6">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-highlight" size={20} />
              <a href="mailto:contact@charantejayadav.com" className="text-foreground hover:text-highlight transition-colors">
                contact@charantejayadav.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <MessageSquare className="text-highlight" size={20} />
              <span className="text-foreground">
                Response time: 24-48 hours
              </span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-foreground font-typewriter">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required
                  className="bg-white border-border/50 focus-visible:ring-highlight"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-foreground font-typewriter">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="bg-white border-border/50 focus-visible:ring-highlight"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-foreground font-typewriter">Subject</label>
              <Input 
                id="subject" 
                placeholder="Subject" 
                required
                className="bg-white border-border/50 focus-visible:ring-highlight"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-foreground font-typewriter">Message</label>
              <Textarea 
                id="message" 
                placeholder="Your message" 
                required
                rows={5}
                className="bg-white border-border/50 focus-visible:ring-highlight resize-none"
              />
            </div>
            
            <Button type="submit" className="bg-highlight text-white hover:bg-highlight/90 w-full sm:w-auto font-typewriter">
              Send Message <Send size={16} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
