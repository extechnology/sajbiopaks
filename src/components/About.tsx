const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose CakeBox Pro?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Premium Quality</h3>
              <p className="text-muted-foreground">
                Food-safe materials and durable construction ensure your cakes stay fresh and secure during transport.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick turnaround times and reliable shipping to keep your business running smoothly.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored designs and sizes to match your brand and specific packaging requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;