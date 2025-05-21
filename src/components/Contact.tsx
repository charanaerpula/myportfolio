
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    console.log('Form submitted');
    alert('Thanks for reaching out! This form is not connected to a backend in this demo.');
  };

  return (
    <section id="contact" className="py-24 bg-muted/5 border-t border-border/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-32 h-32 bg-highlight/5 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 left-12 w-24 h-24 bg-highlight/5 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-highlight/10 rounded-full animate-ping hidden md:block" 
           style={{animationDelay: "1.2s"}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-highlight/20 rounded-full animate-ping hidden md:block" 
           style={{animationDelay: "0.5s"}}></div>
      
      {/* Floating leaf for additional decoration */}
      <div className="absolute top-1/3 right-12 w-12 h-12 hidden md:block opacity-30 animate-float" style={{animationDuration: "7s"}}>
        <img 
          src="/lovable-uploads/eaf6ccc7-491f-443b-9300-c6c2eb2dc7d7.png"
          alt="Decorative leaf"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold font-luxury mb-4 text-foreground">Get In Touch</h2>
          <div className="h-1 w-24 bg-highlight mx-auto"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-border/30 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-highlight/10 rounded-full"></div>
              
              <h3 className="text-xl text-foreground font-luxury mb-6 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-highlight/10 text-highlight shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:contact@charantejayadav.com" className="text-foreground/80 hover:text-highlight transition-colors">
                      contact@charantejayadav.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-highlight/10 text-highlight shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <a href="tel:+1234567890" className="text-foreground/80 hover:text-highlight transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-highlight/10 text-highlight shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-foreground/80">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-highlight/10 text-highlight shadow-sm">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Response Time</h4>
                    <p className="text-foreground/80">
                      Usually within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-border/30 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 space-y-6 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-highlight/10 rounded-full"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-foreground font-luxury">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required
                    className="bg-white border-border/50 focus-visible:ring-highlight"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-foreground font-luxury">Email</label>
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
                <label htmlFor="subject" className="text-sm text-foreground font-luxury">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  required
                  className="bg-white border-border/50 focus-visible:ring-highlight"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-foreground font-luxury">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  required
                  rows={5}
                  className="bg-white border-border/50 focus-visible:ring-highlight resize-none"
                />
              </div>
              
              <Button type="submit" className="bg-highlight text-white hover:bg-highlight/90 font-luxury w-full sm:w-auto shadow-button hover:shadow-hover transition-all">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
