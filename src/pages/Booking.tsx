import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { Scissors, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate booking process
    setTimeout(() => {
      // Save appointment
      const appointments = JSON.parse(localStorage.getItem('eliteCutsAppointments') || '[]');
      const appointment = {
        id: Date.now().toString(),
        customerName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      appointments.push(appointment);
      localStorage.setItem('eliteCutsAppointments', JSON.stringify(appointments));
      
      toast({
        title: "Appointment Booked!",
        description: "We'll contact you soon to confirm your appointment details.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Book Your Appointment</h1>
            <p className="text-muted-foreground">Reserve your spot at Elite Cuts - Premium grooming experience awaits</p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-card-foreground">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Hemant"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-card-foreground">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Kumar"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Hemant@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91-9351167891"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-card-foreground">Service *</Label>
                  <Select onValueChange={handleSelectChange('service')} required>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select your preferred service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Premium Haircut - Rs.150</SelectItem>
                      <SelectItem value="shave">Traditional Shave - Rs.50</SelectItem>
                      <SelectItem value="beard">Beard Styling - Rs.70</SelectItem>
                      <SelectItem value="combo">Haircut + Shave Combo - Rs.270</SelectItem>
                      <SelectItem value="deluxe">Deluxe Package - Rs.450</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-card-foreground">Preferred Date *</Label>
                    <Input 
                      id="date" 
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-card-foreground">Preferred Time *</Label>
                    <Select onValueChange={handleSelectChange('time')} required>
                      <SelectTrigger className="bg-input border-border text-foreground">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-card-foreground">Special Requests (Optional)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any specific styling preferences, allergies, or special requests..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground min-h-[100px]"
                  />
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Please note:</strong> This is a booking request. We'll contact you within 24 hours to confirm your appointment and discuss any specific requirements.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-gold hover:shadow-gold transition-smooth text-lg py-6"
                >
                  {isLoading ? "Booking Appointment..." : "Book My Appointment"}
                </Button>
              </form>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                  {" "}or{" "}
                  <Link to="/register" className="text-primary hover:underline">
                    create an account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;