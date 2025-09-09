import { Scissors, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Scissors className="h-8 w-8 text-primary rotate-45" />
              <span className="text-2xl font-bold text-foreground">Elite Cuts</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Where traditional craftsmanship meets modern style. Experience the art of grooming at its finest.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-smooth">
                Gallery
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/booking" className="block text-muted-foreground hover:text-primary transition-smooth">
                Book Appointment
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91-9351167891</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@elitecuts.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>55 Shivanjali Cross Road Ahmedabad,Gujrat,380015</span>
              </div>
            </div>
          </div>
          
          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Hours</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div>Mon-Fri: 9AM-8PM</div>
                  <div>Sat: 8AM-6PM</div>
                  <div>Sun: 10AM-4PM</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-12 text-center">
          <p className="text-muted-foreground">
            © 2025 Elite Cuts. All rights reserved. Crafted with passion for the art of grooming.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;