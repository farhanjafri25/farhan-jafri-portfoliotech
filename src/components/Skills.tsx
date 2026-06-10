import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Star } from "lucide-react";
import techSkillsImage from "@/assets/tech_skills.png";

const Skills = () => {
  // Helper function to convert percentage to star rating (1-5 stars)
  const getStarRating = (level: number) => {
    if (level >= 90) return 5;
    if (level >= 80) return 4;
    if (level >= 70) return 3;
    if (level >= 60) return 2;
    return 1;
  };

  // Helper function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? "fill-primary text-primary" 
            : "text-muted-foreground/30"
        } transition-colors duration-300`}
      />
    ));
  };

  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "NestJS", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "ExpressJS", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "Redis", level: 95 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "DynamoDB", level: 75 },
        { name: "Neo4j", level: 70 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "AWS RDS", level: 80 },
        { name: "AWS S3", level: 85 },
        { name: "ElasticSearch", level: 80 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: [
        { name: "TypeORM", level: 85 },
        { name: "FFMPEG", level: 75 },
        { name: "Redis Pipeline", level: 90 },
        { name: "TCP Sockets", level: 80 },
        { name: "REST APIs", level: 95 }
      ]
    }
  ];

  const certifications = [
    "Backend System Architecture",
    "Microservices Design Patterns",
    "Redis Advanced Techniques",
    "AWS Cloud Solutions"
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Sleek background image blending into the skills section */}
      <div 
        className="absolute inset-0 opacity-[0.40] pointer-events-none select-none mix-blend-multiply"
        style={{
          backgroundImage: `url(${techSkillsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-normal italic mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground font-sans">
            Expertise across the full backend technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-serif font-normal italic text-foreground">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 font-sans">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {renderStars(getStarRating(skill.level))}
                        </div>
                        <span className="text-xs text-muted-foreground/60 min-w-[35px]">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-serif font-normal italic text-foreground">Specializations & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150k+</div>
                <div className="text-muted-foreground text-sm">Concurrent Requests Handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-muted-foreground text-sm">Build Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-muted-foreground text-sm">Cloud Cost Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20ms</div>
                <div className="text-muted-foreground text-sm">Search Latency Achieved</div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-center uppercase tracking-wider text-foreground/80 font-sans">Key Competencies</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="bg-background border-border text-foreground/80 px-3 py-1 font-sans">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;