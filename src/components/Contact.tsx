import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to upgrade your packaging? Contact us for quotes and samples.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-accent">📧</span>
                <span>info@cakeboxpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">📍</span>
                <span>123 Packaging Street, Business District</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">🕒</span>
                <span>Mon-Fri: 8AM-6PM</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-primary">Quick Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Need a custom quote? Fill out our online form or give us a call. 
                We'll get back to you within 24 hours with pricing and availability.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90">
                  Request Quote Online
                </Button>
                <Button variant="outline" className="w-full">
                  Download Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;