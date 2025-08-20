import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import About from "./About";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Quick Links Section */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From cake boxes to complete packaging solutions - we have everything you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/products" className="group">
              <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-card transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">View Products</h3>
                <p className="text-muted-foreground">Browse our complete range of packaging solutions</p>
              </div>
            </Link>
            
            <Link to="/about" className="group">
              <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-card transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">About Us</h3>
                <p className="text-muted-foreground">Learn more about our company and values</p>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="bg-card p-8 rounded-lg shadow-soft hover:shadow-card transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Get Quote</h3>
                <p className="text-muted-foreground">Contact us for customized packaging solutions</p>
              </div>
            </Link>
          </div>
        </div>
      </section> */}
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
