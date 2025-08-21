import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";




const Hero = () => {



  return (



    <section className="relative min-h-[650px] pb-20 sm:pb-0 sm:min-h-[600px] flex items-center bg-gradient-warm overflow-hidden">


      {/* Decorative SVG dashed lines */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100"
          stroke="url(#grad1)"
          strokeWidth="3"
          strokeDasharray="12 10"
          fill="transparent"
        />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
      </svg>



      {/* Delivery Vehicle (animated background) */}
      <motion.img
        src="/delivery-man.png"
        alt="Delivery vehicle"
        loading="lazy"
        className="absolute bottom-0 sm:bottom-1 -left-1 sm:left-2 w-20 sm:w-28 md:w-36 lg:w-44 opacity-80"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />




      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


          {/* LEFT TEXT */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              Designed to keep freshness inside and smiles outside
            </motion.h1>


            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
            >
              We deliver eco-friendly, durable, and stylish packaging solutions
              that enhance food presentation and safety.
            </motion.p>


            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >

              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-gradient-hero text-primary-foreground hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  Browse Products
                </Button>
              </Link>


              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 w-full sm:w-auto"
                >
                  Get Quote
                </Button>
              </Link>


            </motion.div>


          </motion.div>



          {/* RIGHT IMAGES */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            {/* Glassmorphic Hero Image */}
            <motion.div
              className="relative w-[85%] sm:w-[90%] max-w-md md:max-w-lg rounded-2xl bg-white/30 backdrop-blur-xl shadow-2xl p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/hero-saj.jpg"
                alt="Eco-friendly packaging solutions by Saj Bio Paks"
                loading="lazy"
                className="rounded-xl w-full h-auto object-cover"
              />
            </motion.div>


            {/* Floating Accent Images */}
            <motion.img
              src="/truck.png"
              alt="Food box"
              loading="lazy"
              className="absolute -top-10 -left-4 sm:-left-3 w-14 sm:w-20 md:w-24 lg:w-28 drop-shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />


            <motion.img
              src="/delivery-box.png"
              alt="Cup"
              loading="lazy"
              className="absolute -bottom-[60px] sm:bottom-[-20px] right-[-20px] w-14 sm:w-20 md:w-24 lg:w-28 drop-shadow-xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />


          </motion.div>


        </div>

      </div>


      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 -right-10 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -left-10 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-[120px] sm:h-[180px] md:h-[220px] lg:h-[250px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />


    </section>


  );


};

export default Hero;
