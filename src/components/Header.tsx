import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50 w-full border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-bold bg-gradient-warm bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Saj Bio Paks
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-2 px-1 ${
                location.pathname === '/' 
                  ? 'text-primary after:w-full' 
                  : 'after:w-0 hover:after:w-full'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-2 px-1 ${
                location.pathname === '/products' 
                  ? 'text-primary after:w-full' 
                  : 'after:w-0 hover:after:w-full'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-2 px-1 ${
                location.pathname === '/contact' 
                  ? 'text-primary after:w-full' 
                  : 'after:w-0 hover:after:w-full'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <Button 
            variant="default" 
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-soft animate-fade-in">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === '/' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === '/products' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>

              <Link 
                to="/contact" 
                className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="default" 
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;