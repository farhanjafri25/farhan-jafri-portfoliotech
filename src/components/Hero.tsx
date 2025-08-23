import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail, Building2, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePicture from "@/assets/profile-picture.jpg";
import { SOCIAL_LINKS } from "@/lib/constants";

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
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-glow">
                <AvatarImage src={profilePicture} alt="Mohd Farhan Jafri" />
                <AvatarFallback className="text-2xl font-bold">MFJ</AvatarFallback>
              </Avatar>
            </div>
            
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
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary/10"
                onClick={() => window.open(SOCIAL_LINKS.github, '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary/10"
                onClick={() => window.open(SOCIAL_LINKS.linkedin, '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary/10"
                onClick={() => window.open(`mailto:${SOCIAL_LINKS.email}`, '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="flex justify-center items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Briefcase className="h-4 w-4" />
              <span>Previously worked at:</span>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open('https://aqueralabs.com', '_blank')}
              >
                <Building2 className="h-5 w-5 mr-2" />
                AqueraLabs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open('https://www.hoodapp.in', '_blank')}
              >
                <Building2 className="h-5 w-5 mr-2" />
                Hood
              </Button>
            </div>
          </div>
          
          {/* <Button 
            variant="ghost" 
            size="icon" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;