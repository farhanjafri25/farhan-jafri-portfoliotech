import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";
import { sendContactEmail, type EmailData } from "@/api/send-email";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
                    <div className="text-muted-foreground text-sm">{CONTACT_INFO.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground text-sm">+91 95823 28439</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground text-sm">{CONTACT_INFO.location}</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-input/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-input/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      className="bg-input/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project requirements..."
                      className="bg-input/50 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
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