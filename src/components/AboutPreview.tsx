import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Clock, Star } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting <span className="text-primary">Excellence</span> Since 2009
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Elite Cuts, we believe that every gentleman deserves to look and feel his absolute best. 
              Our master barbers combine traditional techniques with modern innovation to deliver an 
              unparalleled grooming experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From classic cuts to contemporary styles, from traditional hot towel shaves to precision 
              beard sculpting, we are dedicated to the art of masculine grooming.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-subtle transition-smooth">
              <Award className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Master Craftsmen</h3>
                <p className="text-muted-foreground">Licensed professionals with years of experience</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-subtle transition-smooth">
              <Clock className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground">Open 7 days a week to fit your schedule</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-subtle transition-smooth">
              <Star className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Premium Experience</h3>
                <p className="text-muted-foreground">Luxury amenities and personalized service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;