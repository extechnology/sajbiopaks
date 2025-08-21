import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"




// Modal Props Interface
interface InquiryModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}




const InquiryModal: React.FC<InquiryModalProps> = ({ open, onOpenChange }) => {

    const phoneNumber = "+919778344852"
    const whatsappNumber = "+919778344852"


    return (


        <Dialog open={open} onOpenChange={onOpenChange}>


            <DialogContent className="max-w-md rounded-2xl p-6 bg-gradient-warm shadow-xl">


                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary text-center">
                        Contact Us
                    </DialogTitle>
                </DialogHeader>


                <div className="flex flex-col gap-4 mt-6">


                    {/* Call Button */}
                    <Button
                        asChild
                        className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 flex items-center gap-2 text-lg py-6 rounded-xl"
                    >
                        <a href={`tel:${phoneNumber}`}>
                            <Phone className="w-5 h-5" /> Call {phoneNumber.replace("+91", "+91 ")}
                        </a>
                    </Button>


                    {/* WhatsApp Button */}
                    <Button
                        asChild
                        className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 flex items-center gap-2 text-lg py-6 rounded-xl"
                    >
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle className="w-5 h-5" /> WhatsApp {phoneNumber.replace("+91", "+91 ")}
                        </a>
                    </Button>


                </div>


            </DialogContent>


        </Dialog>

    )

}

export default InquiryModal
