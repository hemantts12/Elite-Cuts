import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Master the Art of
          <span className="text-primary bg-gradient-gold bg-clip-text text-transparent"> Grooming</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the finest in traditional barbering with modern style. Where craftsmanship meets luxury.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-gold hover:shadow-gold transition-smooth">
              Book Appointment
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;