import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Zap, Brush } from "lucide-react";
import { Link } from "react-router-dom";
import service1 from "@/assets/barber-service1.jpg";
import service2 from "@/assets/barber-service2.jpg";
import service3 from "@/assets/barber-service3.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Premium Haircuts",
      description: "Classic and modern cuts tailored to your style and personality",
      price: "Rs.200",
      image: service1
    },
    {
      icon: Zap,
      title: "Traditional Shaves",
      description: "Hot towel straight razor shaves for the ultimate grooming experience",
      price: "Rs.70",
      image: service2
    },
    {
      icon: Brush,
      title: "Beard Styling",
      description: "Precision beard trimming and styling to complement your look",
      price: "Rs.70",
      image: service3
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafted with precision, delivered with passion. Every service is a masterpiece.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-gold transition-smooth border-border bg-card overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-40 group-hover:opacity-30 transition-smooth"></div>
                  <div className="absolute top-4 left-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute bottom-4 right-4 text-2xl font-bold text-primary">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/booking">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      Book Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;