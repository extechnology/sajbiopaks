import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const CTASection = () => {


    return (


        <section className="py-5 sm:py-10 px-2 sm:px-6 flex justify-center relative">


            {/* White glow behind the card */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-7xl w-full bg-primary text-white rounded-2xl shadow-2xl p-10 text-center"
            >


                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Let’s Get In Touch
                </h2>


                <p className="text-lg md:text-xl mb-8 text-white/80">
                    We’d love to hear from you. Whether it’s a project inquiry or a quick
                    question, we’re here to help.
                </p>


                <div className="flex flex-col sm:flex-row justify-center gap-4">


                    <Button
                        asChild
                        variant="secondary"
                        className="rounded-full px-6 py-3 text-lg shadow-lg"
                    >
                        <a href="tel:+919778344852">Book a Call</a>
                    </Button>


                    <Link to={'/contact'} className="">
                        <Button
                            variant="secondary"
                            className="rounded-full px-6 py-3 text-lg shadow-lg"
                        >
                            Get a Quote
                        </Button>
                    </Link>
               
                </div>


            </motion.div>

        </section>

    );

};

export default CTASection;
