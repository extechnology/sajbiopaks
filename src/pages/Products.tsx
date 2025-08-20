import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cakeBoxes from "@/assets/cake-boxes.jpg";
import pastryBoxes from "@/assets/pastry-boxes.jpg";
import broastBoxes from "@/assets/broast-boxes.jpg";
import burgerBoxes from "@/assets/burger-boxes.jpg";
import cakeBases from "@/assets/cake-bases.jpg";
import cakeBags from "@/assets/cake-bags.jpg";

const Products = () => {
  const products = [
    {
      title: "Cake Boxes",
      image: cakeBoxes,
      features: [
        "Sturdy Structure: Strong and durable to safely hold cakes without damage",
        "Food-Grade Material: Made from safe, hygienic materials suitable for direct food contact",
        "Attractive Design: Elegant designs, often with windows, for better presentation",
        "Easy Handling: Foldable, lightweight, and convenient with handles or secure lids",
        "Customizable Options: Available in different sizes, colors, and branding prints"
      ]
    },
    {
      title: "Pastry Boxes",
      image: pastryBoxes,
      features: [
        "Compact Design: Perfectly sized to hold pastries, donuts, and sweets securely",
        "Food-Safe Material: Made with hygienic, eco-friendly, and grease-resistant paperboard",
        "Visual Appeal: Available with transparent windows for attractive product display",
        "Lightweight & Portable: Easy to carry while maintaining product freshness",
        "Customizable: Can be tailored with branding, colors, and designs to suit businesses"
      ]
    },
    {
      title: "Broast/Chicken Boxes",
      image: broastBoxes,
      features: [
        "Grease-Resistant: Special coating to prevent oil stains and leakage",
        "Durable Build: Strong enough to hold fried chicken and heavy portions securely",
        "Ventilation Design: Keeps food crispy by reducing excess moisture",
        "Food-Grade Material: Safe, hygienic, and eco-friendly for direct food contact",
        "Custom Branding: Available with printed logos, designs, and sizes for businesses"
      ]
    },
    {
      title: "Burger Boxes",
      image: burgerBoxes,
      features: [
        "Clamshell Design: Easy-to-open and close, keeping burgers intact and fresh",
        "Grease-Resistant: Prevents oil leakage and keeps packaging clean",
        "Eco-Friendly Material: Made from safe, recyclable, and food-grade paperboard",
        "Sturdy & Lightweight: Strong enough to hold heavy burgers while being portable",
        "Customizable: Available in various sizes, colors, and printed branding for businesses"
      ]
    },
    {
      title: "Cake Base Plates",
      image: cakeBases,
      features: [
        "Strong & Durable: Provides sturdy support for heavy cakes without bending",
        "Food-Grade Material: Safe, hygienic, and suitable for direct food contact",
        "Moisture & Grease Resistant: Prevents absorption, keeping the base clean",
        "Attractive Finish: Available in gold, silver, and printed designs for elegant presentation",
        "Customizable Sizes & Shapes: Tailored to fit cakes of different dimensions and styles"
      ]
    },
    {
      title: "Cake Bags",
      image: cakeBags,
      features: [
        "Durable & Tear-Resistant: Strong enough to carry cakes safely without ripping",
        "Food-Safe Material: Made from hygienic, eco-friendly, and non-toxic materials",
        "Convenient Handles: Designed for easy and comfortable carrying",
        "Attractive Design: Available in stylish prints and colors for elegant presentation",
        "Customizable Options: Can be branded with logos, sizes, and unique designs for businesses"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are providing all types of customized food boxes, including cake, pastry, broast, snack, and meal boxes, 
              crafted with premium quality materials to ensure safety, durability, and attractive presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">
                          {feature.split(':')[0]}:
                        </span>
                        <span className="ml-1">
                          {feature.split(':').slice(1).join(':')}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-hero text-primary-foreground hover:opacity-90">
                    Enquire Now!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;