import { motion } from "framer-motion";
import { Cake } from "lucide-react";




export default function SuspenseLoader() {

    
    // Company name split into letters for animation
    const name = "Saj Bio Paks".split("");


    return (


        <div className="flex items-center justify-center min-h-screen bg-primary text-primary-foreground">
            <motion.div
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Animated Icon */}
                <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                >
                    <Cake size={64} className="text-accent drop-shadow-lg" />
                </motion.div>

                {/* Company Name with Letter Animation */}
                <motion.h1
                    className="text-2xl md:text-3xl font-extrabold tracking-widest flex space-x-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.12 }
                        }
                    }}
                >
                    {name.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtext with shimmer effect */}
                <motion.p
                    className="text-primary-foreground/70 text-sm md:text-base relative overflow-hidden"
                    animate={{
                        backgroundPosition: ["-200% 0", "200% 0"]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Preparing eco-friendly packaging...
                </motion.p>
            </motion.div>
        </div>

    )



}
