import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import deliveryShowcase from "@/assets/delivery-showcase.jpg";

const About = () => {
  const features = [
    {
      icon: "🌱",
      title: "Eco-Friendly & Food-Safe Packaging",
      description: "All boxes are made using premium, food-grade, and eco-friendly materials, ensuring safety, hygiene, and sustainability."
    },
    {
      icon: "🎨",
      title: "Customized Solutions", 
      description: "We design cakes, pastries, broast, and food boxes tailored to your brand with unique sizes, styles, and printing options."
    },
    {
      icon: "⭐",
      title: "Quality & Reliability",
      description: "Strong, durable, and attractive packaging crafted to maintain food freshness, trusted by bakeries, restaurants, and food businesses across Kerala."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              SajBiopaks, a leading manufacturer and distributor in Kerala, provides customized cake, pastry, broast, and food boxes. 
              With eco-friendly, food-grade materials, we deliver durable, stylish, and functional packaging that ensures safety, 
              freshness, and attractive presentation, trusted by bakeries, restaurants, and food businesses across Kerala.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Saj Bio-Paks
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Deliveries
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses across Kerala for reliable and timely delivery
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src={deliveryShowcase} 
              alt="Saj Bio Paks delivery services across Kerala"
              className="w-full h-auto rounded-lg shadow-card"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Grow Your Business
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Customize your Boxes, Deliver Product with Quality and Prestige
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <WhatsAppButton />
    </div>
  );
};

export default About;