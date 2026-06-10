import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-background bg-grid-pattern overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center space-y-8 md:space-y-10">
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-center mt-8 mb-4 md:mt-0">
              <Avatar className="w-36 h-36 md:w-44 md:h-44 border border-border shadow-md hover:scale-105 transition-all duration-300">
                <AvatarImage
                  src="/profile-picture-converted.jpg"
                  alt="Mohd Farhan Jafri"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl md:text-4xl font-serif italic font-normal text-muted-foreground">mfj</AvatarFallback>
              </Avatar>
            </div>

            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors text-xs font-sans uppercase tracking-widest px-3 py-1.5">
              Available for New Opportunities
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-normal text-foreground px-4 tracking-tight leading-none">
              Mohd Farhan Jafri
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 font-sans leading-relaxed">
              Backend Engineer specializing in <span className="font-serif italic text-foreground">scalable systems</span>, <span className="font-serif italic text-foreground">AI integration</span>, and <span className="font-serif italic text-foreground">high-performance applications</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6 px-4">
              {['Node.js', 'NestJS', 'Redis', 'AWS', 'ElasticSearch'].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-card border-border text-foreground/85 text-xs font-sans tracking-wide px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/95 hover:scale-[1.02] shadow-md transition-all duration-300 font-sans font-medium px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-border text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                onClick={() => window.open(SOCIAL_LINKS.github, '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                onClick={() => window.open(SOCIAL_LINKS.linkedin, '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                onClick={() => window.open(`mailto:${SOCIAL_LINKS.email}`, '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center gap-4 pt-12 md:pt-10">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-sans uppercase tracking-widest">
              <Briefcase className="h-4 w-4 text-muted-foreground/80" />
              <span>Previously worked at</span>
            </div>
            <div className="flex gap-4 md:gap-6 items-center">
              <button
                className="group relative overflow-hidden rounded-lg bg-card border border-border p-4 hover:bg-background transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                onClick={() => window.open('https://aquera.com/', '_blank')}
              >
                <img
                  src="/aquera_logo.jpeg"
                  alt="AqueraLabs"
                  className="h-7 w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </button>
              <button
                className="group relative overflow-hidden rounded-lg bg-card border border-border p-4 hover:bg-background transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                onClick={() => window.open('https://www.linkedin.com/company/joinhoodapp/', '_blank')}
              >
                <img
                  src="/joinhoodapp_logo.jpeg"
                  alt="Hood"
                  className="h-7 w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;