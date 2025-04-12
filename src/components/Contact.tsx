
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    console.log('Form submitted');
    alert('Thanks for reaching out! This form is not connected to a backend in this demo.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-typewriter mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="space-y-6">
            <Card className="bg-white border border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-foreground font-typewriter">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80">
                  I'm currently open to new opportunities and collaborations. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-highlight" size={18} />
                  <a href="mailto:contact@charantejayadav.com" className="text-foreground hover:text-highlight transition-colors">
                    contact@charantejayadav.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-highlight" size={18} />
                  <span className="text-foreground/80">
                    Response time: 24-48 hours
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 border border-border/30 rounded-lg">
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
            
            <Button type="submit" className="bg-highlight text-white hover:bg-highlight/90 font-typewriter">
              Send Message <Send size={16} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
