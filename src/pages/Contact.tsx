import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for customized packaging solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Saj Bio Pak</CardTitle>
                <p className="text-muted-foreground">An Initiative of Rums Enterprise</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-accent text-xl mt-1">📍</span>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Pullikadavu Road, Perumugham,<br/>
                      Feroke, Kozhikode, Kerala 673631
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-accent text-xl">📞</span>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 97783 44852</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-accent text-xl">📧</span>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">sajbiopak@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Place Your Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  Looking for customized, eco-friendly cake, pastry, broast, or food boxes? 
                  Connect with SajBiopaks today for durable, stylish, and food-safe packaging 
                  solutions tailored to your business needs.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 text-lg py-6">
                    Enquire Now!
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-lg py-6"
                    onClick={() => window.open(`https://wa.me/919778344852?text=${encodeURIComponent('Hi! I would like to get a quote for your packaging solutions.')}`, '_blank')}
                  >
                    WhatsApp Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Find Us Here
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit our facility in Feroke, Kozhikode for direct consultation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Map />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;