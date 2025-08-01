import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Expert in Node.js, NestJS, and TypeScript with focus on scalable architectures"
    },
    {
      icon: Server,
      title: "System Architecture",
      description: "Designed systems handling 150k+ concurrent requests with optimal performance"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Advanced experience with Redis, MongoDB, PostgreSQL, and DynamoDB"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "AWS expertise with cost optimization achieving 60% reduction in cloud expenses"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Backend Engineer with 2+ years of experience building scalable systems and integrating 
            cutting-edge technologies. Passionate about creating efficient solutions that handle 
            high-volume traffic and complex data processing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card/50 backdrop-blur border-border shadow-card">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  I started my career at Hood, where I contributed to building a platform that handled 
                  massive scale during high-traffic events like SharkTank India. This experience taught 
                  me the importance of scalable architecture and performance optimization.
                </p>
                <p className="text-muted-foreground mb-6">
                  Currently at AqueraLabs, I'm working on integrating AI and RAG mechanisms into connector 
                  development, reducing build times by 40% and enabling rapid deployment for clients.
                </p>
                <Badge variant="secondary" className="mb-2 mr-2">B.Tech Electronics & Communication</Badge>
                <Badge variant="secondary" className="mb-2">CGPA: 9.1</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Backend Development</span>
                  <span className="text-sm text-muted-foreground">95%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">System Architecture</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[90%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Cloud Technologies</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[85%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Database Management</span>
                  <span className="text-sm text-muted-foreground">88%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[88%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;