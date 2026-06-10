import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Zap, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "No Money Loss Gaming App",
      description: "Developed a scalable no-money-loss gaming application powering features like Level Up, Spin, IPL, and inventory management for over 50,000 active users.",
      achievements: [
        "Designed backend services achieving 99.9% uptime",
        "Handled peak loads of 1,000 concurrent users",
        "Integrated multiple databases for optimal performance",
        "Built comprehensive user management system"
      ],
      technologies: ["NestJS", "Redis", "MongoDB", "PostgreSQL"],
      metrics: {
        users: "50,000+",
        uptime: "99.9%",
        concurrent: "1,000"
      },
      icon: Users
    },
    {
      title: "New Variant Redis Bloom Filter",
      description: "Researched and engineered an innovative Redis Bloom Filter variant supporting scalability, deletion operations, and fast hash computations in vanilla Redis.",
      achievements: [
        "Optimized space usage by 20%",
        "Enabled seamless deletion management",
        "Implemented fast hash computations",
        "Maintained scalability in vanilla Redis"
      ],
      technologies: ["Node.js", "Redis", "Redis Pipeline"],
      metrics: {
        optimization: "20%",
        team: "2 persons",
        performance: "Fast Hash"
      },
      icon: Zap
    },
    {
      title: "Hood Anonymous Feedback System",
      description: "Architected backend infrastructure for anonymous feedback application with focus on performance and scalability.",
      achievements: [
        "Achieved 50% boost in system response time",
        "Implemented Redis caching layer",
        "Integrated RDS for reliable data storage",
        "Built RESTful API services with NestJS"
      ],
      technologies: ["NestJS", "Redis", "RDS", "REST API"],
      metrics: {
        performance: "50%",
        latency: "<100ms",
        reliability: "High"
      },
      icon: Database
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-normal italic mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground font-sans">
            Innovative solutions solving real-world problems at scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:-translate-y-1 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="h-7 w-7 text-primary" />
                  <CardTitle className="text-xl font-serif font-normal italic text-foreground">{project.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground font-sans text-xs uppercase tracking-wider">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm font-sans">
                          <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-border">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center font-sans">
                        <div className="text-primary font-bold text-lg">{value}</div>
                        <div className="text-muted-foreground text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-background border-border text-foreground/85 text-xs px-2.5 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;