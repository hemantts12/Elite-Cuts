import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { Scissors } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    notes: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.service || !formData.date) {
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

    // Simulate registration process
    setTimeout(() => {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('eliteCutsUsers') || '[]');
      const existingUser = users.find((u: any) => u.email === formData.email);
      
      if (existingUser) {
        toast({
          title: "Error",
          description: "An account with this email already exists",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
      };

      // Save user
      users.push(newUser);
      localStorage.setItem('eliteCutsUsers', JSON.stringify(users));
      
      // Save appointment
      const appointments = JSON.parse(localStorage.getItem('eliteCutsAppointments') || '[]');
      const appointment = {
        id: Date.now().toString(),
        userId: newUser.id,
        customerName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        notes: formData.notes,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      appointments.push(appointment);
      localStorage.setItem('eliteCutsAppointments', JSON.stringify(appointments));
      
      // Auto login
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      toast({
        title: "Success!",
        description: "Account created and appointment booked successfully!",
      });
      
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <Scissors className="h-16 w-16 text-primary mx-auto mb-4 rotate-45" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Book Your Appointment</h1>
            <p className="text-muted-foreground">Join the Elite Cuts family and experience luxury grooming</p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground">Create Account & Book</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-card-foreground">First Name</Label>
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
                    <Label htmlFor="lastName" className="text-card-foreground">Last Name</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="hemant@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">Phone Number</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-card-foreground">Preferred Service</Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Premium Haircut - Rs.150</SelectItem>
                      <SelectItem value="shave">Traditional Shave - Rs.50</SelectItem>
                      <SelectItem value="beard">Beard Styling - Rs.70</SelectItem>
                      <SelectItem value="combo">Haircut + Shave - Rs.250</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-card-foreground">Preferred Date</Label>
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
                  <Label htmlFor="notes" className="text-card-foreground">Special Requests (Optional)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any specific styling preferences or requests..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-card-foreground">Create Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={handleInputChange}
                    minLength={6}
                    className="bg-input border-border text-foreground"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-gold hover:shadow-gold transition-smooth text-lg py-6"
                >
                  {isLoading ? "Creating Account..." : "Create Account & Book Appointment"}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in here
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

export default Register;