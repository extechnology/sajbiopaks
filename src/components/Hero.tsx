import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroSaj from "@/assets/hero-saj.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Designed to keep freshness inside and smiles outside
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              We deliver eco-friendly, durable, and stylish packaging solutions that enhance food presentation and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
                  Browse Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroSaj} 
              alt="Eco-friendly packaging solutions by Saj Bio Paks" 
              className="w-full h-auto rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;