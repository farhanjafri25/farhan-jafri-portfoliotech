import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
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

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="space-y-6 md:space-y-4">
            {/* Profile Picture */}
            <div className="flex justify-center mt-8 mb-8 md:mt-0 md:mb-8">
              <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary/30 shadow-glow hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                <AvatarImage
                  src="/profile-picture-converted.jpg"
                  alt="Mohd Farhan Jafri"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl md:text-4xl font-bold">MFJ</AvatarFallback>
              </Avatar>
            </div>
            
            <Badge variant="secondary" className="mb-4 md:mb-6 px-4 py-2 text-sm mx-4">
              Available for New Opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-float px-4">
              Mohd Farhan Jafri
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Backend Engineer specializing in scalable systems, AI integration,
              and high-performance applications
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6 px-4">
              {['Node.js', 'NestJS', 'Redis', 'AWS', 'ElasticSearch'].map((tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8">
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
          <div className="flex flex-col items-center gap-4 pt-8 md:pt-6 pb-8 md:pb-0">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Briefcase className="h-4 w-4" />
              <span>Previously worked at:</span>
            </div>
            <div className="flex gap-4 md:gap-6 items-center">
              <button
                className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://aquera.com/', '_blank')}
              >
                <img
                  src="/aquera_logo.jpeg"
                  alt="AqueraLabs"
                  className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </button>
              <button
                className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://www.hood.live/', '_blank')}
              >
                <img
                  src="/joinhoodapp_logo.jpeg"
                  alt="Hood"
                  className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </button>
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