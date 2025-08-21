import { motion } from "framer-motion";
import cakeBoxes from "@/assets/cake-boxes.jpg";
import pastryBoxes from "@/assets/pastry-boxes.jpg";
import broastBoxes from "@/assets/broast-boxes.jpg";
import burgerBoxes from "@/assets/burger-boxes.jpg";
import cakeBases from "@/assets/cake-bases.jpg";
import cakeBags from "@/assets/cake-bags.jpg";
import ProductCard from "@/components/products/ProductCard";





const Products = () => {



  // Sample product data
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


      <section className="py-5 sm:py-20 bg-gradient-warm relative overflow-hidden">

        {/* Decorative background shape */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,96L60,106.7C120,117,240,139,360,133.3C480,128,600,96,720,117.3C840,139,960,213,1080,229.3C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >

            {/* Title */}
            <div className="text-center relative inline-block">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 relative inline-block">
                Our Products
                {/* Elegant curved underline */}
                <svg
                  className="absolute left-0 right-0 -bottom-4 mx-auto w-40 h-6 text-primary"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15 C60 5, 140 5, 190 15"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h1>
            </div>


            {/* Description */}
            <p className="text-md sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We provide a wide range of <span className="text-primary font-semibold">customized food boxes</span>,
              including cake, pastry, broast, snack, and meal boxes — all crafted with
              <span className="text-primary font-semibold"> premium quality materials</span> to ensure
              safety, durability, and stunning presentation for your brand.
            </p>

          </motion.div>

        </div>

      </section>



      {/* Product Card */}
      <ProductCard products={products} />


    </div>

  );


};

export default Products;