import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import InquiryModal from "@/components/common/InquiryModal";
import { useState } from "react";



const ProductCard = ({ products }: { products: any[] }) => {


    // State for Inquiry Modal
    const [open, setOpen] = useState<boolean>(false)



    return (


        <section className="py-10 sm:py-16 bg-background">


            <div className="container mx-auto px-4 sm:px-6 lg:px-8">


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">


                    {products.map((product, index) => (


                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="h-full"
                        >

                            <Card className="overflow-hidden rounded-2xl shadow-lg border border-primary/10 bg-white/30 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">


                                {/* Image */}
                                <div className="aspect-video overflow-hidden relative group">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>


                                {/* Card Content */}
                                <CardHeader>
                                    <CardTitle className="text-xl md:text-2xl font-semibold text-primary group-hover:text-primary/90 transition-colors">
                                        {product.title}
                                    </CardTitle>
                                </CardHeader>


                                <CardContent className="flex flex-col justify-between flex-grow space-y-4">

                                    <ul className="space-y-3">

                                        {product.features.map((feature, featureIndex) => {

                                            const [label, ...rest] = feature.split(":");
                                            const value = rest.join(":");

                                            return (

                                                <li
                                                    key={featureIndex}
                                                    className="flex items-start gap-2 text-sm"
                                                >
                                                    {/* Icon bullet */}
                                                    <span className="mt-1 text-primary">✔</span>
                                                    {/* Content */}
                                                    <div className="flex flex-wrap">
                                                        <span className="font-semibold text-primary">
                                                            {label}:
                                                        </span>
                                                        <span className="ml-1 text-muted-foreground">
                                                            {value}
                                                        </span>
                                                    </div>
                                                </li>

                                            );

                                        })}

                                    </ul>


                                    {/* CTA Button */}
                                    <Button onClick={() => setOpen(true)} className="w-full mt-6 bg-gradient-to-r from-primary to-yellow-400 text-white font-semibold rounded-xl shadow hover:shadow-lg hover:opacity-95 transition-all duration-300">
                                        Enquire Now<Send className="inline-block w-4 h-4" />
                                    </Button>

                                </CardContent>

                            </Card>

                        </motion.div>

                    ))}

                </div>


            </div>



            {/* Inquiry Modal */}
            <InquiryModal
                open={open}
                onOpenChange={setOpen}
            />


        </section>


    );

};

export default ProductCard;
