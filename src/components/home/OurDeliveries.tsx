import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';



export default function OurDeliveries() {


    // Generate a list of sample images
    const images = [
        { src: "/PACKAGE 1-01.jpg", alt: "Sample Image 1" },
        { src: "/PACKAGE 1-02.jpg", alt: "Sample Image 2" },
        { src: "/PACKAGE 1-03.jpg", alt: "Sample Image 3" },
        { src: "/PACKAGE 1-04.jpg", alt: "Sample Image 4" },
        { src: "/PACKAGE 1-05.jpg", alt: "Sample Image 5" },
        { src: "/PACKAGE 1-06.jpg", alt: "Sample Image 6" },
        { src: "/PACKAGE 1-07.jpg", alt: "Sample Image 7" },
    ];



    return (


        < section className="py-10 bg-gradient-warm" >

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">

                    <div className="text-center relative inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative inline-block">
                            Our Deliveries
                            {/* Elegant curved underline */}
                            <svg
                                className="absolute left-0 right-0 -bottom-4 mx-auto w-36 h-6 text-primary"
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
                        </h2>
                    </div>


                    <p className="text-lg text-muted-foreground">
                        Trusted by businesses across Kerala for reliable and timely
                        delivery
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <MotionEffect
                            key={index}
                            slide={{ direction: "down" }}
                            fade
                            zoom
                            inView
                            delay={0.5 + index * 0.1}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="w-[400px] h-[250px] object-cover object-center bg-muted rounded-xl flex items-center justify-center"
                            />
                        </MotionEffect>
                    ))}
                </div>



            </div>

        </section >

    )



}
