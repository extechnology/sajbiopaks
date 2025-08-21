



const About = () => {


  return (





    < section className="py-16 sm:py-20 bg-gradient-warm" >


      <div className="container mx-auto px-2 sm:px-6 lg:px-8">


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left: Image */}
          <div className="relative order-1">
            <img
              src="/hero-saj.jpg"
              alt="About Saj Bio Paks"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            {/* Floating accent circle */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
          </div>


          {/* Right: Text */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              About Us
            </h1>
            <p className="text-base text-justify sm:text-lg text-muted-foreground leading-relaxed">
              SajBiopaks, a leading manufacturer and distributor in Kerala,
              provides customized cake, pastry, broast, and food boxes. With
              eco-friendly, food-grade materials, we deliver durable, stylish,
              and functional packaging that ensures safety, freshness, and
              attractive presentation, trusted by bakeries, restaurants, and
              food businesses across Kerala.
            </p>
          </div>

        </div>

      </div>

    </section >




  );


};

export default About;
