import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate on your next backend project
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">farhan.jafri@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground text-sm">+91 XXXXX XXXXX</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground text-sm">Bangalore, India</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="hover:bg-primary/10">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary/10">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary/10">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium mb-3">Current Status</h4>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                    Available for Opportunities
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input placeholder="Your Name" className="bg-input/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="bg-input/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Project Discussion" className="bg-input/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project requirements..." 
                      className="bg-input/50 min-h-[120px]" 
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-card/50 backdrop-blur border-border shadow-card inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Looking for a Backend Engineer?</h3>
              <p className="text-muted-foreground mb-4">
                I'm experienced in building scalable systems that handle high traffic and complex data processing.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Node.js Expert</Badge>
                <Badge variant="outline">Scalable Architecture</Badge>
                <Badge variant="outline">AI Integration</Badge>
                <Badge variant="outline">Performance Optimization</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;