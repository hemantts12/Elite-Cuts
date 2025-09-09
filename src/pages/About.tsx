import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "10K+", label: "Happy Clients" },
    { icon: Clock, number: "24/7", label: "Service Excellence" },
    { icon: Star, number: "5.0", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Elite Cuts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded on the principles of exceptional craftsmanship and unwavering dedication to the art of grooming, Elite Cuts has been serving discerning gentlemen for over a decade.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                What began as a passion for traditional barbering has evolved into a cornerstone of the community. 
                Our master barbers combine time-honored techniques with contemporary style, creating an experience 
                that transcends a simple haircut.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every client who walks through our doors becomes part of the Elite Cuts family. We believe that 
                grooming is not just about looking good—it's about feeling confident, respected, and valued.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 bg-charcoal-light">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center border-border bg-card">
                    <CardContent className="p-8">
                      <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                      <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every cut is executed with precision and artistry, ensuring perfection in every detail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Tradition</h3>
                <p className="text-muted-foreground">
                  We honor the timeless traditions of barbering while embracing modern innovations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, delivering exceptional service with every visit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;