import { Mail, MapPin, Phone } from "lucide-react";




const Contact = () => {


  return (


    <div className="min-h-screen">

      <section className="py-5 sm:py-12 bg-gradient-warm relative overflow-hidden">


        {/* Decorative blurred circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">


          {/* Title */}
          <div className="text-center mb-16">

            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 relative inline-block">
              Contact Information
              {/* Underline accent */}
              <span className="absolute left-1/2 -bottom-3 w-28 h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full -translate-x-1/2"></span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for customized packaging solutions that match
              your needs.
            </p>

          </div>


          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Phone */}
            <a
              href="tel:+919778344852"
              className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-yellow-400 text-white shadow-md group-hover:scale-110 transition">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Call Us</h3>
              <p className="text-muted-foreground font-medium">
                +91&nbsp;97783&nbsp;44852
              </p>
            </a>


            {/* Email */}
            <a
              href="mailto:sajbiopak@gmail.com"
              className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-yellow-400 text-white shadow-md group-hover:scale-110 transition">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-muted-foreground font-medium">
                sajbiopak@gmail.com
              </p>
            </a>


            {/* Location */}
            <div className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 text-center border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">

              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-yellow-400 text-white shadow-md group-hover:scale-110 transition">
                <MapPin size={28} />
              </div>

              <h3 className="text-xl font-semibold text-primary mb-2">Visit Us</h3>

              <p className="text-muted-foreground leading-relaxed font-medium">
                Pullikadavu Road, Perumugham,<br />
                Feroke, Kozhikode,<br />
                Kerala&nbsp;673631
              </p>

            </div>


          </div>


        </div>


      </section>



      {/* Google Map */}
      <section className="pt-16 bg-gradient-warm">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8">
            <div className="text-center relative inline-block mb-5">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-0 relative inline-block">
                Find Us Here
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
              Visit our facility in Feroke, Kozhikode for direct consultation
            </p>
          </div>

        </div>

        <div className="w-full mx-auto overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28336.961961161145!2d75.82420737307432!3d11.175024628002962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651bdffe94e35%3A0xc50e4e54a594d129!2sSaj%20Bio%20Pak%2C%20Rums%20Enterprise!5e1!3m2!1sen!2sin!4v1755774907031!5m2!1sen!2sin"
            className="w-full h-[450px] md:h-[450px] lg:h-[450px] border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </section>

    </div>


  );


};

export default Contact;