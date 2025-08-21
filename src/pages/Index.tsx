import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import About from "../components/home/About";
import OurDeliveries from "@/components/home/OurDeliveries";
import CTASection from "@/components/home/Cta";
import { BlurFade } from "@/components/magicui/blur-fade";


const Index = () => {


  return (


    <div className="min-h-screen">

      <Hero />

      <BlurFade delay={0.25} duration={0.7} inView>
        <About />
      </BlurFade>

      <BlurFade delay={0.5} duration={0.7} inView>
        <WhyUs />
      </BlurFade>

      <BlurFade delay={0.75} duration={0.7} inView>
        <OurDeliveries />
      </BlurFade>

      <BlurFade delay={1} duration={0.7} inView>
        <CTASection />
      </BlurFade>

    </div>


  );


};

export default Index;
