import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import experienceImage from "@/assets/experience_image.png";

const Experience = () => {
  const experiences = [
    {
      company: "AqueraLabs Pvt Ltd",
      position: "Software Engineer",
      duration: "07 2024 – Present",
      location: "Bangalore, India",
      achievements: [
        "Collaborated the integration of generative AI and RAG mechanisms into connector development, leveraging OpenAPI specifications to auto-generate API scripts, reducing connector build time by 40%",
        "Optimized connector development pipelines using Node.js, AWS S3, and LLMs, reducing manual coding efforts by 25%",
        "Built and maintained API wrappers to transform proprietary HR and ATS system data into SCIM-compliant formats, ensuring compatibility with identity platforms like Okta",
        "Engaged directly with clients achieving 90% satisfaction rating across 20+ projects"
      ],
      technologies: ["Node.js", "AWS S3", "OpenAPI", "SCIM", "Okta", "RAG", "LLMs"]
    },
    {
      company: "Hoodlive Internet Private Limited (Hood)",
      position: "Software Engineer", 
      duration: "05 2022 – 06 2024",
      location: "Gurugram, India",
      achievements: [
        "Orchestrated development of highly scalable backend architecture managing 150k concurrent requests per second during SharkTank India event",
        "Conceptualised Redis bloom filter enabling seamless deletion management and optimizing 20% memory efficiency",
        "Architected robust video upload feature leveraging FFMPEG library, improving user engagement by 10%",
        "Led development of Direct Messaging, Credits System with payment gateway integration, contributing to 15% increase in user retention",
        "Implemented TCP socket connections, reducing latency by 100-200ms for Nest micro-services",
        "Achieved 60% reduction in cloud costs by implementing scalable Redis bloom filter and optimizing database operations",
        "Designed intelligent content search algorithm using ExpressJs and ElasticSearch, reducing search latency to 20ms"
      ],
      technologies: ["NestJS", "Redis", "FFMPEG", "ElasticSearch", "ExpressJS", "ReactJS", "AWS", "MongoDB", "PostgreSQL", "DynamoDB", "Neptune"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Sleek background image blending into the experience section */}
      <div 
        className="absolute inset-0 opacity-[0.50] pointer-events-none select-none mix-blend-multiply"
        style={{
          backgroundImage: `url(${experienceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-normal italic mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground font-sans">
            Building scalable solutions and driving innovation in backend engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2.5xl font-serif font-normal italic text-primary mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-foreground font-semibold mb-2 font-sans">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground text-sm font-sans">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground/60" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground/60" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground font-sans text-sm uppercase tracking-wider">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground font-sans">
                          <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground font-sans text-sm uppercase tracking-wider">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-background border-border text-foreground/80 text-xs px-2.5 py-0.5">
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

export default Experience;