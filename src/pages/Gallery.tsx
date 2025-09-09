import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import service1 from "@/assets/barber-service1.jpg";
import service2 from "@/assets/barber-service2.jpg";
import service3 from "@/assets/barber-service3.jpg";
import heroImage from "@/assets/hero-barber.jpg";

const Gallery = () => {
  const galleryItems = [
    { image: service1, title: "Classic Cuts", category: "Haircuts" },
    { image: service2, title: "Traditional Shaves", category: "Shaving" },
    { image: service3, title: "Beard Styling", category: "Grooming" },
    { image: heroImage, title: "Premium Experience", category: "Ambiance" },
    { image: service1, title: "Modern Styles", category: "Haircuts" },
    { image: service2, title: "Hot Towel Service", category: "Shaving" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Witness the artistry and craftsmanship that defines Elite Cuts. Every cut tells a story.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card key={index} className="group overflow-hidden border-border hover:shadow-gold transition-smooth">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-40 transition-smooth"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
                      <span className="text-sm text-primary font-semibold">{item.category}</span>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;