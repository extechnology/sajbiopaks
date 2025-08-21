import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";




export default function WhyUs() {



    const features = [
        {
            icon: "🌱",
            title: "Eco-Friendly & Food-Safe Packaging",
            description:
                "All boxes are made using premium, food-grade, and eco-friendly materials, ensuring safety, hygiene, and sustainability.",
        },
        {
            icon: "🎨",
            title: "Customized Solutions",
            description:
                "We design cakes, pastries, broast, and food boxes tailored to your brand with unique sizes, styles, and printing options.",
        },
        {
            icon: "⭐",
            title: "Quality & Reliability",
            description:
                "Strong, durable, and attractive packaging crafted to maintain food freshness, trusted by bakeries, restaurants, and food businesses across Kerala.",
        },
        {
            icon: "💰",
            title: "Cost-Effective",
            description:
                "Affordable and innovative packaging solutions that help businesses save while still impressing customers with premium quality.",
        },
    ];



    return (


        < section className="py-16 bg-background" >


            <div className="container mx-auto px-4 sm:px-6 lg:px-8">


                <div className="grid lg:grid-cols-2 gap-12 items-center">


                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Why Choose Saj Bio-Paks
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We are revolutionizing food packaging — connecting sustainability,
                            customization, and quality to ensure your brand delivers the best
                            impression every time.
                        </p>
                    </div>


                    {/* Right Section (Features Grid) */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="relative text-center rounded-2xl shadow-lg border border-primary/10 bg-white/30 backdrop-blur-xl hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                <CardHeader>
                                    <div className="w-14 h-14 bg-gradient-to-tr from-primary/20 to-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">{feature.icon}</span>
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-primary">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed px-2">
                                        {feature.description}
                                    </p>
                                </CardContent>
                                {/* Accent border glow on hover */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-primary/30 transition duration-300" />
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section >



    )




}
