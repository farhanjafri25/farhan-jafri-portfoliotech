import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              Available for New Opportunities
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-float">
              Mohd Farhan Jafri
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Backend Engineer specializing in scalable systems, AI integration, 
              and high-performance applications
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Node.js', 'NestJS', 'Redis', 'AWS', 'ElasticSearch'].map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            
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
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;