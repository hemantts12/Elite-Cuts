import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lakshya Bhati",
      text: "Exceptional service and attention to detail. The atmosphere is perfect and the barbers are true artists.",
      rating: 5,
      role: "Business Executive"
    },
    {
      name: "Hemant Singh Chauhan",
      text: "Been coming here for 3 years. Consistently the best cuts in the city. Professional and friendly staff.",
      rating: 5,
      role: "Creative Director"
    },
    {
      name: "Mayank Yadav",
      text: "Elite Cuts lives up to its name. Premium experience from start to finish. Highly recommended!",
      rating: 5,
      role: "Entrepreneur"
    }
  ];

  return (
    <section className="py-20 px-4 bg-charcoal-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the gentlemen who trust us with their style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-gold transition-smooth">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;