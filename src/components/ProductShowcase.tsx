import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import birthdayBox from "@/assets/birthday-box.jpg";
import productRange from "@/assets/product-range.jpg";

const ProductShowcase = () => {
  const products = [
    {
      title: "Birthday Cake Boxes",
      description: "Special occasion boxes with clear windows and elegant design",
      image: birthdayBox,
      features: ["Clear viewing window", "Secure closure", "Multiple sizes", "Custom printing available"]
    },
    {
      title: "Standard Cake Boxes",
      description: "Everyday packaging solutions for all your baking needs",
      image: productRange,
      features: ["Durable construction", "Food-safe materials", "Easy assembly", "Bulk ordering available"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored packaging designed specifically for your business",
      image: productRange,
      features: ["Brand customization", "Unique sizes", "Special materials", "Design consultation"]
    }
  ];

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From small cupcake boxes to large celebration cake containers, 
            we offer comprehensive packaging solutions for every need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-card transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;