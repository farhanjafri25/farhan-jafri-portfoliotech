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
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions solving real-world problems at scale
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-border">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-primary font-bold text-lg">{value}</div>
                        <div className="text-muted-foreground text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
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