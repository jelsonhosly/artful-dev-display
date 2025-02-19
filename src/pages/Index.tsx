
import { motion } from "framer-motion";
import { Code, Palette, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Design. Develop. Create.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Crafting beautiful digital experiences through design and code.
          </p>
          <Button size="lg" className="animate-fade-in">
            View Projects
          </Button>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="project-card">
              <img
                src={`https://picsum.photos/seed/${i}/600/400`}
                alt={`Project ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                <p className="text-muted-foreground mb-4">
                  Brief project description showcasing both design and development
                  skills.
                </p>
                <div className="flex gap-2">
                  <span className="skill-pill">UI/UX</span>
                  <span className="skill-pill">React</span>
                  <span className="skill-pill">Figma</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container px-4 py-20 bg-secondary/30">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Palette className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Design</h3>
            </div>
            <ul className="space-y-2">
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Visual Design</li>
              <li>Prototyping</li>
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Code className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Development</h3>
            </div>
            <ul className="space-y-2">
              <li>React & TypeScript</li>
              <li>Responsive Web Design</li>
              <li>Modern CSS & Animations</li>
              <li>Version Control</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" required />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
