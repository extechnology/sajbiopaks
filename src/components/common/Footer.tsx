import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import InquiryModal from "@/components/common/InquiryModal";
import { useState } from "react";



const Footer = () => {


  // State for Inquiry Modal
  const [open, setOpen] = useState<boolean>(false)


  return (

    <footer className="bg-primary text-primary-foreground py-10">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start text-center md:text-left">


          {/* Left Section */}
          <div className="space-y-3 max-w-xs">
            <h3 className="text-2xl font-bold">Saj Bio Paks</h3>
            <p className="text-primary-foreground/80">
              Eco-friendly packaging solutions for the food industry —
              Customize your boxes, deliver product with quality and prestige.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="inline-block mt-3 px-5 py-2 rounded-xl bg-accent text-primary font-medium hover:opacity-90 transition"
            >
              Enquire Now <Send className="inline-block ml-1 w-4 h-4" />
            </button>
          </div>


          {/* Middle Section - Quick Links */}
          <div className="space-y-3 text-sm max-w-xs">
            <h4 className="font-semibold mb-3 text-xl">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent">Products</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>


          {/* Right Section - Contact */}
          <div className="space-y-3 text-sm max-w-xs">
            <h4 className="font-semibold mb-3 text-xl">Contact</h4>
            <p>Saj Bio Pak</p>
            <p>An Initiative of Rums Enterprise</p>
            <p>
              Pullikadavu Road, Perumugham,<br />
              Feroke, Kozhikode, Kerala 673631
            </p>
            <p>
              📞 <a href="tel:+919778344852" className="hover:text-accent transition-colors">
                +91 97783 44852
              </a>
            </p>
            <p>
              ✉️ <a href="mailto:sajbiopak@gmail.com" className="hover:text-accent transition-colors">
                sajbiopak@gmail.com
              </a>
            </p>

          </div>
        </div>




        {/* Bottom Bar */}
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <span>© 2025 Saj Bio Paks. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>


      </div>


      {/* Inquiry Modal */}
      <InquiryModal
        open={open}
        onOpenChange={setOpen}
      />



    </footer>



  );

};



export default Footer;