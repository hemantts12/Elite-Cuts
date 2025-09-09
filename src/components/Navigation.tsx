import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = useState<any>(null);
  
  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/');
  };
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Scissors className="h-8 w-8 text-primary rotate-45" />
          <span className="text-2xl font-bold text-foreground">Elite Cuts</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-foreground hover:text-primary transition-smooth ${
              isActive('/') ? 'text-primary' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className={`text-foreground hover:text-primary transition-smooth ${
              isActive('/gallery') ? 'text-primary' : ''
            }`}
          >
            Gallery
          </Link>
          <Link 
            to="/about" 
            className={`text-foreground hover:text-primary transition-smooth ${
              isActive('/about') ? 'text-primary' : ''
            }`}
          >
            About
          </Link>
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-foreground">
                <User className="h-4 w-4" />
                <span>Welcome, {currentUser.firstName}</span>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="mr-2">
                  Login
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="default">
                  Book Now
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;